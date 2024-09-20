import { FaTag, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 shadow-md py-2">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.jpg"
            alt="Plane Scape Logo"
            className="w-8 h-8 bg-purple-700 rounded-full"
          />
          <span className="font-bold text-xl text-purple-800">PLANE SCAPE</span>
        </div>

        {/* Navbar Links */}
        <div className="flex-grow flex items-center justify-end space-x-12">
          {/* Deals */}
          <div className="flex items-center space-x-2">
            <FaTag className="text-purple-600" />
            <Link href="#deals" className="text-gray-600 hover:text-purple-600">
              Deals
            </Link>
          </div>

          {/* Discover */}
          <div className="flex items-center space-x-2">
            <FaGlobe className="text-purple-600" />
            <Link
              href="#discover"
              className="text-gray-600 hover:text-purple-600"
            >
              Discover
            </Link>
          </div>

          {/* User Profile */}

          <div className="flex items-center space-x-4">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="text-gray-700">Joanne Smith</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
