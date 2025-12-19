
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Waves } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Waves className="text-blue-400 w-8 h-8" />
              <span className="text-2xl font-bubbly text-blue-400">FIZZ <span className="text-orange-400">HIMALAYA</span></span>
            </div>
            <p className="text-slate-400 text-sm">
              Nepal's ultimate soda sanctuary. Blending Himalayan purity with local vibrant flavors since 2024.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/menu" className="hover:text-blue-400 transition-colors">Bubbly Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Visit Us</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>456 Boudha Road,</li>
              <li>Kathmandu 44600, Nepal</li>
              <li>+977-1-7654321</li>
              <li>info@fizzhimalaya.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Follow the Fizz</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 transition-colors"><Twitter size={20} /></a>
            </div>
            <div className="mt-8">
              <p className="text-xs text-slate-500">Subscribe for bubbly updates</p>
              <div className="mt-2 flex">
                <input type="email" placeholder="Email" className="bg-slate-800 border-none rounded-l-md px-3 py-2 text-sm w-full focus:ring-1 focus:ring-blue-500" />
                <button className="bg-blue-500 px-4 py-2 rounded-r-md text-sm font-bold">Go</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs">
          <p>© 2025 Fizz Himalaya. All rights reserved. Crafted with passion in Kathmandu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
