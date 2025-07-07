export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  dogName: string;
}

export const testimonials: Testimonial[] = [
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
