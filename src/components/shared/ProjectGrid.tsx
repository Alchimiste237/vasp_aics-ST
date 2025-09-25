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
  showMarketInfo?: boolean;
  showPurchaseButton?: boolean;
}

export default function ProjectGrid({
  projects,
  onViewDetails,
  onInvestment,
  onPurchase,
  showMarketInfo = false,
  showPurchaseButton = false
}: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onViewDetails={onViewDetails}
          onInvestment={onInvestment}
          onPurchase={onPurchase}
          showMarketInfo={showMarketInfo}
          showPurchaseButton={showPurchaseButton}
        />
      ))}
    </div>
  );
}
