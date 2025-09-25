interface InvestorRegistrationFormProps {
  investorForm: {
    name: string;
    company: string;
    password: string;
    confirmPassword: string;
    phoneOrEmail: string;
  };
  setInvestorForm: React.Dispatch<React.SetStateAction<{
    name: string;
    company: string;
    password: string;
    confirmPassword: string;
    phoneOrEmail: string;
  }>>;
  handleInvestorSubmit: (e: React.FormEvent) => void;
}

export default function InvestorRegistrationForm({
  investorForm,
  setInvestorForm,
  handleInvestorSubmit,
}: InvestorRegistrationFormProps) {
  return (
    <form onSubmit={handleInvestorSubmit} className="space-y-6">
      <h4 className="text-xl font-semibold text-center text-gray-900 mb-6">
        Investor Registration
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={investorForm.name}
            onChange={(e) => setInvestorForm({...investorForm, name: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company (Optional)
          </label>
          <input
            type="text"
            value={investorForm.company}
            onChange={(e) => setInvestorForm({...investorForm, company: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your company name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number or Email *
          </label>
          <input
            type="text"
            required
            value={investorForm.phoneOrEmail}
            onChange={(e) => setInvestorForm({...investorForm, phoneOrEmail: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Phone number or email address"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password *
          </label>
          <input
            type="password"
            required
            value={investorForm.password}
            onChange={(e) => setInvestorForm({...investorForm, password: e.target.value})}
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
            value={investorForm.confirmPassword}
            onChange={(e) => setInvestorForm({...investorForm, confirmPassword: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Confirm your password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
      >
        Register as Investor
      </button>
    </form>
  );
}
