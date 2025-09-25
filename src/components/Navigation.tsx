'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface NavigationProps {
  userType?: 'visitor' | 'student' | 'investor' | 'admin';
}

export default function Navigation({ userType = 'visitor' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth();
  const router = useRouter();

  // Navigation items based on user type
  const getNavigationItems = () => {
    switch (userType) {
      case 'student':
        return [
          { name: 'Dashboard', href: '/student' },
          { name: 'Profile', href: '/student#profile' },
          { name: 'Projects', href: '/student#projects' },
          { name: 'Opportunities', href: '/student#opportunities' },
          { name: 'Discussions', href: '/student#discussions' },
        ];
      case 'investor':
        return [
          { name: 'Dashboard', href: '/investor' },
          { name: 'Discovery', href: '/investor#discovery' },
          { name: 'Projects', href: '/investor#projects' },
          { name: 'Invest', href: '/investor#invest' },
          { name: 'Profile', href: '/investor#profile' },
        ];
      case 'admin':
        return [
          { name: 'Overview', href: '/admin' },
          { name: 'Users', href: '/admin#users' },
          { name: 'Projects', href: '/admin#projects' },
          { name: 'Investments', href: '/admin#investments' },
          { name: 'Settings', href: '/admin#settings' },
        ];
      default:
        return [
          { name: 'Home', href: '/' },
          { name: 'Projects', href: '/visitor#projects' },
          { name: 'About', href: '/visitor#about' },
          { name: 'Contact', href: '/visitor#contact' },
        ];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* <h1 className="text-2xl font-bold text-indigo-600">VASP</h1> */}
              <Image
                src={'/logo.PNG'}
                height={200}
                width={100}
                alt='VASP logo'
              />
              <span className="ml-2 text-gray-600 text-sm hidden sm:block">
                Valorizing Academic Student Project
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* User Type Specific Actions */}
            {userType === 'visitor' && (
              <div className="flex space-x-4">
                <Link
                  href="/student"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Student Login
                </Link>
                <Link
                  href="/investor"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Investor Login
                </Link>
                <Link
                  href="/admin"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Admin
                </Link>
              </div>
            )}

            {userType !== 'visitor' && (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Logged in as {userType}
                </span>
                <button
                  onClick={() => {
                    logout();
                    router.push('/');
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {userType === 'visitor' && (
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/student"
                    className="block px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Student Login
                  </Link>
                  <Link
                    href="/investor"
                    className="block px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Investor Login
                  </Link>
                  <Link
                    href="/admin"
                    className="block px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin
                  </Link>
                </div>
              )}

              {userType !== 'visitor' && (
                <div className="pt-4 border-t border-gray-200">
                  <div className="px-3 py-2 text-sm text-gray-600">
                    Logged in as {userType}
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                      router.push('/');
                    }}
                    className="block px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
