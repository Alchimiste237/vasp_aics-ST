interface InvestorLoginFormProps {
  investorLoginForm: {
    name: string;
    password: string;
  };
  setInvestorLoginForm: React.Dispatch<React.SetStateAction<{
    name: string;
    password: string;
  }>>;
  handleInvestorLogin: (e: React.FormEvent) => void;
}

export default function InvestorLoginForm({
  investorLoginForm,
  setInvestorLoginForm,
  handleInvestorLogin,
}: InvestorLoginFormProps) {
  return (
    <form onSubmit={handleInvestorLogin} className="space-y-6">
      <h4 className="text-xl font-semibold text-center text-gray-900 mb-6">
        Investor Login
      </h4>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          required
          value={investorLoginForm.name}
          onChange={(e) => setInvestorLoginForm({...investorLoginForm, name: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password *
        </label>
        <input
          type="password"
          required
          value={investorLoginForm.password}
          onChange={(e) => setInvestorLoginForm({...investorLoginForm, password: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
      >
        Login as Investor
      </button>
    </form>
  );
}
