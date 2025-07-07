import React from 'react';
import { Testimonial } from '../data/testimonials';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4 font-serif">What Pet Parents Say</h2>
        <p className="text-xl text-brown-600">Real reviews from our happy customers</p>
      </div>
      <div className="overflow-hidden">
        <div className="flex space-x-8 animate-scroll hover:pause">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-80 bg-cream-50 rounded-2xl p-6 shadow-card">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <span key={star} className="text-2xl">🐾</span>
                ))}
              </div>
              <p className="text-brown-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-brown-900">{testimonial.name}</span>
                <span className="text-brown-600 text-sm">Dog parent to {testimonial.dogName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
