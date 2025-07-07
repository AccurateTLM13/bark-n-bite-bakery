import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (id: string) => void;
}

const MobileMenu = ({ isOpen, onClose, scrollToSection }: MobileMenuProps) => {
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-brown-200">
          <span className="text-xl font-bold text-brown-900 font-serif">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-brown-500 hover:text-brown-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="p-6">
          <div className="space-y-4">
            <button
              onClick={() => handleNavClick('products')}
              className="block w-full text-left text-lg text-brown-700 hover:text-brown-900 font-medium transition-colors py-3 border-b border-brown-100"
            >
              Shop
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left text-lg text-brown-700 hover:text-brown-900 font-medium transition-colors py-3 border-b border-brown-100"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="block w-full text-left text-lg text-brown-700 hover:text-brown-900 font-medium transition-colors py-3 border-b border-brown-100"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left text-lg text-brown-700 hover:text-brown-900 font-medium transition-colors py-3"
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;