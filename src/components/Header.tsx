import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-2 left-0 w-full z-50 bg-slate-900 backdrop-blur-lg border-b border-orange-800 shadow-md">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-wide hover:scale-105 transition-transform"
          >
            Athumani Mwinami
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-500 rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 py-4 bg-gray-900/90 rounded-lg shadow-lg border border-gray-800 mt-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className={`block text-lg font-medium ${
                    location.pathname === link.path
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  } transition-colors duration-300`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
