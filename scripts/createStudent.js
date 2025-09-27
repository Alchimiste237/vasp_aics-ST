const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

// Function to generate student data for all IDs
function generateStudents() {
  const studentIds = ['STU001', 'STU002', 'STU003', 'STU004', 'STU005'];
  const fullNames = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Charlie Wilson'];
  const schoolNames = ['University of Technology', 'State University', 'National Institute', 'Tech Academy', 'Science College'];
  const fieldsOfStudy = ['Computer Science', 'Engineering', 'Business', 'Mathematics', 'Physics'];

  return studentIds.map((id, index) => ({
    studentId: id,
    fullName: fullNames[index],
    schoolName: schoolNames[index],
    fieldOfStudy: fieldsOfStudy[index],
    email: '',
    phone: '',
    password: '0000',
    graduationYear: '',
    bio: '',
    skills: '',
  }));
}

async function createStudents() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/vasp';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('vasp');
    const usersCollection = db.collection('users');

    const studentsData = generateStudents();

    for (const studentData of studentsData) {
      // Check if student with this studentId already exists
      const existingStudent = await usersCollection.findOne({ studentId: studentData.studentId });
      if (existingStudent) {
        console.log(`Student with ID ${studentData.studentId} already exists.`);
        continue;
      }

      const hashedPassword = await bcrypt.hash(studentData.password, 10);

      const studentUser = {
        username: studentData.studentId, // Assuming username is studentId
        password: hashedPassword,
        userType: 'student',
        studentId: studentData.studentId,
        fullName: studentData.fullName,
        schoolName: studentData.schoolName,
        fieldOfStudy: studentData.fieldOfStudy,
        email: studentData.email,
        phone: studentData.phone,
        graduationYear: studentData.graduationYear,
        bio: studentData.bio,
        skills: studentData.skills,
        createdAt: new Date(),
      };

      const result = await usersCollection.insertOne(studentUser);
      console.log(`Student ${studentData.studentId} created with id:`, result.insertedId);
    }
  } catch (error) {
    console.error('Error creating students:', error);
  } finally {
    await client.close();
  }
}

createStudents();
