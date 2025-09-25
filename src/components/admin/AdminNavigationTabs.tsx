interface AdminNavigationTabsProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function AdminNavigationTabs({ activeSection, onSectionChange }: AdminNavigationTabsProps) {
  const sections = [
    { key: 'overview', label: 'Overview' },
    { key: 'users', label: 'Users' },
    { key: 'projects', label: 'Projects' },
    { key: 'investments', label: 'Investments' },
    { key: 'settings', label: 'Settings' }
  ];

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => onSectionChange(section.key)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === section.key
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
