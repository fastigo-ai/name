import React from 'react';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';
import Logo from '../assets/logo/logo2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amber-100 text-gray-800 py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Logo and Socials */}
        <div>
          <img src={Logo} alt="Ethotron Logo" className="h-12 mb-4" />
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.youtube.com/@Ethotron"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="text-xl text-red-600 hover:text-red-700" />
            </a>
            <a
              href="https://www.linkedin.com/company/ethotron"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl text-blue-700 hover:text-blue-800" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to='/' className="hover:text-blue-600">Home</Link></li>
            <li><Link to='/about' className="hover:text-blue-600">About Us</Link></li>
            <li><Link to='/product' className="hover:text-blue-600">Products</Link></li>
            <li><Link to='/automation' className="hover:text-blue-600">Automation</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold mb-3">Address</h3>
          <p>
            <strong>Corporate Office:</strong><br />
            AHS-610, 6th Floor,<br />
            High Street, South Side GT Road Industrial Area,<br />
            Ghaziabad (Delhi-NCR), India - 201009
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-semibold mb-3">Contact Details</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-600" />
              <a href="tel:+919997547656" className="hover:underline">
                +91-9997547656
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-600" />
              <a
                href="https://wa.me/919997547656"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +91-9997547656
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-600" />
              <a
                href="mailto:info@ethotron.com?subject=Inquiry"
                className="hover:underline"
              >
                info@ethotron.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs mt-10 text-gray-500">
        <p>&copy; 2025 <span className="font-medium">ethotron.com</span></p>
        <p className="mt-1">Powered by <a href="https://ethotron.com" className="hover:underline">ethotron.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
