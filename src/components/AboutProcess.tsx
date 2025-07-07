import React from 'react';
import { Clock, ArrowRight, ArrowDown, ChefHat, Package, Star } from 'lucide-react';

const AboutProcess = () => (
  <>
    <section id="process" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brown-900 mb-4 font-serif">How It Works</h2>
          <p className="text-lg sm:text-xl text-brown-600 px-4">Simple ordering process for fresh treats</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-y-8 md:gap-8 items-center">
          <div className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-card">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-terracotta-100 rounded-full mb-4 sm:mb-6 shadow-md">
              <Clock className="h-12 w-12 text-terracotta-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-brown-900 mb-2 font-serif">Order by Friday 5PM</h3>
            <p className="text-sm sm:text-base text-brown-600">Place your order online before the weekly deadline</p>
          </div>
          <div className="flex justify-center items-center">
            <ArrowRight className="h-8 w-8 text-brown-400 hidden md:block" />
            <ArrowDown className="h-8 w-8 text-brown-400 block md:hidden" />
          </div>
          <div className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-card">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-brown-100 rounded-full mb-4 sm:mb-6 shadow-md">
              <ChefHat className="h-12 w-12 text-brown-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-brown-900 mb-2 font-serif">We Bake</h3>
            <p className="text-sm sm:text-base text-brown-600">Fresh treats baked with love every weekend</p>
          </div>
          <div className="flex justify-center items-center">
            <ArrowRight className="h-8 w-8 text-brown-400 hidden md:block" />
            <ArrowDown className="h-8 w-8 text-brown-400 block md:hidden" />
          </div>
          <div className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-card">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-cream-200 rounded-full mb-4 sm:mb-6 shadow-md">
              <Package className="h-12 w-12 text-brown-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-brown-900 mb-2 font-serif">Collect Saturday 10AM-2PM</h3>
            <p className="text-sm sm:text-base text-brown-600">Pick up your fresh treats at our bakery</p>
          </div>
        </div>
      </div>
    </section>
    <section id="about" className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🐾</div>
        <div className="absolute top-40 right-20 text-4xl">🐾</div>
        <div className="absolute bottom-20 left-20 text-5xl">🐾</div>
        <div className="absolute bottom-40 right-10 text-3xl">🐾</div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <img src="/our-story.png" alt="Baker with dog" loading="lazy" className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full mx-auto lg:mx-0 shadow-card" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brown-900 mb-4 sm:mb-6 font-serif text-center lg:text-left">Our Story</h2>
            <p className="text-base sm:text-lg text-brown-700 mb-4 sm:mb-6 leading-relaxed">
              Hi, I'm Haley, and this is my golden labradoodle, Ace. After struggling to find healthy,
              delicious treats that Ace actually enjoyed, I decided to start baking my own. What began
              as weekend experiments in my kitchen has grown into Bark & Bite Bakery.
            </p>
            <p className="text-sm sm:text-base text-brown-600 mb-6 sm:mb-8 leading-relaxed">
              Every treat is made with the same care and quality ingredients I'd use for my own family.
              Because our furry friends deserve nothing but the best, and their happiness is worth every
              moment spent perfecting these recipes.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center lg:text-left">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm sm:text-base text-brown-700 font-semibold">4.9/5 from 200+ happy customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutProcess;
