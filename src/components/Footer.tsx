import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
  contactPhone: string;
  contactEmail: string;
  contactLocation: string;
  pickupHours: string;
  orderClose: string;
}

const Footer = ({ scrollToSection, contactPhone, contactEmail, contactLocation, pickupHours, orderClose }: FooterProps) => (
  <footer id="contact" className="bg-brown-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold mb-4 font-serif">Bark & Bite Bakery</div>
          <p className="text-brown-300 mb-6">Handcrafted treats made with love for your furry family members.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-brown-300 hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-brown-300 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-brown-300 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4 font-serif">Quick Links</h5>
          <div className="space-y-2">
            <button onClick={() => scrollToSection('products')} className="block text-brown-300 hover:text-white transition-colors">Shop</button>
            <button onClick={() => scrollToSection('about')} className="block text-brown-300 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('process')} className="block text-brown-300 hover:text-white transition-colors">How It Works</button>
            <a href="#" className="block text-brown-300 hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4 font-serif">Contact Info</h5>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-brown-400" />
              <span className="text-brown-300">{contactPhone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-brown-400" />
              <span className="text-brown-300">{contactEmail}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-4 w-4 text-brown-400" />
              <span className="text-brown-300">{contactLocation}</span>
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4 font-serif">Pickup Hours</h5>
          <div className="space-y-2 text-brown-300">
            <p>{pickupHours}</p>
            <p>{orderClose}</p>
            <p className="text-sm mt-4">Fresh treats baked weekly in small batches</p>
          </div>
        </div>
      </div>
      <div className="border-t border-brown-800 mt-12 pt-8 text-center">
        <p className="text-brown-300">© 2025 Bark & Bite Bakery. All rights reserved. Made with ❤️ for dogs and their humans.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
