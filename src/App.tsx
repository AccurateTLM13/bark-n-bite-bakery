import React, { useState, useEffect } from 'react';
import PupBoxSelectionModal from './components/PupBoxSelectionModal';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AboutProcess from './components/AboutProcess';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { products, Product } from './data/products';
import { testimonials } from './data/testimonials';

interface CartItem extends Product {
  quantity: number;
  selectedItems?: Product[];
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isPupBoxSelectionOpen, setIsPupBoxSelectionOpen] = useState(false);
  const [currentPupBoxProduct, setCurrentPupBoxProduct] = useState<Product | null>(null);

  // Contact and pickup details can be customized via environment variables
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE ?? '(731) 555-BARK';
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? 'hello@barkandbite.com';
  const contactLocation = import.meta.env.VITE_CONTACT_LOCATION ?? 'Gibson County, TN';
  const pickupHours = import.meta.env.VITE_PICKUP_HOURS ?? 'Saturday: 10AM - 2PM';
  const orderClose = import.meta.env.VITE_ORDER_CLOSE ?? 'Orders close Friday 5PM';

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product: Product) => {
    if (product.type === 'pupbox') {
      setCurrentPupBoxProduct(product);
      setIsPupBoxSelectionOpen(true);
      return;
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handlePupBoxSelection = (selectedTreats: Product[]) => {
    if (currentPupBoxProduct && selectedTreats.length === 6) {
      setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === currentPupBoxProduct.id);
        if (existingItem) {
          return prevCart.map(item =>
            item.id === currentPupBoxProduct.id
              ? { ...item, quantity: item.quantity + 1, selectedItems: selectedTreats }
              : item
          );
        }
        return [...prevCart, { ...currentPupBoxProduct, quantity: 1, selectedItems: selectedTreats }];
      });
      setIsPupBoxSelectionOpen(false);
      setCurrentPupBoxProduct(null);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailStatus('success');
      setEmail('');
      setTimeout(() => setEmailStatus('idle'), 3000);
    } else {
      setEmailStatus('error');
      setTimeout(() => setEmailStatus('idle'), 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-200 to-cream-300">
      <Header
        isSticky={isSticky}
        openCart={() => setIsCartOpen(true)}
        getTotalItems={getTotalItems}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <ProductGrid
        products={products}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        addToCart={addToCart}
      />
      <AboutProcess />
      <Testimonials testimonials={testimonials} />
      <Newsletter
        email={email}
        setEmail={setEmail}
        emailStatus={emailStatus}
        handleEmailSubmit={handleEmailSubmit}
      />
      <Footer
        scrollToSection={scrollToSection}
        contactPhone={contactPhone}
        contactEmail={contactEmail}
        contactLocation={contactLocation}
        pickupHours={pickupHours}
        orderClose={orderClose}
      />
    

      {/* Shopping Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[80vh] overflow-hidden shadow-floating">
            <div className="p-6 border-b border-brown-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-brown-900 font-serif">Your Cart</h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-brown-500 hover:text-brown-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-96">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">
                    <img
                    src="/barknbiteace.png"
                    alt="Bark & Bite logo"
                    loading="lazy"
                    className="h-[100px] w-auto object-contain"
                    />
                  </div>
                  <p className="text-brown-500">Your cart is empty</p>
                  <p className="text-sm text-brown-400 mt-2">Add some treats to make your pup happy!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 bg-cream-50 p-4 rounded-2xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-brown-900">{item.name}</h4>
                        {item.selectedItems && (
                          <div className="mt-2">
                            <p className="text-xs text-brown-500 mb-1">Contains:</p>
                            <div className="text-xs text-brown-600 space-y-1">
                              {item.selectedItems.map((treat) => (
                                <div key={treat.id} className="flex items-center space-x-1">
                                  <span className="w-1 h-1 bg-brown-400 rounded-full"></span>
                                  <span>{treat.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        <p className="text-brown-700">${item.price}</p>
                      </div>
                      <div className="text-center">
                        <span className="font-semibold text-brown-900">Qty: {item.quantity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-brown-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-brown-900">Total:</span>
                  <span className="text-xl font-bold text-brown-900">${getTotalPrice().toFixed(2)}</span>
                </div>
                <button className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white py-3 rounded-full font-semibold transition-all">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pup Box Selection Modal */}
      <PupBoxSelectionModal
        isOpen={isPupBoxSelectionOpen}
        onClose={() => {
          setIsPupBoxSelectionOpen(false);
          setCurrentPupBoxProduct(null);
        }}
        products={products.filter(p => p.type === 'standard')}
        onConfirm={handlePupBoxSelection}
      />
    </div>
  );
}

export default App;
