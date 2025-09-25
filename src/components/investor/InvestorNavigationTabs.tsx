import React from 'react';

interface InvestorNavigationTabsProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function InvestorNavigationTabs({ activeSection, onSectionChange }: InvestorNavigationTabsProps) {
  const sections = [
    { key: 'discovery', label: 'Discovery' },
    { key: 'projects', label: 'Project List' },
    { key: 'invest', label: 'Invest' },
    { key: 'profile', label: 'Profile' },
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
