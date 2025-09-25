import React from 'react';

interface Opportunity {
  id: number;
  title: string;
  description: string;
  investor: string;
  amount: string;
  deadline: string;
  status: string;
}

interface OpportunitiesSectionProps {
  opportunities: Opportunity[];
  handleOpportunityResponse: (opportunityId: number, response: 'accept' | 'refuse') => void;
}

export default function OpportunitiesSection({
  opportunities,
  handleOpportunityResponse
}: OpportunitiesSectionProps) {
  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Opportunities</h3>

        <div className="space-y-6">
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-semibold text-gray-900">{opportunity.title}</h4>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  {opportunity.status}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{opportunity.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Investor</p>
                  <p className="text-gray-900">{opportunity.investor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Amount</p>
                  <p className="text-gray-900">{opportunity.amount}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Deadline</p>
                  <p className="text-gray-900">{opportunity.deadline}</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => handleOpportunityResponse(opportunity.id, 'accept')}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleOpportunityResponse(opportunity.id, 'refuse')}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Refuse
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
