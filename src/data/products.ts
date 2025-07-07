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

export const products: Product[] = [
  {
    id: 1,
    name: "Peanut Butter & Bacon Cheese Biscuits",
    price: 2.0,
    image: "/public/biscuits.png",
    description: "Crunchy bone-shaped biscuits flavored with natural peanut butter plus bacon & cheddar.",
    ingredients: ["Whole-wheat flour", "Peanut butter", "Bacon bits", "Cheddar", "Egg"],
    type: 'standard'
  },
  {
    id: 2,
    name: "Apple & Cheddar Pupcakes",
    price: 2.0,
    image: "/public/apple-cheddar-pupcakes.png",
    description: "Mini pup-friendly cupcakes packed with fresh apple and sharp cheddar.",
    ingredients: ["Oat flour", "Apple", "Cheddar cheese", "Honey", "Egg"],
    type: 'standard'
  },
  {
    id: 3,
    name: "Peanut Butter Pupcakes",
    price: 2.0,
    image: "/public/peanut-pupcakes.png",
    description: "Soft peanut-butter cupcakes topped with a light yogurt drizzle.",
    ingredients: ["Oat flour", "Peanut butter", "Banana", "Yogurt", "Egg"],
    type: 'standard'
  },
  {
    id: 4,
    name: "Chicken Jerky",
    price: 2.0,
    image: "/public/chicken-jerky.png",
    description: "Single-ingredient dehydrated chicken strips—nothing else.",
    ingredients: ["Chicken breast"],
    type: 'standard'
  },
  {
    id: 5,
    name: "Peanut Butter Bacon Doughnuts",
    price: 2.0,
    image: "/public/pb-bacon-doughnut.png",
    description: "Dog-safe doughnut rings with peanut-butter glaze and bacon sprinkles.",
    ingredients: ["Brown-rice flour", "Peanut butter", "Bacon bits", "Honey", "Egg"],
    type: 'standard'
  },
  {
    id: 6,
    name: "Cinnamon Bun with Cream-Cheese Icing",
    price: 2.0,
    image: "/public/cinnamon-bun.png",
    description: "Soft cinnamon swirl bun finished with light cream-cheese frosting.",
    ingredients: ["Oat flour", "Pumpkin purée", "Cinnamon", "Cream cheese", "Egg"],
    type: 'standard'
  },
  {
    id: 7,
    name: "Apple Puppy Pretzel",
    price: 2.0,
    image: "/public/apple-pretzel.png",
    description: "Chewy pretzel twist flavored with apple and a hint of honey.",
    ingredients: ["Whole-wheat flour", "Apple", "Honey", "Egg"],
    type: 'standard'
  },
  {
    id: 8,
    name: "Pup Box (6-Pack)",
    price: 6.0,
    image: "/public/pupbox.png",
    description: "Customizable box of any six treats—mix & match your pup’s favorites.",
    ingredients: [],
    type: 'pupbox'
  }
];
