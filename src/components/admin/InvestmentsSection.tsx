interface InvestmentsSectionProps {
  stats: {
    totalInvestments: number;
    totalInvestmentAmount: string;
  };
}

export default function InvestmentsSection({ stats }: InvestmentsSectionProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Management</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Investments</span>
              <span className="font-semibold text-gray-900">{stats.totalInvestments}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount</span>
              <span className="font-semibold text-gray-900">{stats.totalInvestmentAmount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Average Investment</span>
              <span className="font-semibold text-gray-900">$55,556</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Success Rate</span>
              <span className="font-semibold text-gray-900">78%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Investments</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">AI Learning Assistant</p>
                <p className="text-sm text-gray-500">by John Doe</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">$25,000</p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">VR Medical Platform</p>
                <p className="text-sm text-gray-500">by Dr. Emily Wilson</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">$50,000</p>
                <p className="text-sm text-gray-500">1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
