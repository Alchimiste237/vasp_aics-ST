'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import SearchBar from '../../components/shared/SearchBar';
import CategoryFilter from '../../components/shared/CategoryFilter';
import ProjectGrid from '../../components/shared/ProjectGrid';
import ProfileSection from '../../components/investor/ProfileSection';
import InvestorSettingsSection from '../../components/investor/InvestorSettingsSection';

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

export default function InvestorDashboard() {
  // State management for different sections
  const [activeSection, setActiveSection] = useState('discovery');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Projects data
  const [projects, setProjects] = useState([]);

  // Favorites
  const [favorites, setFavorites] = useState<number[]>([]);

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

  // Fetch projects and favorites on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    const loadFavorites = () => {
      const stored = localStorage.getItem('investorFavorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    };

    fetchProjects();
    loadFavorites();
  }, []);

  // Filter projects based on search and category
  const filteredProjects = (projects as Project[]).filter(project => {
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

  // Handle favorite toggle
  const handleFavoriteToggle = (projectId: number) => {
    const newFavorites = favorites.includes(projectId)
      ? favorites.filter(id => id !== projectId)
      : [...favorites, projectId];
    setFavorites(newFavorites);
    localStorage.setItem('investorFavorites', JSON.stringify(newFavorites));
  };

  // Get favorite projects
  const favoriteProjects = (projects as Project[]).filter(project => favorites.includes(project.id));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation userType="investor" onSectionChange={setActiveSection} />

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

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
              onFavoriteToggle={handleFavoriteToggle}
              favorites={favorites}
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
              projects={projects as Project[]}
              onViewDetails={handleViewDetails}
              onInvestment={handleInvestment}
              onPurchase={handlePurchase}
              onFavoriteToggle={handleFavoriteToggle}
              favorites={favorites}
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

      {/* Favorites Section */}
      {activeSection === 'favorites' && (
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Favorite Projects</h2>
          {favoriteProjects.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Favorite Projects</h3>
              <p className="text-gray-500">You haven't added any projects to your favorites yet. Browse projects and click the heart icon to add them here.</p>
            </div>
          ) : (
            <ProjectGrid
              projects={favoriteProjects}
              onViewDetails={handleViewDetails}
              onInvestment={handleInvestment}
              onPurchase={handlePurchase}
              onFavoriteToggle={handleFavoriteToggle}
              favorites={favorites}
              showMarketInfo={true}
              showPurchaseButton={true}
            />
          )}
        </div>
      )}

      {/* Settings Section */}
      {activeSection === 'settings' && (
        <InvestorSettingsSection />
      )}
    </div>
  </div>
  );
}
