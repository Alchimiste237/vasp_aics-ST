interface InvestorProfile {
  name: string;
  email: string;
  company: string;
  investmentFocus: string[];
  totalInvestments: number;
  totalAmountInvested: string;
  portfolioCompanies: number;
  joinedDate: string;
  bio: string;
  linkedin: string;
  website: string;
}

interface ProfileSectionProps {
  profile: InvestorProfile;
}

export default function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
            <p className="text-gray-600">{profile.company}</p>
            <p className="text-sm text-gray-500">Joined {profile.joinedDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-900">{profile.totalInvestments}</div>
            <div className="text-sm text-gray-600">Total Investments</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-900">{profile.totalAmountInvested}</div>
            <div className="text-sm text-gray-600">Amount Invested</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-900">{profile.portfolioCompanies}</div>
            <div className="text-sm text-gray-600">Portfolio Companies</div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Bio</h3>
          <p className="text-gray-600">{profile.bio}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Investment Focus</h3>
          <div className="flex flex-wrap gap-2">
            {profile.investmentFocus.map((focus, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {focus}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> {profile.email}
            </p>
            {profile.linkedin && (
              <p className="text-gray-600">
                <span className="font-medium">LinkedIn:</span> {profile.linkedin}
              </p>
            )}
            {profile.website && (
              <p className="text-gray-600">
                <span className="font-medium">Website:</span> {profile.website}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
