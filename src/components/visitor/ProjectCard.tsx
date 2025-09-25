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
  image: string;
  likes: number;
  views: number;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
  );
}
