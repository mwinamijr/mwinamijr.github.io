import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { companyName, companyUrl } from "../screens/constants";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy/95 backdrop-blur-lg border-b border-navy-light shadow-md">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl md:text-2xl font-bold text-lightblue tracking-wide"
          >
            Athumani Mwinami
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative font-medium transition-colors ${
                      active ? "text-lightblue" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-lightblue to-orange rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-navy-deep bg-orange hover:bg-orange-light transition"
              >
                {companyName} <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-lightblue rounded-md"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 py-4 bg-navy-light/90 rounded-lg border border-navy-light">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className={`block text-lg font-medium ${
                    location.pathname === link.path
                      ? "text-lightblue"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-lg font-semibold text-orange"
              >
                {companyName} <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
