import React from 'react';

interface NewsletterProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  emailStatus: 'idle' | 'success' | 'error';
  handleEmailSubmit: (e: React.FormEvent) => void;
}

const Newsletter = ({ email, setEmail, emailStatus, handleEmailSubmit }: NewsletterProps) => (
  <section className="py-20 bg-terracotta-600">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Join the Pack</h2>
      <p className="text-xl text-terracotta-100 mb-8">Get treat news, special offers, and tips for keeping your pup happy</p>
      <form onSubmit={handleEmailSubmit} className="mx-auto">
        <div className="flex space-x-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-white/20 text-brown-900"
            required
          />
          <button type="submit" className="bg-white hover:bg-cream-100 text-terracotta-600 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105">
            Sign Up for Treat News & Offers
          </button>
        </div>
        {emailStatus === 'success' && (
          <p className="mt-4 text-white animate-fade-in">🎉 Welcome to the pack! Check your email for a special offer.</p>
        )}
        {emailStatus === 'error' && (
          <p className="mt-4 text-red-200 animate-fade-in">Please enter a valid email address.</p>
        )}
      </form>
    </div>
  </section>
);

export default Newsletter;
