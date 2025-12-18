
import { Apartment } from './types';

/**
 * HOSTING TIP:
 * To use your own photos, create an 'images' folder in your project.
 * Example structure:
 * /images/vista-lago/1.jpg
 * /images/vista-lago/2.jpg
 * 
 * The code below is set to look for local files first, 
 * then fall back to high-quality placeholders if local files aren't found.
 */

export const APARTMENTS: Apartment[] = [
  {
    id: 'vista-lago-suite',
    name: 'Vista Lago Suite',
    tagline: 'Morning coffee with a view of the Borromean Gulf',
    description: 'A bright and airy second-floor suite situated directly on the Laveno promenade. The highlight is the private balcony overlooking the shimmering waters of Lake Maggiore, where you can watch the ferries glide across to Verbania. Ideally located for those who want to be in the heart of the action.',
    price: 'From €125/night',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 55,
    location: 'Piazza Fontana, Laveno',
    amenities: ['Private Lake-View Balcony', 'Nespresso Coffee Bar', 'High-Speed WiFi', 'Air Conditioning', 'King Size Bed', 'Blackout Curtains'],
    images: [
      'images/vista-lago/1.jpg',
      'images/vista-lago/2.jpg',
      'images/vista-lago/3.jpg',
      'images/vista-lago/4.jpg',
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'borghetto-mombello',
    name: 'Il Borghetto',
    tagline: 'Quiet luxury in a historic stone hamlet',
    description: 'Tucked away in the charming narrow streets of old Mombello, this renovated apartment preserves the original 18th-century stone walls. It features a private entrance through a shared courtyard filled with jasmine and lemon trees. A true escape for those seeking peace and authenticity.',
    price: 'From €98/night',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 75,
    location: 'Mombello Antico',
    amenities: ['Exposed Stone Walls', 'Secluded Courtyard', 'Full Kitchen', 'Self Check-in', 'Antique Furniture', 'Organic Linens'],
    images: [
      'images/borghetto/1.jpg',
      'images/borghetto/2.jpg',
      'images/borghetto/3.jpg',
      'images/borghetto/4.jpg',
      'https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'cableway-loft',
    name: 'Sasso del Ferro Loft',
    tagline: 'Modern design at the foot of the mountain',
    description: 'A contemporary loft located just 200 meters from the famous Laveno bucket-cable car. With high ceilings and large windows, it offers stunning views of the Sasso del Ferro mountain. Perfect for active travelers who want to hit the trails at sunrise.',
    price: 'From €145/night',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 90,
    location: 'Via per Casere, Laveno',
    amenities: ['Mountain View Terrace', 'Dedicated Workspace', 'Underground Parking', 'Laundry Facilities', 'Smart TV', 'Rain Shower'],
    images: [
      'images/cableway/1.jpg',
      'images/cableway/2.jpg',
      'images/cableway/3.jpg',
      'images/cableway/4.jpg',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1536376074432-ad71745afc9b?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'garden-hideaway',
    name: 'The MIDeC Garden',
    tagline: 'A lush oasis near the Ceramics Museum',
    description: 'Named after the nearby International Ceramic Design Museum, this ground-floor sanctuary features a 40m² private garden. It’s a quiet corner of Laveno where you can dine alfresco surrounded by hydrangeas and camellias, typical of the Lake Maggiore climate.',
    price: 'From €115/night',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 60,
    location: 'Cerro di Laveno',
    amenities: ['Private Garden', 'Outdoor Dining Set', 'Complimentary Bikes', 'Quiet Neighborhood', 'Sun Loungers', 'Hammock'],
    images: [
      'images/garden/1.jpg',
      'images/garden/2.jpg',
      'images/garden/3.jpg',
      'images/garden/4.jpg',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];
