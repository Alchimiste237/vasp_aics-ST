'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type UserType = 'visitor' | 'student' | 'investor' | 'admin';

interface AuthContextType {
  isLoggedIn: boolean;
  userType: UserType;
  userId: string;
  login: (type: UserType, userId?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<UserType>('visitor');
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    // Check localStorage for persisted auth state
    const storedUserType = localStorage.getItem('userType') as UserType;
    const storedUserId = localStorage.getItem('userId') || '';
    if (storedUserType && storedUserType !== 'visitor') {
      setIsLoggedIn(true);
      setUserType(storedUserType);
      setUserId(storedUserId);
    }
  }, []);

  const login = (type: UserType, userId?: string) => {
    setIsLoggedIn(true);
    setUserType(type);
    setUserId(userId || '');
    localStorage.setItem('userType', type);
    if (userId) localStorage.setItem('userId', userId);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType('visitor');
    setUserId('');
    localStorage.removeItem('userType');
    localStorage.removeItem('userId');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
