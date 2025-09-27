'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation';
import Sidebar from '../../components/student/Sidebar';
import OverviewSection from '../../components/student/OverviewSection';
import ProfileSettingsSection from '../../components/student/ProfileSettingsSection';
import ProjectsSection from '../../components/student/ProjectsSection';
import OpportunitiesSection from '../../components/student/OpportunitiesSection';
import DiscussionsSection from '../../components/student/DiscussionsSection';
import GeneralSettingsSection from '../../components/student/GeneralSettingsSection';

import {
  studentOpportunities,
  studentDiscussions
} from '../../data/mockData';
import toast from 'react-hot-toast';

interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  category: string;
  startDate: string;
  endDate: string | null;
  technologies: string[];
  sellingPrice: string;
  views: number;
  likes: number;
  investors: number;
}

export default function StudentDashboard() {
  const { userId } = useAuth();

  // State management for different sections
  const [activeSection, setActiveSection] = useState('overview');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Student profile data
  const [profileData, setProfileData] = useState({
    studentId: '',
    fullName: '',
    schoolName: '',
    fieldOfStudy: '',
    email: '',
    phone: '',
    bio: '',
    skills: [] as string[],
    graduationYear: ''
  });

  // Student projects data with pricing in XAF
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Opportunities data
  const [opportunities] = useState(studentOpportunities);

  // Discussions data
  const [discussions] = useState(studentDiscussions);

  // Fetch profile on mount
  useEffect(() => {
    if (!userId) return;

    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/student/profile?studentId=${userId}`);
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        } else {
          console.error('Failed to fetch profile');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [userId]);

  // Fetch projects on mount
  useEffect(() => {
    if (!userId) return;

    const fetchProjects = async () => {
      try {
        const response = await fetch(`/api/projects?studentId=${userId}`);
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          toast.error('Failed to fetch projects');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        toast.error('Error fetching projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [userId]);

  // Handle profile update
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/student/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        setIsEditingProfile(false);
        toast.success('Profile updated successfully');
      } else {
        toast.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile');
    }
  };

  // Handle project status change
  const handleProjectStatusChange = async (projectId: string, newStatus: string) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: projectId, studentId: userId, status: newStatus }),
      });

      if (response.ok) {
        setProjects(projects.map(project =>
          project.id === projectId ? { ...project, status: newStatus } : project
        ));
        toast.success('Project status updated');
      } else {
        toast.error('Failed to update project status');
      }
    } catch (error) {
      console.error('Error updating project status:', error);
      toast.error('Error updating project status');
    }
  };

  // Handle opportunity response
  const handleOpportunityResponse = (opportunityId: number, response: 'accept' | 'refuse') => {
    console.log(`Opportunity ${opportunityId} ${response}d`);
    // Add logic to handle opportunity response
  };

  // Handle add project
  const handleAddProject = async (projectData: Omit<Project, 'id' | 'views' | 'likes' | 'investors'>) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...projectData, studentId: userId }),
      });

      if (response.ok) {
        const newProject = await response.json();
        setProjects([...projects, newProject]);
        toast.success('Project added successfully');
      } else {
        toast.error('Failed to add project');
      }
    } catch (error) {
      console.error('Error adding project:', error);
      toast.error('Error adding project');
    }
  };

  // Handle edit project
  const handleEditProject = async (projectData: Project) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...projectData, studentId: userId }),
      });

      if (response.ok) {
        setProjects(projects.map(project =>
          project.id === projectData.id ? projectData : project
        ));
        toast.success('Project updated successfully');
      } else {
        toast.error('Failed to update project');
      }
    } catch (error) {
      console.error('Error updating project:', error);
      toast.error('Error updating project');
    }
  };

  // Handle delete project
  const handleDeleteProject = async (projectId: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const response = await fetch(`/api/projects?id=${projectId}&studentId=${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProjects(projects.filter(project => project.id !== projectId));
        toast.success('Project deleted successfully');
      } else {
        toast.error('Failed to delete project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      toast.error('Error deleting project');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation userType="student" />
      
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="ml-64 p-8 mt-16">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <OverviewSection projects={projects} />
        )}

        {/* Profile Settings Section */}
        {activeSection === 'profile' && (
          <ProfileSettingsSection
            profileData={profileData}
            setProfileData={setProfileData}
            isEditingProfile={isEditingProfile}
            setIsEditingProfile={setIsEditingProfile}
            handleProfileUpdate={handleProfileUpdate}
          />
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <ProjectsSection
            projects={projects}
            setProjects={setProjects}
            handleProjectStatusChange={handleProjectStatusChange}
            handleAddProject={handleAddProject}
            handleEditProject={handleEditProject}
            handleDeleteProject={handleDeleteProject}
            loading={loading}
          />
        )}

        {/* Opportunities Section */}
        {activeSection === 'opportunities' && (
          <OpportunitiesSection
            opportunities={opportunities}
            handleOpportunityResponse={handleOpportunityResponse}
          />
        )}

        {/* Discussions Section */}
        {activeSection === 'discussions' && (
          <DiscussionsSection discussions={discussions} />
        )}

        {/* General Settings Section */}
        {activeSection === 'settings' && (
          <GeneralSettingsSection />
        )}
      </div>
    </div>
  );
}
