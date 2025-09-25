const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

async function createAdminUser() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/vasp';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('vasp');
    const usersCollection = db.collection('users');

    const existingAdmin = await usersCollection.findOne({ username: 'admin' });
    if (existingAdmin) {
      if (!existingAdmin.userType) {
        await usersCollection.updateOne({ username: 'admin' }, { $set: { userType: 'admin' } });
        console.log('Admin user updated with userType.');
      } else {
        console.log('Admin user already exists and is up to date.');
      }
      return;
    }

    const hashedPassword = await bcrypt.hash('adminpassword', 10);

    const adminUser = {
      username: 'admin',
      password: hashedPassword,
      userType: 'admin',
      role: 'admin',
      createdAt: new Date(),
    };

    const result = await usersCollection.insertOne(adminUser);
    console.log('Admin user created with id:', result.insertedId);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await client.close();
  }
}

createAdminUser();
