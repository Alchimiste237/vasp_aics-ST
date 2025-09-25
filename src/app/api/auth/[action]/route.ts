import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/vasp';
const client = new MongoClient(uri);

async function connectToDatabase() {
  await client.connect();
  return client.db('vasp');
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ action: string }> }) {
  const { action } = await params;
  const body = await request.json();

  const db = await connectToDatabase();
  const usersCollection = db.collection('users');

  try {
    if (action === 'register') {
      const { userType, ...formData } = body;

      if (!userType) {
        return NextResponse.json({ message: 'User type is required' }, { status: 400 });
      }

      let userData: any = { userType };

      if (userType === 'student') {
        const { studentId, schoolName, fieldOfStudy, password, confirmPassword } = formData;
        if (!studentId || !schoolName || !fieldOfStudy || !password || !confirmPassword) {
          return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }
        if (password !== confirmPassword) {
          return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 });
        }
        const existingUser = await usersCollection.findOne({ studentId, userType });
        if (existingUser) {
          return NextResponse.json({ message: 'Student ID already exists' }, { status: 409 });
        }
        userData = { ...userData, studentId, schoolName, fieldOfStudy, password: await bcrypt.hash(password, 10) };
      } else if (userType === 'investor') {
        const { name, company, password, confirmPassword, phoneOrEmail } = formData;
        if (!name || !company || !password || !confirmPassword || !phoneOrEmail) {
          return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }
        if (password !== confirmPassword) {
          return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 });
        }
        const existingUser = await usersCollection.findOne({ name, userType });
        if (existingUser) {
          return NextResponse.json({ message: 'Investor name already exists' }, { status: 409 });
        }
        userData = { ...userData, name, company, phoneOrEmail, password: await bcrypt.hash(password, 10) };
      } else {
        return NextResponse.json({ message: 'Invalid user type' }, { status: 400 });
      }

      await usersCollection.insertOne(userData);
      return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
    } else if (action === 'login') {
      const { userType, ...loginData } = body;

      if (!userType) {
        return NextResponse.json({ message: 'User type is required' }, { status: 400 });
      }

      // Check for admin login from any tab
      if (userType === 'student' || userType === 'investor') {
        const identifier = userType === 'student' ? loginData.studentId : loginData.name;
        console.log('Checking for admin login:', { userType, identifier, password: loginData.password });
        const adminUser = await usersCollection.findOne({ userType: 'admin', username: identifier });
        console.log('Admin user found:', adminUser ? 'yes' : 'no');
        if (adminUser) {
          const isMatch = await bcrypt.compare(loginData.password, adminUser.password);
          console.log('Password match:', isMatch);
          if (isMatch) {
            console.log('Returning admin login');
            return NextResponse.json({ message: 'Login successful', userType: 'admin' }, { status: 200 });
          }
        }
      }

      let query: any = { userType };

      if (userType === 'student') {
        const { studentId, password } = loginData;
        if (!studentId || !password) {
          return NextResponse.json({ message: 'Student ID and password are required' }, { status: 400 });
        }
        query.studentId = studentId;
      } else if (userType === 'investor') {
        const { name, password } = loginData;
        if (!name || !password) {
          return NextResponse.json({ message: 'Name and password are required' }, { status: 400 });
        }
        query.name = name;
      } else if (userType === 'admin') {
        const { username, password } = loginData;
        if (!username || !password) {
          return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
        }
        query.username = username;
      } else {
        return NextResponse.json({ message: 'Invalid user type' }, { status: 400 });
      }

      const user = await usersCollection.findOne(query);
      if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
      }

      const isPasswordValid = await bcrypt.compare(loginData.password, user.password);
      if (!isPasswordValid) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
      }

      return NextResponse.json({ message: 'Login successful', userType }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Auth API error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await client.close();
  }
}
