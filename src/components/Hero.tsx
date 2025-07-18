import React from 'react';
import { Leaf, ChefHat, Package } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => (
  <>
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream-200 to-cream-300 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Apple Pretzel */}
        <div className="absolute top-16 left-2 sm:top-20 sm:left-5 md:top-20 md:left-20 lg:top-32 lg:left-32 animate-float">
          <div className="w-32 h-32 bg-terracotta-200 rounded-full flex items-center justify-center shadow-soft">
            <img
              src="/apple-pretzel.png"
              alt="Apple Puppy Pretzel"
              loading="lazy"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
        {/* Peanut-Butter Bone (Biscuits) */}
        <div className="absolute top-24 right-2 sm:top-32 sm:right-5 md:top-40 md:right-20 lg:top-48 lg:right-32 animate-float-delayed">
          <div className="w-32 h-32 bg-brown-200 rounded-full flex items-center justify-center shadow-soft">
            <img
              src="/biscuits.png"
              alt="Peanut-Butter Bone"
              loading="lazy"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
        {/* Chicken Jerky */}
        <div className="absolute bottom-24 left-2 sm:bottom-32 sm:left-5 md:bottom-40 md:left-20 lg:bottom-48 lg:left-32 animate-float-delayed-2">
          <div className="w-32 h-32 bg-cream-400 rounded-full flex items-center justify-center shadow-soft">
            <img
              src="/chicken-jerky.png"
              alt="Chicken Jerky"
              loading="lazy"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
        {/* Apple & Cheddar Pup-cake */}
        <div className="absolute bottom-28 right-2 sm:bottom-52 sm:right-5 md:bottom-60 md:right-10 lg:bottom-72 lg:right-32 animate-float">
          <div className="w-32 h-32 bg-terracotta-300 rounded-full flex items-center justify-center shadow-soft">
            <img
              src="/apple-cheddar-pupcakes.png"
              alt="Apple & Cheddar Pup-cake"
              loading="lazy"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-brown-900 font-serif leading-tight px-4">
            Wholesome,<br />
            Homemade Dog Treats<br />
            <span className="text-terracotta-600">Baked with Love ❤</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-brown-700 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Your furry friend deserves all-natural, locally crafted dog treats.
          </p>
          <button
            onClick={() => scrollToSection('products')}
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-card hover:shadow-lift"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mb-4">
              <Leaf className="h-8 w-8 text-brown-600" />
            </div>
            <h3 className="text-lg font-semibold text-brown-900 font-serif">Locally Sourced</h3>
          </div>
          <div className="text-center sm:border-l sm:border-r border-brown-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mb-4">
              <ChefHat className="h-8 w-8 text-brown-600" />
            </div>
            <h3 className="text-lg font-semibold text-brown-900 font-serif">Baked Weekly</h3>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mb-4">
              <Package className="h-8 w-8 text-brown-600" />
            </div>
            <h3 className="text-lg font-semibold text-brown-900 font-serif">Pickup Only</h3>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
