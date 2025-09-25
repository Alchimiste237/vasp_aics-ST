import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  student: string;
  school: string;
  category: string;
  status: string;
  fundingGoal: string;
  currentFunding: string;
  sellingPrice: string;
  investors: number;
  technologies: string[];
  timeline: string;
  marketSize: string;
  competitiveAdvantage: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: (id: number) => void;
  onInvestment: (id: number) => void;
  onPurchase: (id: number) => void;
  showMarketInfo?: boolean;
  showPurchaseButton?: boolean;
}

export default function ProjectCard({
  project,
  onViewDetails,
  onInvestment,
  onPurchase,
  showMarketInfo = false,
  showPurchaseButton = false
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          project.status === 'Completed' ? 'bg-green-100 text-green-800' :
          project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {project.status}
        </span>
      </div>

      <p className="text-gray-600 mb-4">{project.description}</p>

      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-500">
          <span className="font-medium">Student:</span> {project.student}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-medium">School:</span> {project.school}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-medium">Category:</span> {project.category}
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Funding Goal</p>
            <p className="font-semibold text-gray-900">{project.fundingGoal}</p>
          </div>
          <div>
            <p className="text-gray-500">Current Funding</p>
            <p className="font-semibold text-gray-900">{project.currentFunding}</p>
          </div>
          <div>
            <p className="text-gray-500">Investors</p>
            <p className="font-semibold text-gray-900">{project.investors}</p>
          </div>
          <div>
            <p className="text-gray-500">Timeline</p>
            <p className="font-semibold text-gray-900">{project.timeline}</p>
          </div>
        </div>
      </div>

      {showMarketInfo && (
        <div className="mb-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Market Size</span>
              <span className="text-sm font-semibold text-gray-900">{project.marketSize}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Funding Goal</span>
              <span className="text-sm font-semibold text-gray-900">{project.fundingGoal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Current Funding</span>
              <span className="text-sm font-semibold text-gray-900">{project.currentFunding}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Timeline</span>
              <span className="text-sm font-semibold text-gray-900">{project.timeline}</span>
            </div>
          </div>
        </div>
      )}

      {showMarketInfo && (
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Competitive Advantage</p>
          <p className="text-sm text-gray-600">{project.competitiveAdvantage}</p>
        </div>
      )}

      {showMarketInfo && (
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Technologies</p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails(project.id)}
            className={`flex-1 text-white py-2 px-3 rounded text-sm hover:opacity-90 transition-colors ${
              showMarketInfo ? 'bg-gray-600 hover:bg-gray-700' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {showMarketInfo ? 'Details' : 'View Details'}
          </button>
          <button
            onClick={() => onInvestment(project.id)}
            className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700 transition-colors"
          >
            {showMarketInfo ? 'Invest Now' : 'Invest'}
          </button>
        </div>
        {showPurchaseButton && (
          <button
            onClick={() => onPurchase(project.id)}
            className="w-full bg-purple-600 text-white py-2 px-3 rounded text-sm hover:bg-purple-700 transition-colors"
          >
            Buy Complete Project - {project.sellingPrice}
          </button>
        )}
      </div>
    </div>
  );
}
