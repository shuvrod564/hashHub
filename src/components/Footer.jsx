import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 md:py-20 text-gray-700">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8 pb-16">
          {/* Brand Info */}
          <div className="">
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-900 mb-6">
              <Image
                src={'/images/hashhub-logo.webp'}
                alt="Hashhub Logo"
                width={131}
                height={50}
                className="w-auto h-10 2xl:h-12"
              />
            </div>
            <p className="font-semibold text-gray-800 mb-2">Contact us -</p>
            <a href="mailto:support@designspace.io" className="block text-primary-blue hover:underline mb-6">
              support@designspace.io
            </a>
            <p className="font-semibold text-gray-800 mb-2">Office -</p>
            <p className="mb-1">123 Anywhere St., Any City,</p>
            <p>ST 12345</p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-blue">Features</a></li>
              <li><a href="#" className="hover:text-primary-blue">Enterprise</a></li>
              <li><a href="#" className="hover:text-primary-blue">Security</a></li>
              <li><a href="#" className="hover:text-primary-blue">Customer Stories</a></li>
              <li><a href="#" className="hover:text-primary-blue">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-blue">Demo</a></li>
            </ul>
          </div>

          {/* Teams Column */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-6">Teams</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-blue">Engineering</a></li>
              <li><a href="#" className="hover:text-primary-blue">Financial Services</a></li>
              <li><a href="#" className="hover:text-primary-blue">Sales</a></li>
              <li><a href="#" className="hover:text-primary-blue">IT</a></li>
              <li><a href="#" className="hover:text-primary-blue">Customer Support</a></li>
              <li><a href="#" className="hover:text-primary-blue">Human Resources</a></li>
              <li><a href="#" className="hover:text-primary-blue">Media</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-blue">Tips</a></li>
              <li><a href="#" className="hover:text-primary-blue">Blog</a></li>
              <li><a href="#" className="hover:text-primary-blue">Event</a></li>
              <li><a href="#" className="hover:text-primary-blue">Certified Program</a></li>
              <li><a href="#" className="hover:text-primary-blue">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-blue">API</a></li>
              <li><a href="#" className="hover:text-primary-blue">Download Template</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-gray-900 text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-blue">About Us</a></li>
              <li><a href="#" className="hover:text-primary-blue">Leadership</a></li>
              <li><a href="#" className="hover:text-primary-blue">News</a></li>
              <li><a href="#" className="hover:text-primary-blue">Media Kit</a></li>
              <li><a href="#" className="hover:text-primary-blue">Career</a></li>
              <li><a href="#" className="hover:text-primary-blue">Documentation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Copyright & Social Icons) */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2020 All rights reserved - Generix
          </p>
          <div className="flex space-x-4 text-gray-500">
            {/* Replace with actual SVG icons or Font Awesome/Heroicons */}
            <a href="#" className="hover:text-gray-900 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17-18 11.6 2.2.1 4.4-.6 6-2 1.2-1.1 1.9-2.5 2.2-4 2.8 2.8 5 2 3-2.5C7.8 14.5 9 16 8 18c-2.4 1.4-5 1.7-7 0 2.8 2 4.4 1 5.4-1.5 1-2.5.5-4.4-.5-5.5-1.2-1.2-2.8-1.7-4.4-1.8 2.3 2.3 3.6 3.5 4.9 3.8 2.8.7 5 0 3-2.5.8-.8 1.4-1.8 1.9-3.2 1.4-4.5.3-7.5-2.8-9.4-1.4-.8-2.5-1.4-4-1.8 2.7 2.6 4.7 4.8 6.4 7.2 1.7 2.3 2.9 4.7 3.5 7.1.6 2.4.9 4.8.8 7.2.1-2 .5-4 1.2-5.9 1.4-4.5 4.3-8 7.3-11.8.8 1.6 1.4 3.4 1.8 5.3.4 1.9.5 3.9.4 5.9"/></svg>
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;