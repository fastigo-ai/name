import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Optional: prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full bg-amber-200 shadow-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Ethotron Logo"
              className="w-40 h-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/product">Product</Link>
            <Link to="/automation">Automation</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open Menu">
              <FaBars className="text-2xl text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-lg font-semibold text-gray-800">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <FaTimes className="text-xl text-gray-700" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
            <Link to="/" onClick={handleMobileLinkClick}>
              Home
            </Link>
            <Link to="/about" onClick={handleMobileLinkClick}>
              About Us
            </Link>
            <Link to="/product" onClick={handleMobileLinkClick}>
              Product
            </Link>
            <Link to="/automation" onClick={handleMobileLinkClick}>
              Automation
            </Link>
            <Link to="/career" onClick={handleMobileLinkClick}>
              Career
            </Link>
            <Link to="/contact" onClick={handleMobileLinkClick}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
