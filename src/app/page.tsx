'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/landingPage/footer';
import HeroSection from '../components/landingPage/HeroSection';
import FeaturedProjectsSection from '../components/landingPage/FeaturedProjectsSection';
import AuthModal from '../components/landingPage/AuthModal';
import { useAuthModal } from '../hooks/useAuthModal';
import { useAuth } from '../contexts/AuthContext';

export default function LandingPage() {
  const modalState = useAuthModal();
  const { userType } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navigation userType={userType} />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection onOpenModal={modalState.openModal} />
        <FeaturedProjectsSection />
      </main>

      <Footer/>
      <AuthModal
        showModal={modalState.showModal}
        closeModal={modalState.closeModal}
        modalType={modalState.modalType}
        activeTab={modalState.activeTab}
        setActiveTab={modalState.setActiveTab}
        isLogin={modalState.isLogin}
        setIsLogin={modalState.setIsLogin}
        investorForm={modalState.investorForm}
        setInvestorForm={modalState.setInvestorForm}
        loginForm={modalState.loginForm}
        setLoginForm={modalState.setLoginForm}
        investorLoginForm={modalState.investorLoginForm}
        setInvestorLoginForm={modalState.setInvestorLoginForm}
        handleInvestorSubmit={modalState.handleInvestorSubmit}
        handleStudentLogin={modalState.handleStudentLogin}
        handleInvestorLogin={modalState.handleInvestorLogin}
      />
    </div>
  );
}
