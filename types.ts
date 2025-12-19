
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Classic Sodas' | 'Fruit Infusions' | 'Specialty Blends' | 'Snacks & Add-Ons';
  image: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
  prompt: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
}
