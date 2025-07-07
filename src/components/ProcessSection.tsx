import React from 'react';
import { ArrowRight, ArrowDown, Clock, ChefHat, Package } from 'lucide-react';

const ProcessSection: React.FC = () => (
  <section id="process" className="py-20 bg-cream-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4 font-serif">How It Works</h2>
        <p className="text-xl text-brown-600">Simple ordering process for fresh treats</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-y-12 md:gap-8 items-center">
        <div className="text-center bg-white rounded-2xl p-8 shadow-card">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-terracotta-100 rounded-full mb-6 shadow-md">
            <Clock className="h-12 w-12 text-terracotta-600" />
          </div>
          <h3 className="text-2xl font-bold text-brown-900 mb-2 font-serif">Order by Friday 5PM</h3>
          <p className="text-base text-brown-600">Place your order online before the weekly deadline</p>
        </div>
        <div className="flex justify-center items-center">
          <ArrowRight className="h-8 w-8 text-brown-400 hidden md:block" />
          <ArrowDown className="h-8 w-8 text-brown-400 block md:hidden" />
        </div>
        <div className="text-center bg-white rounded-2xl p-8 shadow-card">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brown-100 rounded-full mb-6 shadow-md">
            <ChefHat className="h-12 w-12 text-brown-600" />
          </div>
          <h3 className="text-2xl font-bold text-brown-900 mb-2 font-serif">We Bake</h3>
          <p className="text-base text-brown-600">Fresh treats baked with love every weekend</p>
        </div>
        <div className="flex justify-center items-center">
          <ArrowRight className="h-8 w-8 text-brown-400 hidden md:block" />
          <ArrowDown className="h-8 w-8 text-brown-400 block md:hidden" />
        </div>
        <div className="text-center bg-white rounded-2xl p-8 shadow-card">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-cream-200 rounded-full mb-6 shadow-md">
            <Package className="h-12 w-12 text-brown-600" />
          </div>
          <h3 className="text-2xl font-bold text-brown-900 mb-2 font-serif">Collect Saturday 10AM-2PM</h3>
          <p className="text-base text-brown-600">Pick up your fresh treats at our bakery</p>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
