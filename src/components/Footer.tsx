import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ProPlumb Solutions</h3>
                <p className="text-gray-400 text-sm">Licensed & Insured</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted local plumbing experts providing reliable, professional service since 2008. Available 24/7 for all your plumbing emergencies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Emergency Plumbing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leak Detection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Drain Cleaning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Water Heaters</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pipe Repair</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fixture Installation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(555) 123-PIPE</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@proplumbsolutions.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span>123 Main Street<br />Your City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ProPlumb Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">License Info</a>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-6 bg-orange-600 rounded-lg p-4 text-center">
          <p className="font-bold text-lg">24/7 Emergency Service Available</p>
          <p className="text-orange-100">Plumbing emergencies don't wait - neither do we!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;