export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  ingredients: string[];
  isFavorite?: boolean;
  type?: 'standard' | 'pupbox';
}

export interface CartItem extends Product {
  quantity: number;
  selectedItems?: Product[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  dogName: string;
}
