import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-merriweather font-bold">India Trend Spot</h1>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/politics" className="hover:text-gray-200">Politics</Link>
            <Link to="/business" className="hover:text-gray-200">Business</Link>
            <Link to="/technology" className="hover:text-gray-200">Technology</Link>
            <Link to="/admin" className="hover:text-gray-200">Admin</Link>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};