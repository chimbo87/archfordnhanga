import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contacts' }
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  // WhatsApp integration
  const handleWhatsAppClick = () => {
    const phoneNumber = '+27677366141';
    const message = encodeURIComponent("Hello Archford! I came across your portfolio and I'm interested in discussing potential opportunities. Could we schedule a time to talk?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setIsOpen(false); // Close mobile menu if open
  };

  // Close mobile menu when navigating
  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={handleNavigation}
            >
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105">
                  <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                </div>

              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-400 group-hover:to-green-300 transition-all duration-300">
                  ARCHFORD
                </span>
                <span className="text-xs text-slate-400 -mt-1 tracking-wider">
                  developer
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                    isActiveLink(link.href) 
                      ? 'text-blue-400' 
                      : 'text-slate-300 hover:text-blue-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 ${
                    isActiveLink(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              <button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                Let's Talk
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6 transition-transform duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6 transition-transform duration-200 rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  isActiveLink(link.href)
                    ? 'text-blue-400 bg-gray-800'
                    : 'text-slate-300 hover:bg-gray-800 hover:text-white'
                }`}
                onClick={handleNavigation}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white block w-full px-3 py-2 rounded-md text-base font-medium text-center mt-4 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;