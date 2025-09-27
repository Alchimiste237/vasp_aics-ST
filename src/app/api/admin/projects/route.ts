import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/vasp';
const client = new MongoClient(uri);

async function connectToDatabase() {
  await client.connect();
  return client.db('vasp');
}

// GET - Fetch all projects for admin
export async function GET(request: NextRequest) {
  try {
    const db = await connectToDatabase();
    const projectsCollection = db.collection('projects');

    const projects = await projectsCollection.find({}).toArray();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Fetch all projects error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await client.close();
  }
}

// PUT - Update project status and visibility for admin
export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { id, status, visibility } = body;

  if (!id) {
    return NextResponse.json({ message: 'Project ID is required' }, { status: 400 });
  }

  if (status === undefined && visibility === undefined) {
    return NextResponse.json({ message: 'At least status or visibility must be provided' }, { status: 400 });
  }

  try {
    const db = await connectToDatabase();
    const projectsCollection = db.collection('projects');

    const updateData: any = {};
    if (status !== undefined) updateData.status = status;
    if (visibility !== undefined) updateData.visibility = visibility;

    const result = await projectsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Project updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Update project error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await client.close();
  }
}


