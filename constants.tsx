
import { MenuItem, GalleryImage, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Classic Sodas
  { 
    id: 'c1', 
    name: 'Lemon Fizz', 
    description: 'Tangy fresh lemon with sparkling water and a hint of mint.', 
    price: 120, 
    category: 'Classic Sodas', 
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'c2', 
    name: 'Orange Burst', 
    description: 'Zesty orange soda with real pulp and carbonated freshness.', 
    price: 150, 
    category: 'Classic Sodas', 
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'c3', 
    name: 'Cola Nepali', 
    description: 'Spiced craft cola with cardamom and cinnamon undertones.', 
    price: 130, 
    category: 'Classic Sodas', 
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'c4', 
    name: 'Ginger Ale', 
    description: 'Fiery ginger root infusion for a refreshing mountain kick.', 
    price: 140, 
    category: 'Classic Sodas', 
    image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&q=80&w=600' 
  },
  
  // Fruit Infusions
  { 
    id: 'f1', 
    name: 'Mango Madness', 
    description: 'Sweet Alphonso mango from Chitwan, tropical and effervescent.', 
    price: 180, 
    category: 'Fruit Infusions', 
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'f2', 
    name: 'Pineapple Punch', 
    description: 'Juicy pineapple with a dash of chili for a subtle Nepali heat.', 
    price: 160, 
    category: 'Fruit Infusions', 
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'f3', 
    name: 'Rhododendron Rose', 
    description: 'Floral rhododendron syrup with rose essence, subtly sweet.', 
    price: 200, 
    category: 'Fruit Infusions', 
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'f4', 
    name: 'Apple Himalayan', 
    description: 'Crisp apple from Mustang region, lightly carbonated.', 
    price: 170, 
    category: 'Fruit Infusions', 
    image: 'https://images.unsplash.com/photo-1576673442511-7e39b7aefc90?auto=format&fit=crop&q=80&w=600' 
  },

  // Specialty Blends
  { 
    id: 's1', 
    name: 'Herbal High', 
    description: 'Mix of Himalayan herbs like timur and tulsi, in bubbly soda form.', 
    price: 190, 
    category: 'Specialty Blends', 
    image: 'https://images.unsplash.com/photo-1595981267035-23c4cf5c3f4e?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 's2', 
    name: 'Creamy Lassi Fizz', 
    description: 'Yogurt-based soda with a frothy, effervescent twist.', 
    price: 220, 
    category: 'Specialty Blends', 
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 's3', 
    name: 'Spice Storm', 
    description: 'Cumin and coriander spiced soda, inspired by Nepali masalas.', 
    price: 150, 
    category: 'Specialty Blends', 
    image: 'https://images.unsplash.com/photo-1563223552-30d01fda3ea6?auto=format&fit=crop&q=80&w=600' 
  },

  // Snacks
  { 
    id: 'sn1', 
    name: 'Popcorn', 
    description: 'Freshly popped with a special Himalayan masala seasoning.', 
    price: 100, 
    category: 'Snacks & Add-Ons', 
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80&w=600' 
  },
  { 
    id: 'sn2', 
    name: 'Fruit Salad', 
    description: 'Fresh seasonal fruits to complement your fizzy selection.', 
    price: 150, 
    category: 'Snacks & Add-Ons', 
    image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&q=80&w=600' 
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', caption: 'Artisan Cafe Vibes', prompt: 'A cozy modern soda shop interior' },
  { id: 2, url: 'https://images.unsplash.com/photo-1540339832862-4745998078ef?auto=format&fit=crop&q=80&w=800', caption: 'Himalayan Peaks', prompt: 'Snowy mountains of Nepal' },
  { id: 3, url: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800', caption: 'Kathmandu Street Life', prompt: 'Bustling Kathmandu street scene' },
  { id: 4, url: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=800', caption: 'Fresh Citrus Prep', prompt: 'Fresh lemons and oranges for soda' },
  { id: 5, url: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=800', caption: 'The Perfect Pour', prompt: 'Soda being poured into a glass with bubbles' },
  { id: 6, url: 'https://images.unsplash.com/photo-1563223552-30d01fda3ea6?auto=format&fit=crop&q=80&w=800', caption: 'Amber Spice Blend', prompt: 'A glass of amber colored spiced soda' },
  { id: 7, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', caption: 'Evening in Thamel', prompt: 'Cozy shop lights at night' },
  { id: 8, url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800', caption: 'Natural Ingredients', prompt: 'Fresh herbs and botanicals' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, text: "The mango fizz is a game-changer! Never had anything like it in Pokhara.", author: "Suman G. - Pokhara" },
  { id: 2, text: "Fizz Himalaya combines my favorite spices with the perfect amount of carbonation. A must-visit in Kathmandu!", author: "Elena R. - Traveller" },
  { id: 3, text: "The Rhododendron Rose is so refreshing. It tastes like the mountains in a glass.", author: "Maya P. - Local Resident" },
];
