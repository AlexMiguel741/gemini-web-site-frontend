
import { Apartment, SiteConfig, StoryContent, HeroContent, Translations } from './types';

/**
 * 🛠️ CONFIGURAZIONE SITO
 * Gestisci qui i tuoi contatti e l'identità del brand
 */
export const SITE_CONFIG: SiteConfig = {
  name: 'Laveno Shores',
  hostName: 'Elena',
  whatsapp: '393331234567',
  email: 'info@lavenoshores.com',
  locationLabel: {
    it: 'Laveno-Mombello, Italia',
    en: 'Laveno-Mombello, Italy',
    de: 'Laveno-Mombello, Italien'
  }
};

/**
 * 🏠 CONTENUTO HOME PAGE (HERO)
 */
export const HERO_SECTION: HeroContent = {
  subtitle: { it: 'Esperienza Lago Maggiore', en: 'Experience Lake Maggiore', de: 'Erleben Sie den Lago Maggiore' },
  title1: { it: 'Soggiorni a Laveno', en: 'Laveno Stays', de: 'Aufenthalte in Laveno' },
  title2: { it: 'Ridefiniti.', en: 'Redefined.', de: 'Neu Definiert.' },
  description: { 
    it: 'Quattro residenze boutique selezionate con cura per il viaggiatore consapevole. Prenotazione diretta, zero commissioni.', 
    en: 'Four hand-picked boutique residences designed for the intentional traveler. Direct booking, zero fees.', 
    de: 'Vier handverlesene Boutique-Residenzen für den bewussten Reisenden. Direktbuchung, keine Gebühren.' 
  },
  buttonLabel: { it: 'Vedi le Residenze', en: 'View Residences', de: 'Residenzen ansehen' }
};

/**
 * 📚 TRADUZIONI UI / ETICHETTE
 */
export const UI_LABELS: Translations = {
  nav_residences: { it: 'Residenze', en: 'Residences', de: 'Residenzen' },
  nav_history: { it: 'Storia', en: 'History', de: 'Geschichte' },
  nav_contact: { it: 'Contatti', en: 'Contact', de: 'Kontakt' },
  houses_title: { it: 'Le Nostre Case', en: 'Our Houses', de: 'Unsere Häuser' },
  houses_subtitle: { it: 'Disponibilità in tempo reale. Cura personale.', en: 'Live availability. Personal care.', de: 'Live-Verfügbarkeit. Persönliche Betreuung.' },
  exclusive_label: { it: 'Residenza Esclusiva', en: 'Exclusive Residence', de: 'Exklusive Residenz' },
  bedrooms: { it: 'Camere', en: 'Bedrooms', de: 'Schlafzimmer' },
  bathrooms: { it: 'Bagni', en: 'Bathrooms', de: 'Badezimmer' },
  living_space: { it: 'm² Abitabili', en: 'm² Living', de: 'm² Wohnfläche' },
  experience_title: { it: 'L\'Esperienza', en: 'The Experience', de: 'Das Erlebnis' },
  amenities_title: { it: 'Servizi Inclusi', en: 'Included Amenities', de: 'Inklusive Leistungen' },
  availability_title: { it: 'Disponibilità', en: 'Availability', de: 'Verfügbarkeit' },
  neighborhood_title: { it: 'Il Quartiere', en: 'The Neighborhood', de: 'Die Nachbarschaft' },
  direct_only: { it: 'Solo Diretto', en: 'Direct Only', de: 'Nur Diretto' },
  best_rate: { it: 'Miglior Tariffa Garantita', en: 'Verified Best Rate', de: 'Garantierter Bestpreis' },
  save_msg: { it: 'Risparmia fino al 15% rispetto ai portali. Nessun costo di servizio nascosto.', en: 'Save up to 15% compared to major platforms. No hidden service fees.', de: 'Sparen Sie bis zu 15% gegenüber Portalen. Keine versteckten Gebühren.' },
  whatsapp_resp: { it: 'Risposta rapida WhatsApp', en: 'Fast WhatsApp Response', de: 'Schnelle WhatsApp Antwort' },
  concierge_service: { it: 'Servizio Concierge Locale', en: 'Local Concierge Service', de: 'Lokaler Concierge-Service' },
  cta_btn: { it: 'Invia Messaggio ora', en: 'Message Now', de: 'Jetzt kontaktieren' },
  host_status: { it: 'Stato Host', en: 'Host Status', de: 'Host-Status' },
  host_online: { it: 'è online', en: 'is Responsive', de: 'ist erreichbar' },
  back: { it: 'Indietro', en: 'Back', de: 'Zurück' },
  sync_live: { it: 'Sincronizzazione Live...', en: 'Synchronizing Live...', de: 'Live-Synchronisierung...' },
  sync_connected: { it: 'Collegato al Calendario', en: 'Connected to Calendar', de: 'Mit Kalender verbunden' },
  available: { it: 'Disponibile', en: 'Available', de: 'Verfügbar' },
  booked: { it: 'Prenotato Altrove', en: 'Booked Elsewhere', de: 'Anderswo gebucht' },
  last_sync: { it: 'Ultimo Aggiornamento', en: 'Last Sync', de: 'Letzte Synchronisierung' },
  chat_welcome: { it: "Ciao! Sono la tua host locale. Cerchi un posto dove stare?", en: "Hi! I'm your local host. Looking for a place to stay?", de: "Hallo! Ich bin Ihre Gastgeberin vor Ort. Suchen Sie eine Unterkunft?" },
  contact_human: { it: "L'Ospitalità è Umana.", en: "Hospitality is Human.", de: "Gastfreundschaft ist menschlich." },
  contact_desc: { it: "Evita i portali. Scrivici direttamente per una tariffa personalizzata.", en: "Avoid the platforms. Message us directly for a personalized rate.", de: "Vermeiden Sie die Portale. Kontaktieren Sie uns direttamente." }
};

