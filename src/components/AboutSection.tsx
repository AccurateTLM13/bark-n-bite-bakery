import React from 'react';
import { Star } from 'lucide-react';

const AboutSection: React.FC = () => (
  <section id="about" className="py-20 bg-cream-50 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 left-10 text-6xl">🐾</div>
      <div className="absolute top-40 right-20 text-4xl">🐾</div>
      <div className="absolute bottom-20 left-20 text-5xl">🐾</div>
      <div className="absolute bottom-40 right-10 text-3xl">🐾</div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <img src="/public/our-story.png" alt="Baker with dog" className="w-80 h-80 object-cover rounded-full mx-auto lg:mx-0 shadow-card" />
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6 font-serif">Our Story</h2>
          <p className="text-lg text-brown-700 mb-6 leading-relaxed">
            Hi, I'm Haley, and this is my golden labradoodle, Ace. After struggling to find healthy,
            delicious treats that Ace actually enjoyed, I decided to start baking my own. What began
            as weekend experiments in my kitchen has grown into Bark & Bite Bakery.
          </p>
          <p className="text-brown-600 mb-8 leading-relaxed">
            Every treat is made with the same care and quality ingredients I'd use for my own family.
            Because our furry friends deserve nothing but the best, and their happiness is worth every
            moment spent perfecting these recipes.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">{[1,2,3,4,5].map(star => <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />)}</div>
            <span className="text-brown-700 font-semibold">4.9/5 from 200+ happy customers</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
