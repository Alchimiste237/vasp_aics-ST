'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import InvestorNavigationTabs from '../../components/investor/InvestorNavigationTabs';
import SearchBar from '../../components/shared/SearchBar';
import CategoryFilter from '../../components/shared/CategoryFilter';
import ProjectGrid from '../../components/shared/ProjectGrid';
import ProfileSection from '../../components/investor/ProfileSection';
import InvestorSettingsSection from '../../components/investor/InvestorSettingsSection';

export default function InvestorDashboard() {
  // State management for different sections
  const [activeSection, setActiveSection] = useState('discovery');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Investor profile data
  const [profileData] = useState({
    name: 'Jane Smith',
    company: 'TechVentures Inc.',
    email: 'jane.smith@techventures.com',
    investmentFocus: ['AI/ML', 'Green Technology', 'Blockchain', 'EdTech'],
    totalInvestments: 25,
    totalAmountInvested: '$2.5M',
    portfolioCompanies: 8,
    joinedDate: 'January 2023',
    bio: 'Venture capitalist with 10+ years of experience in technology investments.',
    linkedin: 'linkedin.com/in/janesmith',
    website: 'techventures.com'
  });

  // Projects data for discovery and investment with XAF pricing
  const [projects] = useState([
    {
      id: 1,
      title: 'AI-Powered Learning Assistant',
      description: 'An intelligent tutoring system that adapts to individual learning styles',
      student: 'John Doe',
      school: 'University of Technology',
      category: 'Education Technology',
      status: 'Completed',
      fundingGoal: '45,000,000 XAF',
      currentFunding: '27,000,000 XAF',
      sellingPrice: '2,500,000 XAF',
      investors: 3,
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
      timeline: '6 months',
      marketSize: '1,500,000,000,000 XAF',
      competitiveAdvantage: 'Advanced AI algorithms with 95% accuracy rate'
    },
    {
      id: 2,
      title: 'Sustainable Energy Tracker',
      description: 'IoT device for monitoring and optimizing home energy consumption',
      student: 'Sarah Johnson',
      school: 'Green Tech University',
      category: 'Green Technology',
      status: 'Ongoing',
      fundingGoal: '30,000,000 XAF',
      currentFunding: '12,000,000 XAF',
      sellingPrice: '1,800,000 XAF',
      investors: 1,
      technologies: ['Arduino', 'C++', 'IoT', 'Data Analytics'],
      timeline: '4 months',
      marketSize: '1,080,000,000,000 XAF',
      competitiveAdvantage: 'Real-time energy optimization with 30% savings'
    },
    {
      id: 3,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology',
      student: 'Mike Chen',
      school: 'Crypto University',
      category: 'Blockchain',
      status: 'Starting',
      fundingGoal: '60,000,000 XAF',
      currentFunding: '0 XAF',
      sellingPrice: '3,200,000 XAF',
      investors: 0,
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      timeline: '8 months',
      marketSize: '300,000,000,000 XAF',
      competitiveAdvantage: 'First fully decentralized voting solution'
    },
    {
      id: 4,
      title: 'VR Medical Training Platform',
      description: 'Virtual reality platform for medical students to practice surgeries',
      student: 'Dr. Emily Wilson',
      school: 'Medical University',
      category: 'Healthcare Technology',
      status: 'Ongoing',
      fundingGoal: '90,000,000 XAF',
      currentFunding: '45,000,000 XAF',
      sellingPrice: '4,500,000 XAF',
      investors: 2,
      technologies: ['Unity', 'C#', 'VR', 'Machine Learning'],
      timeline: '12 months',
      marketSize: '1,920,000,000,000 XAF',
      competitiveAdvantage: 'Haptic feedback technology for realistic training'
    }
  ]);

  // Filter projects based on search and category
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.student.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle investment action
  const handleInvestment = (projectId: number) => {
    console.log(`Investing in project ${projectId}`);
    // Add investment logic here
  };

  // Handle project purchase action
  const handlePurchase = (projectId: number) => {
    console.log(`Purchasing project ${projectId}`);
    // Add purchase logic here
  };

  // Handle project details view
  const handleViewDetails = (projectId: number) => {
    console.log(`Viewing details for project ${projectId}`);
    // Add project details logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation userType="investor" />

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Section Navigation */}
      <InvestorNavigationTabs activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Discovery Section */}
        {activeSection === 'discovery' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Projects</h2>
              <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
            </div>
            <ProjectGrid
              projects={filteredProjects}
              onViewDetails={handleViewDetails}
              onInvestment={handleInvestment}
              onPurchase={handlePurchase}
              showMarketInfo={false}
              showPurchaseButton={true}
            />
          </div>
        )}

        {/* Project List Section */}
        {activeSection === 'projects' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">All Projects</h2>
            <ProjectGrid
              projects={projects}
              onViewDetails={handleViewDetails}
              onInvestment={handleInvestment}
              onPurchase={handlePurchase}
              showMarketInfo={false}
              showPurchaseButton={false}
            />
          </div>
        )}

        {/* Invest Section */}
        {activeSection === 'invest' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Opportunities</h2>
            <ProjectGrid
              projects={projects}
              onViewDetails={handleViewDetails}
              onInvestment={handleInvestment}
              onPurchase={handlePurchase}
              showMarketInfo={true}
              showPurchaseButton={true}
            />
          </div>
        )}

        {/* Profile Section */}
        {activeSection === 'profile' && (
          <ProfileSection profile={profileData} />
        )}

        {/* Settings Section */}
        {activeSection === 'settings' && (
          <InvestorSettingsSection />
        )}
      </div>
    </div>
  );
}
