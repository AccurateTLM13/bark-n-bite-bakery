import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import PupBoxSelectionModal from './components/PupBoxSelectionModal';
import { Product, CartItem, Testimonial } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isPupBoxSelectionOpen, setIsPupBoxSelectionOpen] = useState(false);
  const [currentPupBoxProduct, setCurrentPupBoxProduct] = useState<Product | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setIsSticky(window.scrollY > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: 'Peanut Butter & Bacon Cheese Biscuits',
      price: 2.0,
      image: '/public/biscuits.png',
      description: 'Crunchy bone-shaped biscuits flavored with natural peanut butter plus bacon & cheddar.',
      ingredients: ['Whole-wheat flour', 'Peanut butter', 'Bacon bits', 'Cheddar', 'Egg'],
      type: 'standard',
    },
    {
      id: 2,
      name: 'Apple & Cheddar Pupcakes',
      price: 2.0,
      image: '/public/apple-cheddar-pupcakes.png',
      description: 'Mini pup-friendly cupcakes packed with fresh apple and sharp cheddar.',
      ingredients: ['Oat flour', 'Apple', 'Cheddar cheese', 'Honey', 'Egg'],
      type: 'standard',
    },
    {
      id: 3,
      name: 'Peanut Butter Pupcakes',
      price: 2.0,
      image: '/public/peanut-pupcakes.png',
      description: 'Soft peanut-butter cupcakes topped with a light yogurt drizzle.',
      ingredients: ['Oat flour', 'Peanut butter', 'Banana', 'Yogurt', 'Egg'],
      type: 'standard',
    },
    {
      id: 4,
      name: 'Chicken Jerky',
      price: 2.0,
      image: '/public/chicken-jerky.png',
      description: 'Single-ingredient dehydrated chicken strips—nothing else.',
      ingredients: ['Chicken breast'],
      type: 'standard',
    },
    {
      id: 5,
      name: 'Peanut Butter Bacon Doughnuts',
      price: 2.0,
      image: '/public/pb-bacon-doughnut.png',
      description: 'Dog-safe doughnut rings with peanut-butter glaze and bacon sprinkles.',
      ingredients: ['Brown-rice flour', 'Peanut butter', 'Bacon bits', 'Honey', 'Egg'],
      type: 'standard',
    },
    {
      id: 6,
      name: 'Cinnamon Bun with Cream-Cheese Icing',
      price: 2.0,
      image: '/public/cinnamon-bun.png',
      description: 'Soft cinnamon swirl bun finished with light cream-cheese frosting.',
      ingredients: ['Oat flour', 'Pumpkin purée', 'Cinnamon', 'Cream cheese', 'Egg'],
      type: 'standard',
    },
    {
      id: 7,
      name: 'Apple Puppy Pretzel',
      price: 2.0,
      image: '/public/apple-pretzel.png',
      description: 'Chewy pretzel twist flavored with apple and a hint of honey.',
      ingredients: ['Whole-wheat flour', 'Apple', 'Honey', 'Egg'],
      type: 'standard',
    },
    {
      id: 8,
      name: 'Pup Box (6-Pack)',
      price: 6.0,
      image: '/public/pupbox.png',
      description: 'Customizable box of any six treats—mix & match your pup’s favorites.',
      ingredients: [],
      type: 'pupbox',
    },
  ];

  const testimonials: Testimonial[] = [
    { id: 1, name: 'Sarah M.', text: 'My golden retriever Max goes absolutely crazy for these treats! The quality is amazing.', rating: 5, dogName: 'Max' },
    { id: 2, name: 'David L.', text: 'Finally found treats that my picky eater loves. The bacon swirls are her favorite!', rating: 5, dogName: 'Luna' },
    { id: 3, name: 'Jennifer K.', text: "Love knowing exactly what ingredients are in my dog's treats. Fresh and delicious!", rating: 5, dogName: 'Charlie' },
    { id: 4, name: 'Mike R.', text: "Best dog treats in Gibson County! My lab mix can't get enough of them.", rating: 5, dogName: 'Buddy' },
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => (prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]));
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
        return prevCart.map(item => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handlePupBoxSelection = (selectedTreats: Product[]) => {
    if (currentPupBoxProduct && selectedTreats.length === 6) {
      setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === currentPupBoxProduct.id);
        if (existingItem) {
          return prevCart.map(item => (item.id === currentPupBoxProduct.id ? { ...item, quantity: item.quantity + 1, selectedItems: selectedTreats } : item));
        }
        return [...prevCart, { ...currentPupBoxProduct, quantity: 1, selectedItems: selectedTreats }];
      });
      setIsPupBoxSelectionOpen(false);
      setCurrentPupBoxProduct(null);
    }
  };

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
        scrollToSection={scrollToSection}
        openCart={() => setIsCartOpen(true)}
        totalItems={getTotalItems()}
      />
      <div className={`transition-all duration-300 ${isSticky ? 'h-[88px]' : 'h-0'}`}></div>
      <Hero scrollToSection={scrollToSection} />
      <ProductList
        products={products}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        addToCart={addToCart}
      />
      <ProcessSection />
      <AboutSection />
      <Testimonials testimonials={testimonials} />
      <Newsletter email={email} emailStatus={emailStatus} setEmail={setEmail} onSubmit={handleEmailSubmit} />
      <Footer scrollToSection={scrollToSection} />

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[80vh] overflow-hidden shadow-floating">
            <div className="p-6 border-b border-brown-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-brown-900 font-serif">Your Cart</h3>
                <button onClick={() => setIsCartOpen(false)} className="text-brown-500 hover:text-brown-700 text-2xl">×</button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-96">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">
                    <img src="/public/barknbiteace.png" alt="Bark & Bite logo" className="h-[100px] w-auto object-contain" />
                  </div>
                  <p className="text-brown-500">Your cart is empty</p>
                  <p className="text-sm text-brown-400 mt-2">Add some treats to make your pup happy!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 bg-cream-50 p-4 rounded-2xl">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-full" />
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
