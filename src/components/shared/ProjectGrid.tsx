import React from 'react';
import ProjectCard from './ProjectCard';

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

interface ProjectGridProps {
  projects: Project[];
  onViewDetails: (id: number) => void;
  onInvestment: (id: number) => void;
  onPurchase: (id: number) => void;
  onFavoriteToggle?: (id: number) => void;
  favorites?: number[];
  showMarketInfo?: boolean;
  showPurchaseButton?: boolean;
}

export default function ProjectGrid({
  projects,
  onViewDetails,
  onInvestment,
  onPurchase,
  onFavoriteToggle,
  favorites = [],
  showMarketInfo = false,
  showPurchaseButton = false
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Projects Available</h3>
        <p className="text-gray-500">There are currently no projects to display. Check back later for new opportunities.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onViewDetails={onViewDetails}
          onInvestment={onInvestment}
          onPurchase={onPurchase}
          onFavoriteToggle={onFavoriteToggle}
          isFavorite={favorites.includes(project.id)}
          showMarketInfo={showMarketInfo}
          showPurchaseButton={showPurchaseButton}
        />
      ))}
    </div>
  );
}
