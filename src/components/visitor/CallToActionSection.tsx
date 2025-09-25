import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section className="py-16 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our community of innovative students and forward-thinking investors.
          Start your journey today!
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Register as Student
          </Link>
          <Link href="/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
            Register as Investor
          </Link>
        </div>
      </div>
    </section>
  );
}
