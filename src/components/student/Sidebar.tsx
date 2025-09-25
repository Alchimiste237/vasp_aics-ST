import React from 'react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const buttons = [
    { id: 'overview', label: '📊 Overview' },
    { id: 'profile', label: '👤 Profile Settings' },
    { id: 'projects', label: '📁 Projects' },
    { id: 'opportunities', label: '💼 View Opportunities' },
    { id: 'discussions', label: '💬 Discussions' },
    { id: 'settings', label: '⚙️ General Settings' },
  ];

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg mt-16">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-indigo-600 mb-8">VASP Student</h2>
        <nav className="space-y-2">
          {buttons.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeSection === id
                  ? 'bg-indigo-100 text-indigo-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
