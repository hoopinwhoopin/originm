// Updated Footer Component to Match Uploaded Image

import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';
import logo from '../assets/logo.avif';

export default function Footer() {
  return (
    <footer className="w-full bg-blue-600 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Certification */}
          <div>
            <img src={logo} alt="Origin Medical Logo" className="h-16 mb-4" />
            <p className="text-sm">EN ISO 13485:2016 CERTIFIED</p>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="text-lg font-semibold mb-4">HEADQUARTERS</h4>
            <p className="text-sm">
              One Broadway, 14th Floor<br />
              Cambridge, MA 02142
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><Link to="/technology" className="hover:underline">Technology</Link></li>
              <li><Link to="/who-we-serve" className="hover:underline">Who We Serve</Link></li>
              <li><Link to="/clinical-evidence" className="hover:underline">Clinical Evidence</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/news" className="hover:underline">News</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CONTACT US</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Linkedin className="w-5 h-5" />
                <Link to="https://linkedin.com" target="_blank" className="hover:underline">LinkedIn</Link>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@originmedical.com" className="hover:underline">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
