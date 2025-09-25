import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

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
    const projectsCollection = db.collection('projects');

    const projects = await projectsCollection.find({ studentId }).toArray();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Fetch projects error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { studentId, title, description, category, startDate, technologies, sellingPrice } = body;

  if (!studentId || !title || !description || !category || !startDate || !technologies || !sellingPrice) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    const db = await connectToDatabase();
    const projectsCollection = db.collection('projects');

    const newProject = {
      studentId,
      title,
      description,
      status: 'Starting',
      category,
      startDate,
      endDate: null,
      technologies,
      sellingPrice,
      views: 0,
      likes: 0,
      investors: 0,
      createdAt: new Date(),
    };

    const result = await projectsCollection.insertOne(newProject);
    const insertedProject = { ...newProject, id: result.insertedId.toString() };

    return NextResponse.json(insertedProject, { status: 201 });
  } catch (error) {
    console.error('Add project error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await client.close();
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { id, studentId, title, description, category, startDate, endDate, technologies, sellingPrice, status } = body;

  if (!id || !studentId) {
    return NextResponse.json({ message: 'Project ID and Student ID are required' }, { status: 400 });
  }

  try {
    const db = await connectToDatabase();
    const projectsCollection = db.collection('projects');

    const updateData: any = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (category) updateData.category = category;
    if (startDate) updateData.startDate = startDate;
    if (endDate !== undefined) updateData.endDate = endDate;
    if (technologies) updateData.technologies = technologies;
    if (sellingPrice) updateData.sellingPrice = sellingPrice;
    if (status) updateData.status = status;

    const result = await projectsCollection.updateOne(
      { _id: new ObjectId(id), studentId },
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

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const studentId = searchParams.get('studentId');

  if (!id || !studentId) {
    return NextResponse.json({ message: 'Project ID and Student ID are required' }, { status: 400 });
  }

  try {
    const db = await connectToDatabase();
    const projectsCollection = db.collection('projects');

    const result = await projectsCollection.deleteOne({ _id: new ObjectId(id), studentId });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Project deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Delete project error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await client.close();
  }
}
