import React from 'react';
import { Leaf, ChefHat, Package } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => (
  <>
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream-200 to-cream-300 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 md:top-20 md:left-20 lg:top-32 lg:left-32 animate-float">
          <div className="w-16 h-16 bg-terracotta-200 rounded-full flex items-center justify-center shadow-soft">
            <img src="/apple-pretzel.png" alt="Apple Puppy Pretzel" loading="lazy" className="w-12 h-12 object-contain" />
          </div>
        </div>
        <div className="absolute top-16 right-5 md:top-40 md:right-20 lg:top-48 lg:right-32 animate-float-delayed">
          <div className="w-20 h-20 bg-brown-200 rounded-full flex items-center justify-center shadow-soft">
            <img src="/biscuits.png" alt="Peanut-Butter Bone" loading="lazy" className="w-16 h-16 object-contain" />
          </div>
        </div>
        <div className="absolute bottom-16 left-5 md:bottom-40 md:left-20 lg:bottom-48 lg:left-32 animate-float-delayed-2">
          <div className="w-18 h-18 bg-cream-400 rounded-full flex items-center justify-center shadow-soft">
            <img src="/chicken-jerky.png" alt="Chicken Jerky" loading="lazy" className="w-14 h-14 object-contain" />
          </div>
        </div>
        <div className="absolute bottom-10 right-5 md:bottom-20 md:right-10 lg:bottom-32 lg:right-32 animate-float">
          <div className="w-14 h-14 bg-terracotta-300 rounded-full flex items-center justify-center shadow-soft">
            <img src="/apple-cheddar-pupcakes.png" alt="Apple & Cheddar Pup-cake" loading="lazy" className="w-10 h-10 object-contain" />
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-brown-900 font-serif leading-tight">
            Wholesome,<br />
            Homemade Dog Treats<br />
            <span className="text-terracotta-600">Baked with Love ❤</span>
          </h1>
          <p className="text-xl md:text-2xl text-brown-700 mb-12 max-w-2xl mx-auto">
            Your furry friend deserves all-natural, locally crafted dog treats.
          </p>
          <button
            onClick={() => scrollToSection('products')}
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-card hover:shadow-lift"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mb-4">
              <Leaf className="h-8 w-8 text-brown-600" />
            </div>
            <h3 className="text-lg font-semibold text-brown-900 font-serif">Locally Sourced</h3>
          </div>
          <div className="text-center border-l border-r border-brown-200 md:border-l-0 md:border-r-0 md:border-t-0 md:border-b-0">
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
