import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/vasp';
const client = new MongoClient(uri);

async function connectToDatabase() {
  await client.connect();
  return client.db('vasp');
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const studentId = searchParams.get('studentId');

  if (!studentId) {
    return NextResponse.json({ message: 'Student ID is required' }, { status: 400 });
  }

  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection('users');

    const student = await usersCollection.findOne({ studentId, userType: 'student' });
    if (!student) {
      return NextResponse.json({ message: 'Student not found' }, { status: 404 });
    }

    // Map to profile data, split skills
    const profileData = {
      studentId: student.studentId,
      fullName: student.fullName || '',
      schoolName: student.schoolName || '',
      fieldOfStudy: student.fieldOfStudy || '',
      email: student.email || '',
      phone: student.phone || '',
      graduationYear: student.graduationYear || '',
      bio: student.bio || '',
      skills: student.skills ? student.skills.split(',').map((s: string) => s.trim()).filter((s: string) => s) : []
    };

    return NextResponse.json(profileData, { status: 200 });
  } catch (error) {
    console.error('Error fetching student profile:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { studentId, ...updateData } = body;

  if (!studentId) {
    return NextResponse.json({ message: 'Student ID is required' }, { status: 400 });
  }

  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection('users');

    // Join skills back to string
    const updateFields: any = {
      fullName: updateData.fullName,
      schoolName: updateData.schoolName,
      fieldOfStudy: updateData.fieldOfStudy,
      email: updateData.email,
      phone: updateData.phone,
      graduationYear: updateData.graduationYear,
      bio: updateData.bio,
      skills: updateData.skills ? updateData.skills.join(', ') : ''
    };

    const result = await usersCollection.updateOne(
      { studentId, userType: 'student' },
      { $set: updateFields }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: 'Student not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Profile updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating student profile:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await client.close();
  }
}
