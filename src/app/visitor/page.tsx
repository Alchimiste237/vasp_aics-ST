'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import VisitorHeroSection from '../../components/visitor/VisitorHeroSection';
import StatsSection from '../../components/visitor/StatsSection';
import SearchFilterSection from '../../components/visitor/SearchFilterSection';
import ProjectGrid from '../../components/visitor/ProjectGrid';
import CallToActionSection from '../../components/visitor/CallToActionSection';
import Footer from '../../components/landingPage/footer';

export default function VisitorPage() {
  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Featured projects data with XAF pricing and emoji images
  const [featuredProjects] = useState([
    {
      id: 1,
      title: 'AI-Powered Learning Assistant',
      description: 'An intelligent tutoring system that adapts to individual learning styles and provides personalized learning experiences.',
      student: 'John Doe',
      school: 'University of Technology',
      category: 'Education Technology',
      status: 'Completed',
      fundingGoal: '45,000,000 XAF',
      currentFunding: '27,000,000 XAF',
      sellingPrice: '2,500,000 XAF',
      investors: 3,
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
      image: '🎓',
      likes: 45,
      views: 1200
    },
    {
      id: 2,
      title: 'Sustainable Energy Tracker',
      description: 'IoT device for monitoring and optimizing home energy consumption with real-time analytics and recommendations.',
      student: 'Sarah Johnson',
      school: 'Green Tech University',
      category: 'Green Technology',
      status: 'Ongoing',
      fundingGoal: '30,000,000 XAF',
      currentFunding: '12,000,000 XAF',
      sellingPrice: '1,800,000 XAF',
      investors: 1,
      technologies: ['Arduino', 'C++', 'IoT', 'Data Analytics'],
      image: '🌱',
      likes: 32,
      views: 890
    },
    {
      id: 3,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology to ensure election integrity.',
      student: 'Mike Chen',
      school: 'Crypto University',
      category: 'Blockchain',
      status: 'Starting',
      fundingGoal: '60,000,000 XAF',
      currentFunding: '0 XAF',
      sellingPrice: '3,200,000 XAF',
      investors: 0,
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      image: '⛓️',
      likes: 28,
      views: 650
    },
    {
      id: 4,
      title: 'VR Medical Training Platform',
      description: 'Virtual reality platform for medical students to practice surgeries in a safe, controlled environment.',
      student: 'Dr. Emily Wilson',
      school: 'Medical University',
      category: 'Healthcare Technology',
      status: 'Ongoing',
      fundingGoal: '90,000,000 XAF',
      currentFunding: '45,000,000 XAF',
      sellingPrice: '4,500,000 XAF',
      investors: 2,
      technologies: ['Unity', 'C#', 'VR', 'Machine Learning'],
      image: '🏥',
      likes: 67,
      views: 2100
    },
    {
      id: 5,
      title: 'Smart Agriculture Monitor',
      description: 'AI-powered system for monitoring crop health and optimizing farming practices using drone technology.',
      student: 'Alex Rodriguez',
      school: 'Agricultural Institute',
      category: 'Agriculture Technology',
      status: 'Completed',
      fundingGoal: '48,000,000 XAF',
      currentFunding: '48,000,000 XAF',
      sellingPrice: '2,800,000 XAF',
      investors: 4,
      technologies: ['Python', 'Computer Vision', 'Drones', 'IoT'],
      image: '🚁',
      likes: 89,
      views: 3400
    },
    {
      id: 6,
      title: 'Mental Health Chatbot',
      description: 'AI-powered mental health support chatbot providing 24/7 emotional support and crisis intervention.',
      student: 'Lisa Park',
      school: 'Psychology University',
      category: 'Healthcare Technology',
      status: 'Ongoing',
      fundingGoal: '36,000,000 XAF',
      currentFunding: '18,000,000 XAF',
      sellingPrice: '1,500,000 XAF',
      investors: 2,
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js'],
      image: '🤖',
      likes: 156,
      views: 4200
    }
  ]);

  // Statistics data
  const [stats] = useState({
    totalProjects: 320,
    totalStudents: 850,
    totalInvestors: 400,
    totalFunding: '$2.5M',
    successRate: '78%'
  });

  // Filter projects based on search and category
  const filteredProjects = featuredProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.id - a.id;
      case 'oldest':
        return a.id - b.id;
      case 'most_funded':
        return parseInt(b.currentFunding.replace(/[$,]/g, '')) - parseInt(a.currentFunding.replace(/[$,]/g, ''));
      case 'most_liked':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation userType="visitor" />

      {/* Hero Section */}
      <VisitorHeroSection />

      {/* Statistics Section */}
      <StatsSection stats={stats} />

      {/* Search and Filter Section */}
      <section id="projects" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Explore Projects</h3>
            <p className="text-lg text-gray-600">Discover innovative projects from talented students worldwide</p>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects, students, or technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Categories</option>
                  <option value="Education Technology">Education Technology</option>
                  <option value="Green Technology">Green Technology</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="Healthcare Technology">Healthcare Technology</option>
                  <option value="Agriculture Technology">Agriculture Technology</option>
                </select>
              </div>

              {/* Sort By */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="most_funded">Most Funded</option>
                  <option value="most_liked">Most Liked</option>
                </select>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">{project.image}</div>
                    <div className="text-gray-600 font-medium">{project.category}</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Student:</span> {project.student}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">School:</span> {project.school}
                    </p>
                  </div>

                  {/* Funding Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Funding Progress</span>
                      <span>{project.currentFunding} / {project.fundingGoal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ 
                          width: `${(parseInt(project.currentFunding.replace(/[^0-9]/g, '')) / parseInt(project.fundingGoal.replace(/[^0-9]/g, ''))) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Selling Price */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Selling Price:</span>
                      <span className="text-lg font-semibold text-indigo-600">{project.sellingPrice}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.834a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      {project.likes} likes
                    </div>
                    <div className="flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {project.views} views
                    </div>
                    <div className="flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {project.investors} investors
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-indigo-600 text-white py-2 px-3 rounded text-sm hover:bg-indigo-700 transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-sm hover:bg-gray-700 transition-colors">
                      Contact Student
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of innovative students and forward-thinking investors. 
            Start your journey today!
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Register as Student
            </Link>
            <Link href="/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Register as Investor
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">VASP</h4>
              <p className="text-gray-400">
                Connecting innovative students with forward-thinking investors to build the future together.
              </p>
            </div>

          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VASP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
