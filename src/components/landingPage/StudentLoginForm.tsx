interface StudentLoginFormProps {
  loginForm: {
    studentId: string;
    password: string;
  };
  setLoginForm: React.Dispatch<React.SetStateAction<{
    studentId: string;
    password: string;
  }>>;
  handleStudentLogin: (e: React.FormEvent) => void;
}

export default function StudentLoginForm({
  loginForm,
  setLoginForm,
  handleStudentLogin,
}: StudentLoginFormProps) {
  return (
    <form onSubmit={handleStudentLogin} className="space-y-6">
      <h4 className="text-xl font-semibold text-center text-gray-900 mb-6">
        Student Login
      </h4>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Student ID *
        </label>
        <input
          type="text"
          required
          value={loginForm.studentId}
          onChange={(e) => setLoginForm({...loginForm, studentId: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your student ID"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password *
        </label>
        <input
          type="password"
          required
          value={loginForm.password}
          onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
      >
        Login as Student
      </button>
    </form>
  );
}
