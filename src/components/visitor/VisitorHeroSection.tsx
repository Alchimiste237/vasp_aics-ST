import Link from 'next/link';

export default function VisitorHeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Discover Innovative Student Projects
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Explore groundbreaking projects created by talented students from universities worldwide.
          Find your next investment opportunity or get inspired by innovative solutions.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </Link>
          <a href="#projects" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
