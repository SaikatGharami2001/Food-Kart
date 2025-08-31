// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}

        <Link to="/" className="text-2xl font-bold text-orange-500">
          FoodKart
        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Home
          </Link>

          <Link
            to="/menu"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Menu
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Contact
          </Link>
        </nav>

        {/* Button */}

        <div className="hidden md:block">
          <Link
            to="/order"
            className="bg-orange-500 text-white px-5 py-2 rounded-lg shadow hover:bg-orange-600 transition"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Button */}

        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            {/* Simple Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
