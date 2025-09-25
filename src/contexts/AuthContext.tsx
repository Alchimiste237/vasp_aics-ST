'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type UserType = 'visitor' | 'student' | 'investor' | 'admin';

interface AuthContextType {
  isLoggedIn: boolean;
  userType: UserType;
  login: (type: UserType) => void;
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

  useEffect(() => {
    // Check localStorage for persisted auth state
    const storedUserType = localStorage.getItem('userType') as UserType;
    if (storedUserType && storedUserType !== 'visitor') {
      setIsLoggedIn(true);
      setUserType(storedUserType);
    }
  }, []);

  const login = (type: UserType) => {
    setIsLoggedIn(true);
    setUserType(type);
    localStorage.setItem('userType', type);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType('visitor');
    localStorage.removeItem('userType');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