/**
 * 📖 STORIA E FILOSOFIA
 */
export const STORY_CONTENT: StoryContent = {
  title: { it: 'Vita di Lago, Soggiorni di Classe.', en: 'Lake Life, Legacy Stays.', de: 'See-Leben, Erstklassige Aufenthalte.' },
  quote: { it: '"Offriamo una chiave per il nostro angolo preferito d\'Italia."', en: '"We offer a key to our favorite corner of Italy."', de: '"Wir bieten einen Schlüssel zu unserem Lieblingseck."' },
  paragraphs: {
    it: [
      'Laveno Shores è nata dalla passione per il restauro e la bellezza tranquilla del Lago Maggiore.',
      'Siamo orgogliosi di essere presenti per i nostri ospiti personalmente.'
    ],
    en: [
      'Laveno Shores was born from a passion for restoration and the quiet beauty of Lake Maggiore.',
      'We pride ourselves on being there for our guests personally.'
    ],
    de: [
      'Laveno Shores entstand aus der Leidenschaft für die Restaurierung am Lago Maggiore.',
      'Wir sind stolz darauf, persönlich für unsere Gäste da zu sein.'
    ]
  },
  image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200'
};

/**
 * 🏨 APPARTAMENTI
 */
export const APARTMENTS: Apartment[] = [
  {
    id: 'vista-lago-suite',
    name: { it: 'Vista Lago Suite', en: 'Vista Lago Suite', de: 'See-Panorama Suite' },
    tagline: { it: 'Caffè mattutino sul Golfo', en: 'Morning coffee on the Gulf', de: 'Morgendlicher Kaffee' },
    location: 'Piazza Fontana, Laveno',
    price: '€125/night',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 55,
    icalUrl: 'https://www.airbnb.com/calendar/ical/12345678.ics', 
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.832!2d8.618!3d45.908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867373f1d8212d%3A0xc06720138406f52!2sPiazza%20Fontana%2C%20Laveno-Mombello!5e0!3m2!1sen!2sit!4v1711111111111',
    images: [
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200'
    ],
    description: { it: 'Suite lussuosa con balcone privato.', en: 'Luxury suite with private balcony.', de: 'Luxus-Suite mit privatem Balkon.' },
    amenities: {
      it: ['Balcone Vista Lago', 'WiFi Alta Velocità', 'Aria Condizionata'],
      en: ['Lake-View Balcony', 'High-Speed WiFi', 'Air Conditioning'],
      de: ['Balkon mit Seeblick', 'Highspeed-WLAN', 'Klimaanlage']
    }
  },
  {
    id: 'borghetto-mombello',
    name: { it: 'Il Borghetto', en: 'Il Borghetto', de: 'Das kleine Dorf' },
    tagline: { it: 'Lusso storico in pietra', en: 'Historic stone luxury', de: 'Historischer Steinluxus' },
    location: 'Mombello Antico',
    price: '€98/night',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 75,
    icalUrl: 'https://admin.booking.com/hotel/hoteladmin/ical.html?t=87654321',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775.123!2d8.625!3d45.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867373f1d8212d%3A0xc06720138406f52!2sMombello%2C%2021014%20Laveno-Mombello!5e0!3m2!1sen!2sit!4v1711111111112',
    images: [
      'https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687940-c52af046397c?auto=format&fit=crop&q=80&w=1200'
    ],
    description: { it: 'Incantevole appartamento in pietra del XVIII secolo.', en: 'Charming 18th-century stone apartment.', de: 'Charmante Steinwohnung aus dem 18. Jhd.' },
    amenities: {
      it: ['Pareti in Pietra', 'Cortile Privato', 'Self Check-in'],
      en: ['Exposed Stone Walls', 'Secluded Courtyard', 'Self Check-in'],
      de: ['Steinwände', 'Innenhof', 'Self Check-in']
    }
  },
  {
    id: 'cableway-loft',
    name: { it: 'Sasso del Ferro Loft', en: 'Sasso del Ferro Loft', de: 'Berg-Loft Sasso' },
    tagline: { it: 'Design moderno montano', en: 'Modern mountain design', de: 'Modernes Bergdesign' },
    location: 'Via per Casere, Laveno',
    price: '€145/night',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 90,
    icalUrl: 'https://www.airbnb.com/calendar/ical/99998888.ics',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.555!2d8.615!3d45.910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867373f1d8212d%3A0xc06720138406f52!2sVia%20per%20Casere%2C%20Laveno!5e0!3m2!1sen!2sit!4v1711111111113',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1536376074432-ad71745afc9b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1200'
    ],
    description: { it: 'Loft contemporaneo vicino alla funivia.', en: 'Contemporary loft near the cableway.', de: 'Modernes Loft nahe der Seilbahn.' },
    amenities: {
      it: ['Vista Monte', 'Parcheggio Sotterraneo', 'Smart TV'],
      en: ['Mountain View', 'Underground Parking', 'Smart TV'],
      de: ['Bergblick', 'Tiefgarage', 'Smart TV']
    }
  },
  {
    id: 'garden-hideaway',
    name: { it: 'The MIDeC Garden', en: 'The MIDeC Garden', de: 'MIDeC Garten-Suite' },
    tagline: { it: 'Oasi lussureggiante', en: 'Lush oasis', de: 'Grüne Oase' },
    location: 'Cerro di Laveno',
    price: '€115/night',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 60,
    icalUrl: 'https://www.vrbo.com/ical/example.ics',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775.333!2d8.605!3d45.900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867373f1d8212d%3A0xc06720138406f52!2sCerro%2C%20Laveno-Mombello!5e0!3m2!1sen!2sit!4v1711111111114',
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200'
    ],
    description: { it: 'Giardino privato di 40mq.', en: '40sqm private garden.', de: '40qm Privatgarten.' },
    amenities: {
      it: ['Giardino Privato', 'Bici Gratuite', 'Amaca'],
      en: ['Private Garden', 'Free Bikes', 'Hammock'],
      de: ['Privatgarten', 'Gratis Fahrräder', 'Hängematte']
    }
  }
];
