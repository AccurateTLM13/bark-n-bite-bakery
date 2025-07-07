import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, ArrowRight, ArrowDown, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Leaf, Clock, ChefHat, Package } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  ingredients: string[];
  isFavorite?: boolean;
  type?: 'standard' | 'pupbox';
}

interface CartItem extends Product {
  quantity: number;
  selectedItems?: Product[];
}

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  dogName: string;
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

  const products: Product[] = [
    {
    id: 1,
    name: "Peanut Butter & Bacon Cheese Biscuits",
    price: 2.00,
    image: "/public/biscuits.png",                  // swap to final PNG path
    description: "Crunchy bone-shaped biscuits flavored with natural peanut butter plus bacon & cheddar.",
    ingredients: ["Whole-wheat flour", "Peanut butter", "Bacon bits", "Cheddar", "Egg"],
    type: 'standard'
  },
  {
    id: 2,
    name: "Apple & Cheddar Pupcakes",
    price: 2.00,
    image: "/public/apple-cheddar-pupcakes.png",
    description: "Mini pup-friendly cupcakes packed with fresh apple and sharp cheddar.",
    ingredients: ["Oat flour", "Apple", "Cheddar cheese", "Honey", "Egg"],
    type: 'standard'
  },
  {
    id: 3,
    name: "Peanut Butter Pupcakes",
    price: 2.00,
    image: "/public/peanut-pupcakes.png",
    description: "Soft peanut-butter cupcakes topped with a light yogurt drizzle.",
    ingredients: ["Oat flour", "Peanut butter", "Banana", "Yogurt", "Egg"],
    type: 'standard'
  },
  {
    id: 4,
    name: "Chicken Jerky",
    price: 2.00,
    image: "/public/chicken-jerky.png",
    description: "Single-ingredient dehydrated chicken strips—nothing else.",
    ingredients: ["Chicken breast"],
    type: 'standard'
  },
  {
    id: 5,
    name: "Peanut Butter Bacon Doughnuts",
    price: 2.00,
    image: "/public/pb-bacon-doughnut.png",
    description: "Dog-safe doughnut rings with peanut-butter glaze and bacon sprinkles.",
    ingredients: ["Brown-rice flour", "Peanut butter", "Bacon bits", "Honey", "Egg"],
    type: 'standard'
  },
  {
    id: 6,
    name: "Cinnamon Bun with Cream-Cheese Icing",
    price: 2.00,
    image: "/public/cinnamon-bun.png",
    description: "Soft cinnamon swirl bun finished with light cream-cheese frosting.",
    ingredients: ["Oat flour", "Pumpkin purée", "Cinnamon", "Cream cheese", "Egg"],
    type: 'standard'
  },
  {
    id: 7,
    name: "Apple Puppy Pretzel",
    price: 2.00,
    image: "/public/apple-pretzel.png",
    description: "Chewy pretzel twist flavored with apple and a hint of honey.",
    ingredients: ["Whole-wheat flour", "Apple", "Honey", "Egg"],
    type: 'standard'
  },
  {
    id: 8,
    name: "Pup Box (6-Pack)",
    price: 6.00,
    image: "/public/pupbox.png",
    description: "Customizable box of any six treats—mix & match your pup’s favorites.",
    ingredients: [],          // varies per customer selection
    type: 'pupbox'
  }
];


  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah M.",
      text: "My golden retriever Max goes absolutely crazy for these treats! The quality is amazing.",
      rating: 5,
      dogName: "Max"
    },
    {
      id: 2,
      name: "David L.",
      text: "Finally found treats that my picky eater loves. The bacon swirls are her favorite!",
      rating: 5,
      dogName: "Luna"
    },
    {
      id: 3,
      name: "Jennifer K.",
      text: "Love knowing exactly what ingredients are in my dog's treats. Fresh and delicious!",
      rating: 5,
      dogName: "Charlie"
    },
    {
      id: 4,
      name: "Mike R.",
      text: "Best dog treats in Gibson County! My lab mix can't get enough of them.",
      rating: 5,
      dogName: "Buddy"
    }
  ];

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

  // PupBox Selection Modal Component
  const PupBoxSelectionModal = ({ 
    isOpen, 
    onClose, 
    products, 
    onConfirm 
  }: {
    isOpen: boolean;
    onClose: () => void;
    products: Product[];
    onConfirm: (selectedTreats: Product[]) => void;
  }) => {
    const [selectedTreats, setSelectedTreats] = useState<Product[]>([]);

    const toggleTreatSelection = (product: Product) => {
      setSelectedTreats(prev => {
        const isSelected = prev.some(treat => treat.id === product.id);
        if (isSelected) {
          return prev.filter(treat => treat.id !== product.id);
        } else if (prev.length < 6) {
          return [...prev, product];
        }
        return prev;
      });
    };

    const handleConfirm = () => {
      if (selectedTreats.length === 6) {
        onConfirm(selectedTreats);
        setSelectedTreats([]);
      }
    };

    const handleClose = () => {
      setSelectedTreats([]);
      onClose();
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-floating">
          <div className="p-6 border-b border-brown-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-bold text-brown-900 font-serif">Choose Your 6 Treats</h3>
                <p className="text-brown-600 mt-2">Select exactly 6 treats for your Pup Box</p>
              </div>
              <button
                onClick={handleClose}
                className="text-brown-500 hover:text-brown-700 text-3xl"
              >
                ×
              </button>
            </div>
            <div className="mt-4 bg-cream-100 rounded-full px-4 py-2 inline-block">
              <span className="text-brown-700 font-semibold">
                {selectedTreats.length}/6 treats selected
              </span>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const isSelected = selectedTreats.some(treat => treat.id === product.id);
                const canSelect = selectedTreats.length < 6 || isSelected;
                
                return (
                  <div
                    key={product.id}
                    className={`relative bg-white rounded-2xl overflow-hidden shadow-card transition-all transform cursor-pointer ${
                      isSelected 
                        ? 'ring-4 ring-terracotta-400 scale-105' 
                        : canSelect 
                          ? 'hover:shadow-lift hover:-translate-y-1' 
                          : 'opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => canSelect && toggleTreatSelection(product)}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 bg-terracotta-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold z-10">
                        ✓
                      </div>
                    )}
                    
                    <div className="p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                      />
                      <h4 className="text-lg font-bold text-brown-900 mb-2 font-serif text-center">
                        {product.name}
                      </h4>
                      <p className="text-brown-600 text-sm text-center leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-6 border-t border-brown-200">
            <div className="flex justify-between items-center">
              <button
                onClick={handleClose}
                className="px-6 py-3 text-brown-700 hover:text-brown-900 font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                disabled={selectedTreats.length !== 6}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  selectedTreats.length === 6
                    ? 'bg-terracotta-600 hover:bg-terracotta-700 text-white transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Add Pup Box to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-200 to-cream-300">
      {/* Header */}
      <header className={`bg-cream-100 z-50 transition-all duration-300 ${
        isSticky ? 'fixed top-0 w-full shadow-soft' : 'relative'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="py-6">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img
                src="/public/barknbiteace.png" 
                alt="Bark & Bite logo"
                className="h-[100px] w-auto object-contain"
                />
                <span className="text-brown-900 font-bold text-2xl font-serif">
                Bark & Bite Bakery
                </span>
              </div>
              {/* Navigation */}
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

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
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

      {/* Spacer for sticky header */}
      <div className={`transition-all duration-300 ${isSticky ? 'h-[88px]' : 'h-0'}`}></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream-200 to-cream-300 overflow-hidden">
        {/* Floating Treat Images */}
<div className="absolute inset-0 pointer-events-none">
  {/* Apple Pretzel */}
  <div className="absolute top-10 left-5 md:top-20 md:left-20 lg:top-32 lg:left-32 animate-float">
    <div className="w-16 h-16 bg-terracotta-200 rounded-full flex items-center justify-center shadow-soft">
      <img
        src="/public/apple-pretzel.png"
        alt="Apple Puppy Pretzel"
        className="w-12 h-12 object-contain"
      />
    </div>
  </div>

  {/* Peanut-Butter Bone */}
  <div className="absolute top-16 right-5 md:top-40 md:right-20 lg:top-48 lg:right-32 animate-float-delayed">
    <div className="w-20 h-20 bg-brown-200 rounded-full flex items-center justify-center shadow-soft">
      <img
        src="/public/biscuits.png"
        alt="Peanut-Butter Bone"
        className="w-16 h-16 object-contain"
      />
    </div>
  </div>

  {/* Chicken Jerky */}
  <div className="absolute bottom-16 left-5 md:bottom-40 md:left-20 lg:bottom-48 lg:left-32 animate-float-delayed-2">
    <div className="w-18 h-18 bg-cream-400 rounded-full flex items-center justify-center shadow-soft">
      <img
        src="/public/chicken-jerky.png"
        alt="Chicken Jerky"
        className="w-14 h-14 object-contain"
      />
    </div>
  </div>

  {/* Pup-cake */}
  <div className="absolute bottom-10 right-5 md:bottom-20 md:right-10 lg:bottom-32 lg:right-32 animate-float">
    <div className="w-14 h-14 bg-terracotta-300 rounded-full flex items-center justify-center shadow-soft">
      <img
        src="/public/apple-cheddar-pupcakes.png"
        alt="Apple & Cheddar Pup-cake"
        className="w-10 h-10 object-contain"
      />
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

      {/* Trust Bar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-brown-600" />
              </div>
              <h3 className="text-lg font-semibold text-brown-900 font-serif">
                Locally Sourced
              </h3>
            </div>
            <div className="text-center border-l border-r border-brown-200 md:border-l-0 md:border-r-0 md:border-t-0 md:border-b-0">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mb-4">
                <ChefHat className="h-8 w-8 text-brown-600" />
              </div>
              <h3 className="text-lg font-semibold text-brown-900 font-serif">
                Baked Weekly
              </h3>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brown-100 rounded-full mb-4">
                <Package className="h-8 w-8 text-brown-600" />
              </div>
              <h3 className="text-lg font-semibold text-brown-900 font-serif">
                Pickup Only
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
<section id="products" className="py-20 bg-cream-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4 font-serif">
        Best Sellers
      </h2>
      <p className="text-xl text-brown-600 max-w-2xl mx-auto">
        Our most popular treats that dogs can’t resist
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-all transform hover:-translate-y-1 group flex flex-col h-full"
        >
          <div className="relative p-6 flex flex-col h-full">
            {/* Favorite button */}
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-4 right-4 p-2 rounded-full bg-cream-100 hover:bg-cream-200 transition-colors z-10"
            >
              <Heart
                className={`h-5 w-5 ${
                  favorites.includes(product.id)
                    ? "fill-red-500 text-red-500"
                    : "text-brown-400"
                }`}
              />
            </button>

            {/* Product content */}
            <div className="text-center flex flex-col h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform"
              />

              <h3 className="text-xl font-bold text-brown-900 mb-2 font-serif">
                {product.name}
              </h3>
              <p className="text-brown-600 mb-4 text-sm leading-relaxed flex-grow">
                {product.description}
              </p>

              {/* Combined price + add-to-cart */}
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-brown-800 hover:bg-brown-900 text-white py-3 px-4 rounded-full font-semibold flex items-center justify-between transition-all transform hover:scale-105 mt-auto"
              >
                <span className="text-lg">${product.price}</span>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4 font-serif">
              How It Works
            </h2>
            <p className="text-xl text-brown-600">
              Simple ordering process for fresh treats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-y-12 md:gap-8 items-center">
            <div className="text-center bg-white rounded-2xl p-8 shadow-card">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-terracotta-100 rounded-full mb-6 shadow-md">
                <Clock className="h-12 w-12 text-terracotta-600" />
              </div>
              <h3 className="text-2xl font-bold text-brown-900 mb-2 font-serif">
                Order by Friday 5PM
              </h3>
              <p className="text-base text-brown-600">
                Place your order online before the weekly deadline
              </p>
            </div>

            <div className="flex justify-center items-center">
              <ArrowRight className="h-8 w-8 text-brown-400 hidden md:block" />
              <ArrowDown className="h-8 w-8 text-brown-400 block md:hidden" />
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-card">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brown-100 rounded-full mb-6 shadow-md">
                <ChefHat className="h-12 w-12 text-brown-600" />
              </div>
              <h3 className="text-2xl font-bold text-brown-900 mb-2 font-serif">
                We Bake
              </h3>
              <p className="text-base text-brown-600">
                Fresh treats baked with love every weekend
              </p>
            </div>

            <div className="flex justify-center items-center">
              <ArrowRight className="h-8 w-8 text-brown-400 hidden md:block" />
              <ArrowDown className="h-8 w-8 text-brown-400 block md:hidden" />
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-card">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-cream-200 rounded-full mb-6 shadow-md">
                <Package className="h-12 w-12 text-brown-600" />
              </div>
              <h3 className="text-2xl font-bold text-brown-900 mb-2 font-serif">
                Collect Saturday 10AM-2PM
              </h3>
              <p className="text-base text-brown-600">
                Pick up your fresh treats at our bakery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cream-50 relative overflow-hidden">
        {/* Paw print pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl">🐾</div>
          <div className="absolute top-40 right-20 text-4xl">🐾</div>
          <div className="absolute bottom-20 left-20 text-5xl">🐾</div>
          <div className="absolute bottom-40 right-10 text-3xl">🐾</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img 
                src="/public/our-story.png" 
                alt="Baker with dog" 
                className="w-80 h-80 object-cover rounded-full mx-auto lg:mx-0 shadow-card"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6 font-serif">
                Our Story
              </h2>
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
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-brown-700 font-semibold">4.9/5 from 200+ happy customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4 font-serif">
              What Pet Parents Say
            </h2>
            <p className="text-xl text-brown-600">
              Real reviews from our happy customers
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="flex space-x-8 animate-scroll hover:pause">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-80 bg-cream-50 rounded-2xl p-6 shadow-card"
                >
                  <div className="flex items-center mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-2xl">🐾</span>
                    ))}
                  </div>
                  <p className="text-brown-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
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

      {/* Newsletter */}
      <section className="py-20 bg-terracotta-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Join the Pack
          </h2>
          <p className="text-xl text-terracotta-100 mb-8">
            Get treat news, special offers, and tips for keeping your pup happy
          </p>

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
              <button 
                type="submit"
                className="bg-white hover:bg-cream-100 text-terracotta-600 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Sign Up for Treat News & Offers
              </button>
            </div>
            
            {emailStatus === 'success' && (
              <p className="mt-4 text-white animate-fade-in">
                🎉 Welcome to the pack! Check your email for a special offer.
              </p>
            )}
            {emailStatus === 'error' && (
              <p className="mt-4 text-red-200 animate-fade-in">
                Please enter a valid email address.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brown-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 font-serif">
                Bark & Bite Bakery
              </div>
              <p className="text-brown-300 mb-6">
                Handcrafted treats made with love for your furry family members.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-brown-300 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-brown-300 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-brown-300 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4 font-serif">Quick Links</h5>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="block text-brown-300 hover:text-white transition-colors"
                >
                  Shop
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-brown-300 hover:text-white transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="block text-brown-300 hover:text-white transition-colors"
                >
                  How It Works
                </button>
                <a href="#" className="block text-brown-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4 font-serif">Contact Info</h5>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-brown-400" />
                  <span className="text-brown-300">{contactPhone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-brown-400" />
                  <span className="text-brown-300">{contactEmail}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-brown-400" />
                  <span className="text-brown-300">{contactLocation}</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4 font-serif">Pickup Hours</h5>
              <div className="space-y-2 text-brown-300">
                <p>{pickupHours}</p>
                <p>{orderClose}</p>
                <p className="text-sm mt-4">
                  Fresh treats baked weekly in small batches
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-brown-800 mt-12 pt-8 text-center">
            <p className="text-brown-300">
              © 2025 Bark & Bite Bakery. All rights reserved. Made with ❤️ for dogs and their humans.
            </p>
          </div>
        </div>
      </footer>

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
                    src="/public/barknbiteace.png" 
                    alt="Bark & Bite logo"
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