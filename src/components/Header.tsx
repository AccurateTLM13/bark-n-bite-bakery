import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

interface HeaderProps {
  isSticky: boolean;
  openCart: () => void;
  getTotalItems: () => number;
  scrollToSection: (id: string) => void;
  openMobileMenu: () => void;
}

const Header = ({ isSticky, openCart, getTotalItems, scrollToSection, openMobileMenu }: HeaderProps) => (
  <>
    <header className={`bg-cream-100 z-50 transition-all duration-300 ${
      isSticky ? 'fixed top-0 w-full shadow-soft' : 'relative'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 flex-1 min-w-0">
              <img
                src="/barknbiteace.png"
                alt="Bark & Bite logo"
                loading="lazy"
                className="h-12 sm:h-16 md:h-20 lg:h-[100px] w-auto object-contain flex-shrink-0"
              />
              <span className="text-brown-900 font-bold text-lg sm:text-xl md:text-2xl font-serif truncate">
                Bark & Bite Bakery
              </span>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={openMobileMenu}
              className="md:hidden p-2 text-brown-900 hover:text-terracotta-600 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('products')}
                className="text-brown-700 hover:text-brown-900 font-medium transition-colors"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-brown-700 hover:text-brown-900 font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-brown-700 hover:text-brown-900 font-medium transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-brown-700 hover:text-brown-900 font-medium transition-colors"
              >
                Contact
              </button>
            </nav>
            <button
              onClick={openCart}
              className="relative p-3 text-brown-900 hover:text-terracotta-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-terracotta-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
    <div className={`transition-all duration-300 ${isSticky ? 'h-16 sm:h-20 md:h-24 lg:h-[88px]' : 'h-0'}`}></div>
  </>
);

export default Header;
