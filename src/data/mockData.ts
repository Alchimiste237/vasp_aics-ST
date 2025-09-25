// Mock data extracted from various components for centralized management

export const featuredProjects = [
  {
    id: 1,
    title: 'AI-Powered Learning Assistant',
    description: 'An intelligent tutoring system that adapts to individual learning styles and provides personalized learning experiences.',
    student: 'Betomo randy',
    school: 'AICS',
    category: 'Education Technology',
    status: 'Completed',
    fundingGoal: '450,000 XAF',
    currentFunding: '270,000 XAF',
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
    student: 'Sarah Akono',
    school: 'AICS',
    category: 'Green Technology',
    status: 'Ongoing',
    fundingGoal: '300,000 XAF',
    currentFunding: '120,000 XAF',
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
    student: 'Ebete Chris',
    school: 'AICS',
    category: 'Blockchain',
    status: 'Starting',
    fundingGoal: '1,000,000 XAF',
    currentFunding: '0 XAF',
    sellingPrice: '3,200,000 XAF',
    investors: 0,
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    image: '⛓️',
    likes: 28,
    views: 650
  }
];

export const visitorStats = [
  { label: 'Projects', value: 120 },
  { label: 'Investors', value: 45 },
  { label: 'Students', value: 300 },
  { label: 'Funding Raised (XAF)', value: '150,000,000' }
];

export const visitorProjects = [
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
  // Add more projects as needed
];

export const studentDashboardProjects = [
  {
    id: 1,
    title: 'AI-Powered Learning Assistant',
    description: 'An intelligent tutoring system that adapts to individual learning styles',
    status: 'Completed',
    category: 'Education Technology',
    startDate: '2024-01-15',
    endDate: '2024-03-20',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
    sellingPrice: '2,500,000 XAF',
    views: 1200,
    likes: 45,
    investors: 3
  },
  {
    id: 2,
    title: 'Sustainable Energy Tracker',
    description: 'IoT device for monitoring and optimizing home energy consumption',
    status: 'Ongoing',
    category: 'Green Technology',
    startDate: '2024-02-01',
    endDate: null,
    technologies: ['Arduino', 'C++', 'IoT', 'Data Analytics'],
    sellingPrice: '1,800,000 XAF',
    views: 890,
    likes: 32,
    investors: 1
  },
  {
    id: 3,
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting platform using blockchain technology',
    status: 'Pending',
    category: 'Blockchain',
    startDate: '2024-04-01',
    endDate: null,
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    sellingPrice: '3,200,000 XAF',
    views: 650,
    likes: 28,
    investors: 0
  }
];

export const studentOpportunities = [
  {
    id: 1,
    title: 'AI Startup Investment Opportunity',
    description: 'Looking for innovative AI projects with commercial potential',
    investor: 'TechVentures Inc.',
    amount: '$50,000 - $100,000',
    deadline: '2024-06-15',
    status: 'pending'
  },
  {
    id: 2,
    title: 'Green Technology Funding',
    description: 'Supporting sustainable technology solutions',
    investor: 'EcoFund Capital',
    amount: '$25,000 - $75,000',
    deadline: '2024-05-30',
    status: 'pending'
  }
];

export const studentDiscussions = [
  {
    id: 1,
    title: 'Best Practices for AI Project Development',
    author: 'Dr. Sarah Johnson',
    replies: 12,
    lastActivity: '2 hours ago',
    category: 'AI/ML'
  },
  {
    id: 2,
    title: 'Funding Strategies for Student Startups',
    author: 'Mike Chen',
    replies: 8,
    lastActivity: '1 day ago',
    category: 'Funding'
  }
];
