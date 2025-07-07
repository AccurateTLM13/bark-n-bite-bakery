import React, { useState } from 'react';

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

type PupBoxSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onConfirm: (selectedTreats: Product[]) => void;
};

const PupBoxSelectionModal = ({ isOpen, onClose, products, onConfirm }: PupBoxSelectionModalProps) => {
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
                      loading="lazy"
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
              className={`px-8 py-3 rounded-full font-semibold transition-all${
                selectedTreats.length === 6
                  ? ' bg-terracotta-600 hover:bg-terracotta-700 text-white transform hover:scale-105'
                  : ' bg-gray-300 text-gray-500 cursor-not-allowed'
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

export default PupBoxSelectionModal;
