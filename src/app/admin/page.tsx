'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import SearchBar from '../../components/shared/SearchBar';
import AdminNavigationTabs from '../../components/admin/AdminNavigationTabs';
import OverviewSection from '../../components/admin/OverviewSection';
import UsersSection from '../../components/admin/UsersSection';
import ProjectsSection from '../../components/admin/ProjectsSection';
import InvestmentsSection from '../../components/admin/InvestmentsSection';
import SettingsSection from '../../components/admin/SettingsSection';

interface Project {
  id: number;
  _id: string; // Keep the MongoDB _id for API calls
  title: string;
  description: string;
  student: string;
  status: string;
  category: string;
  submissionDate: string;
  fundingGoal: string;
  currentFunding: string;
  investors: number;
  technologies: string[];
  visibility: boolean;
}

export default function AdminDashboard() {
  // State management for different sections
  const [activeSection, setActiveSection] = useState('overview');

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // System statistics
  const [stats] = useState({
    totalUsers: 1250,
    totalStudents: 850,
    totalInvestors: 400,
    totalProjects: 320,
    activeProjects: 180,
    completedProjects: 95,
    totalInvestments: 45,
    totalInvestmentAmount: '$2.5M',
    pendingApprovals: 12,
    systemUptime: '99.9%'
  });

  // Recent activities
  const [recentActivities] = useState([
    {
      id: 1,
      type: 'user_registration',
      message: 'New student registered: John Doe',
      timestamp: '2 minutes ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'project_submission',
      message: 'New project submitted: AI Learning Assistant',
      timestamp: '15 minutes ago',
      status: 'pending'
    },
    {
      id: 3,
      type: 'investment',
      message: 'Investment made: $25,000 in VR Medical Platform',
      timestamp: '1 hour ago',
      status: 'success'
    },
    {
      id: 4,
      type: 'user_verification',
      message: 'Investor verification completed: Jane Smith',
      timestamp: '2 hours ago',
      status: 'success'
    }
  ]);

  // Users data
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@university.edu',
      type: 'Student',
      status: 'Active',
      registrationDate: '2024-01-15',
      lastLogin: '2024-04-10',
      projects: 3
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@techventures.com',
      type: 'Investor',
      status: 'Active',
      registrationDate: '2024-01-10',
      lastLogin: '2024-04-09',
      investments: 5
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@cryptouni.edu',
      type: 'Student',
      status: 'Pending',
      registrationDate: '2024-04-08',
      lastLogin: 'Never',
      projects: 0
    }
  ]);

  // Projects data
  const [projects, setProjects] = useState<Project[]>([]);

  // Fetch projects from admin API
  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/admin/projects');
      if (response.ok) {
        const data = await response.json();
        // Transform API data to match ProjectsSection interface
        const transformedData = data.map((project: any, index: number) => ({
          id: index + 1, // Use index as display id
          _id: project._id, // Keep MongoDB _id for API calls
          title: project.title,
          description: project.description,
          student: project.studentId, // This should be student name, but we have studentId
          status: project.status,
          category: project.category,
          submissionDate: new Date(project.createdAt).toLocaleDateString(),
          fundingGoal: `$${project.sellingPrice}`,
          currentFunding: '$0', // This would need to be calculated from investments
          investors: project.investors,
          technologies: project.technologies || [],
          visibility: project.visibility !== false, // Default to true if not set
        }));
        setProjects(transformedData);
      } else {
        console.error('Failed to fetch projects');
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // Fetch projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle user status change
  const handleUserStatusChange = (userId: number, newStatus: string) => {
    console.log(`User ${userId} status changed to ${newStatus}`);
    // Add logic to handle user status change
  };

  // Handle project approval
  const handleProjectApproval = async (projectId: number, approved: boolean) => {
    const status = approved ? 'Approved' : 'Rejected';
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    try {
      const response = await fetch('/api/admin/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: project._id, status }),
      });
      if (response.ok) {
        setProjects((prevProjects) =>
          prevProjects.map((p) =>
            p.id === projectId ? { ...p, status } : p
          )
        );
      } else {
        console.error('Failed to update project status');
      }
    } catch (error) {
      console.error('Error updating project status:', error);
    }
  };

  // Handle view project details
  const handleViewDetails = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      alert(`Project Details:\n\nTitle: ${project.title}\nDescription: ${project.description}\nStudent: ${project.student}\nStatus: ${project.status}\nCategory: ${project.category}\nFunding Goal: ${project.fundingGoal}\nCurrent Funding: ${project.currentFunding}\nInvestors: ${project.investors}\nTechnologies: ${project.technologies.join(', ')}\nVisibility: ${project.visibility ? 'Visible' : 'Hidden'}\nSubmission Date: ${project.submissionDate}`);
    }
  };

  // Handle toggle project visibility
  const handleToggleVisibility = async (projectId: number, visibility: boolean) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    try {
      const response = await fetch('/api/admin/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: project._id, visibility }),
      });
      if (response.ok) {
        setProjects((prevProjects) =>
          prevProjects.map((p) =>
            p.id === projectId ? { ...p, visibility } : p
          )
        );
      } else {
        console.error('Failed to update project visibility');
      }
    } catch (error) {
      console.error('Error updating project visibility:', error);
    }
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation userType="admin" />

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Section Navigation */}
      <AdminNavigationTabs activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <OverviewSection stats={stats} recentActivities={recentActivities} />
        )}

        {/* Users Section */}
        {activeSection === 'users' && (
          <UsersSection users={users} onUserStatusChange={handleUserStatusChange} />
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <ProjectsSection
            projects={projects}
            onProjectApproval={handleProjectApproval}
            onViewDetails={handleViewDetails}
            onToggleVisibility={handleToggleVisibility}
          />
        )}

        {/* Investments Section */}
        {activeSection === 'investments' && (
          <InvestmentsSection stats={{ totalInvestments: stats.totalInvestments, totalInvestmentAmount: stats.totalInvestmentAmount }} />
        )}

        {/* Settings Section */}
        {activeSection === 'settings' && (
          <SettingsSection />
        )}
      </div>
    </div>
  );
}
