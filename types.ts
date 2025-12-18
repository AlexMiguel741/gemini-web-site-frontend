
export interface Apartment {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  location: string;
  amenities: string[];
  images: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
