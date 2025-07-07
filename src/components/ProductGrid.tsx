import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductGridProps {
  products: Product[];
  favorites: number[];
  toggleFavorite: (id: number) => void;
  addToCart: (product: Product) => void;
}

const ProductGrid = ({ products, favorites, toggleFavorite, addToCart }: ProductGridProps) => (
  <section id="products" className="py-20 bg-cream-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4 font-serif">Best Sellers</h2>
        <p className="text-lg sm:text-xl text-brown-600 max-w-2xl mx-auto px-4">Our most popular treats that dogs can't resist</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-all transform hover:-translate-y-1 group flex flex-col h-full">
            <div className="relative p-4 sm:p-6 flex flex-col h-full">
              <button onClick={() => toggleFavorite(product.id)} className="absolute top-4 right-4 p-2 rounded-full bg-cream-100 hover:bg-cream-200 transition-colors z-10">
                <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-brown-400'}`} />
              </button>
              <div className="text-center flex flex-col h-full">
                <img src={product.image} alt={product.name} loading="lazy" className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform" />
                <h3 className="text-lg sm:text-xl font-bold text-brown-900 mb-2 font-serif">{product.name}</h3>
                <p className="text-brown-600 mb-4 text-sm leading-relaxed flex-grow">{product.description}</p>
                <button onClick={() => addToCart(product)} className="w-full bg-brown-800 hover:bg-brown-900 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-full font-semibold flex items-center justify-between transition-all transform hover:scale-105 mt-auto text-sm sm:text-base">
                  <span className="text-base sm:text-lg">${product.price}</span>
                  <span className="text-sm sm:text-base">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
