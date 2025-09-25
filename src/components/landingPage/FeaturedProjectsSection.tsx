import { featuredProjects } from '../../data/projects';

export default function FeaturedProjectsSection() {
  // Filter to show only approved projects
  const approvedProjects = featuredProjects.filter(project => project.status === 'Approved');

  return (
    <section id="projects" className="mt-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Featured Student Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {approvedProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            {/* Project Image */}
            <div className="text-center mb-4">
              <div className="text-6xl mb-2">{project.image}</div>
              <div className="text-sm text-gray-500">{project.category}</div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
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
                <span className="font-medium">Price:</span> <span className="font-semibold text-indigo-600">{project.sellingPrice}</span>
              </p>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-indigo-600 text-white py-2 px-3 rounded text-sm hover:bg-indigo-700 transition-colors">
                View Details
              </button>
              <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700 transition-colors">
                Contact Student
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
