import React from 'react';

interface Discussion {
  id: number;
  title: string;
  author: string;
  replies: number;
  lastActivity: string;
  category: string;
}

interface DiscussionsSectionProps {
  discussions: Discussion[];
}

export default function DiscussionsSection({ discussions }: DiscussionsSectionProps) {
  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Discussions</h3>

        <div className="space-y-4">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold text-gray-900">{discussion.title}</h4>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
                  {discussion.category}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <p>By {discussion.author}</p>
                <div className="flex space-x-4">
                  <span>{discussion.replies} replies</span>
                  <span>{discussion.lastActivity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
