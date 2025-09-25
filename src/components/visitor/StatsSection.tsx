interface StatsSectionProps {
  stats: {
    totalProjects: number;
    totalStudents: number;
    totalInvestors: number;
    totalFunding: string;
    successRate: string;
  };
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">{stats.totalProjects}</div>
            <div className="text-gray-600">Total Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">{stats.totalStudents}</div>
            <div className="text-gray-600">Students</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">{stats.totalInvestors}</div>
            <div className="text-gray-600">Investors</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">{stats.totalFunding}</div>
            <div className="text-gray-600">Total Funding</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">{stats.successRate}</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
