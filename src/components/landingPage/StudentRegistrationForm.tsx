import React from 'react';

interface StudentRegistrationFormProps {
  studentForm: {
    studentId: string;
    schoolName: string;
    fieldOfStudy: string;
    password: string;
    confirmPassword: string;
  };
  setStudentForm: React.Dispatch<React.SetStateAction<{
    studentId: string;
    schoolName: string;
    fieldOfStudy: string;
    password: string;
    confirmPassword: string;
  }>>;
  handleStudentSubmit: (e: React.FormEvent) => void;
}

export default function StudentRegistrationForm({
  studentForm,
  setStudentForm,
  handleStudentSubmit,
}: StudentRegistrationFormProps) {
  return (
    <form onSubmit={handleStudentSubmit} className="space-y-6">
      <h4 className="text-xl font-semibold text-center text-gray-900 mb-6">
        Student Registration
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Student ID *
          </label>
          <input
            type="text"
            required
            value={studentForm.studentId}
            onChange={(e) => setStudentForm({...studentForm, studentId: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your student ID"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            School Name *
          </label>
          <input
            type="text"
            required
            value={studentForm.schoolName}
            onChange={(e) => setStudentForm({...studentForm, schoolName: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your school name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Field of Study *
          </label>
          <input
            type="text"
            required
            value={studentForm.fieldOfStudy}
            onChange={(e) => setStudentForm({...studentForm, fieldOfStudy: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g., Computer Science, Engineering"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password *
          </label>
          <input
            type="password"
            required
            value={studentForm.password}
            onChange={(e) => setStudentForm({...studentForm, password: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Create a password"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password *
          </label>
          <input
            type="password"
            required
            value={studentForm.confirmPassword}
            onChange={(e) => setStudentForm({...studentForm, confirmPassword: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Confirm your password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
      >
        Register as Student
      </button>
    </form>
  );
}
