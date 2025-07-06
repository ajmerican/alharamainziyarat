import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '../assets/tstransperentlogo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Travel Solution" className="h-10 w-auto" />
              <div>
                <h3 className="text-lg font-bold">Al Haramain Ziyarat</h3>
                <p className="text-sm text-gray-400">A Division of Travel Solution World Wide Inc.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for spiritual journeys and travel services. We provide comprehensive 
              Umrah and Hajj packages along with ticketing services for all destinations worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">info@alharamainziyarat.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">123 Travel Street, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/umrah" className="text-gray-300 hover:text-white transition-colors">Umrah Services</Link></li>
              <li><Link to="/hajj" className="text-gray-300 hover:text-white transition-colors">Hajj Services</Link></li>
              <li><Link to="/ticketing" className="text-gray-300 hover:text-white transition-colors">Ticketing</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <div>
                  <p className="text-sm font-medium">Monday - Friday</p>
                  <p className="text-sm text-gray-400">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <div>
                  <p className="text-sm font-medium">Saturday</p>
                  <p className="text-sm text-gray-400">10:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <div>
                  <p className="text-sm font-medium">Sunday</p>
                  <p className="text-sm text-gray-400">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Al Haramain Ziyarat - Travel Solution World Wide Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

