import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../contexts/AuthContext';

interface HeroSectionProps {
  onOpenModal: (type: string) => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const { isLoggedIn, userType } = useAuth();

  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Valorizing Academic Student Projects
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        A platform where students can showcase their innovative projects and investors can discover
        the next big opportunity. Join our community today!
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {isLoggedIn ? (
          <>
            <Link
              href={`/${userType}`}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/visitor"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Browse Projects
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={() => onOpenModal('register')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Register Now
            </button>
            <button
              onClick={() => onOpenModal('login')}
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Login
            </button>
            <Link
              href="/visitor"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Browse Projects
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
