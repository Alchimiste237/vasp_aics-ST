import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const useAuthModal = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('register');
  const [activeTab, setActiveTab] = useState('student');
  const [isLogin, setIsLogin] = useState(false);

  const [studentForm, setStudentForm] = useState({
    studentId: '',
    schoolName: '',
    fieldOfStudy: '',
    password: '',
    confirmPassword: '',
  });

  const [investorForm, setInvestorForm] = useState({
    name: '',
    company: '',
    password: '',
    confirmPassword: '',
    phoneOrEmail: '',
  });

  const [loginForm, setLoginForm] = useState({
    studentId: '',
    password: '',
  });

  const [investorLoginForm, setInvestorLoginForm] = useState({
    name: '',
    password: '',
  });

  const closeModal = () => setShowModal(false);

  const openModal = (type: string) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userType: 'student', ...studentForm }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        login('student');
        closeModal();
        router.push('/student');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed');
    }
  };

  const handleInvestorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userType: 'investor', ...investorForm }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        login('investor');
        closeModal();
        router.push('/investor');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed');
    }
  };

  const handleStudentLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userType: 'student', ...loginForm }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        const userType = data.userType || 'student';
        login(userType);
        closeModal();
        router.push(userType === 'admin' ? '/admin' : '/student');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed');
    }
  };

  const handleInvestorLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userType: 'investor', ...investorLoginForm }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        const userType = data.userType || 'investor';
        login(userType);
        closeModal();
        router.push(userType === 'admin' ? '/admin' : '/investor');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed');
    }
  };

  return {
    showModal,
    closeModal,
    openModal,
    modalType,
    activeTab,
    setActiveTab,
    isLogin,
    setIsLogin,
    studentForm,
    setStudentForm,
    investorForm,
    setInvestorForm,
    loginForm,
    setLoginForm,
    investorLoginForm,
    setInvestorLoginForm,
    handleStudentSubmit,
    handleInvestorSubmit,
    handleStudentLogin,
    handleInvestorLogin,
  };
};
