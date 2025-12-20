
import { Apartment, SiteConfig, StoryContent, HeroContent, Translations } from './types';

export const SITE_CONFIG: SiteConfig = {
  name: 'Il Blu di Laveno',
  hostName: 'Elena',
  whatsapp: '393331234567',
  email: 'info@ilbludilaveno.it',
  locationLabel: {
    it: 'Laveno-Mombello, Lago Maggiore',
    en: 'Laveno-Mombello, Lake Maggiore',
    de: 'Laveno-Mombello, Lago Maggiore'
  },
  homeMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.786523178229!2d8.618451812543328!3d45.90883652697193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867373f1d8212d%3A0xc06720138406f52!2sVia%20Labiena%2C%2021014%20Laveno-Mombello%20VA!5e0!3m2!1sit!2sit!4v1711111111111"
};

export const HERO_SECTION: HeroContent = {
  subtitle: { it: 'Vivere il Blu del Lago', en: 'Living the Lake Blue', de: 'Leben im Blau des Sees' },
  title1: { it: 'Soggiorni d\'Elite', en: 'Elite Stays', de: 'Elite-Aufenthalte' },
  title2: { it: 'a Laveno.', en: 'in Laveno.', de: 'in Laveno.' },
  description: { 
    it: 'Quattro residenze esclusive nel cuore pulsante di Laveno-Mombello. A pochi passi dal Lago Maggiore e dai traghetti per le Isole Borromee.', 
    en: 'Four exclusive residences in the heart of Laveno-Mombello. Just steps from Lake Maggiore and the Borromean Islands ferries.', 
    de: 'Vier exklusive Residenzen im Herzen von Laveno-Mombello. Nur wenige Schritte vom Lago Maggiore und den Fähren zu den Borromäischen Inseln entfernt.' 
  },
  buttonLabel: { it: 'Vedi Disponibilità', en: 'Check Availability', de: 'Verfügbarkeit prüfen' }
};

export const APARTMENTS: Apartment[] = [
  {
    id: 'azure-terrace-suite',
    name: { it: 'Azure Terrace Suite', en: 'Azure Terrace Suite', de: 'Azure Terrace Suite' },
    tagline: { it: 'Luce, Colore e Vista Panoramica', en: 'Light, Color and Panoramic View', de: 'Licht, Farbe und Panoramablick' },
    location: 'Laveno Centro',
    price: 115, // Inserire solo l'intero (Euro)
    bedrooms: 1,
    bathrooms: 1,
    sqft: 65,
    icalUrl: '',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.786!2d8.618!3d45.908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47867373f1d8212d%3A0xc06720138406f52!2sLaveno!5e0!3m2!1sit!2sit!4v1711111111111',
    images: [
      './img/azure/01_panorama.jpg',       // Foto 3
      './img/azure/02_cablecar.jpg',       // Foto 2
      './img/azure/03_bedroom_art.jpg',    // Foto 6
      './img/azure/04_living_sofa.jpg',    // Foto 1
      './img/azure/05_kitchen_corner.jpg', // Foto 10
      './img/azure/06_bathroom_blue.jpg',  // Foto 7
      './img/azure/07_towels_detail.jpg',  // Foto 8
      './img/azure/08_kitchen_front.jpg',  // Foto 11
      './img/azure/09_wardrobe_wood.jpg',  // Foto 4
      './img/azure/10_bedroom_prosp.jpg',  // Foto 9
      './img/azure/11_entrance_hall.jpg',  // Foto 5
      './img/azure/12_mirror_hall.jpg'     // Foto 12
    ],
    description: { 
      it: 'Situato nel cuore pulsante di Laveno, questo appartamento incanta con i suoi colori mediterranei. La camera da letto principale accoglie gli ospiti con un suggestivo richiamo artistico classico, mentre la cucina moderna offre ogni comfort.', 
      en: 'Located in the vibrant heart of Laveno, this apartment enchants with its Mediterranean colors. The main bedroom welcomes guests with a suggestive classic artistic touch, while the modern kitchen offers every comfort.', 
      de: 'Im pulsierenden Herzen von Laveno gelegen, besticht dieses Apartment durch seine mediterranen Farben. Das Hauptschlafzimmer empfängt die Gäste con un suggestivo richiamo artistico classico.' 
    },
    amenities: {
      it: ['Wi-Fi Fibra', 'Cucina Completa', 'Climatizzazione', 'Vicinanza Porto', 'Smart TV'],
      en: ['Fiber Wi-Fi', 'Full Kitchen', 'AC', 'Harbor Proximity', 'Smart TV'],
      de: ['Glasfaser-WLAN', 'Vollküche', 'Klimaanlage', 'Hafennähe', 'Smart TV']
    }
  },
  {
    id: 'sapphire-studio-loft',
    name: { it: 'Sapphire Studio Loft', en: 'Sapphire Studio Loft', de: 'Sapphire Studio Loft' },
    tagline: { it: 'Eleganza Compatta Fronte Porto', en: 'Compact Elegance Waterfront', de: 'Kompakte Eleganz am Wasser' },
    location: 'Fronte Porto',
    price: 95,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 45,
    images: ['./img/sapphire/01.jpg', './img/sapphire/02.jpg'],
    description: { it: 'Design raffinato per coppie.', en: 'Refined design for couples.', de: 'Raffiniertes Design per coppie.' },
    amenities: { it: ['Self Check-in'], en: ['Self Check-in'], de: ['Self Check-in'] }
  },
  {
    id: 'cobalt-family-home',
    name: { it: 'Cobalt Family Home', en: 'Cobalt Family Home', de: 'Cobalt Family Home' },
    tagline: { it: 'Spazio per tutta la famiglia', en: 'Space for the whole family', de: 'Platz für die ganze Familie' },
    location: 'Zona Stazione',
    price: 140,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 90,
    images: ['./img/cobalt/01.jpg'],
    description: { it: 'Ideale per famiglie.', en: 'Ideal for families.', de: 'Ideal für Familien.' },
    amenities: { it: ['2 Bagni'], en: ['2 Bathrooms'], de: ['2 Badezimmer'] }
  },
  {
    id: 'navy-garden-retreat',
    name: { it: 'Navy Garden Retreat', en: 'Navy Garden Retreat', de: 'Navy Garden Retreat' },
    tagline: { it: 'Relax nel verde a Cerro', en: 'Relax in the green in Cerro', de: 'Entspannung im Grünen' },
    location: 'Cerro di Laveno',
    price: 130,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 55,
    images: ['./img/navy/01.jpg'],
    description: { it: 'Giardino privato vicino alla spiaggia.', en: 'Private garden near the beach.', de: 'Privater Garten am Strand.' },
    amenities: { it: ['Giardino'], en: ['Garden'], de: ['Garten'] }
  }
];

export const UI_LABELS: Translations = {
  nav_residences: { it: 'Appartamenti', en: 'Apartments', de: 'Ferienwohnungen' },
  nav_history: { it: 'Il Concept', en: 'The Concept', de: 'Das Konzept' },
  nav_contact: { it: 'Prenota Ora', en: 'Book Now', de: 'Jetzt Buchen' },
  houses_title: { it: 'Le Nostre Dimore', en: 'Our Residences', de: 'Unsere Residenzen' },
  houses_subtitle: { it: 'Eleganza e comfort a due passi dal porto.', en: 'Elegance and comfort steps away from the harbor.', de: 'Eleganz und Komfort nur wenige Schritte vom Hafen entfernt.' },
  price_from: { it: 'da', en: 'from', de: 'ab' },
  price_night: { it: '/ notte', en: '/ night', de: '/ Nacht' },
  exclusive_label: { it: 'Design Moderno', en: 'Modern Design', de: 'Modernes Design' },
  bedrooms: { it: 'Camere', en: 'Bedrooms', de: 'Schlafzimmer' },
  bathrooms: { it: 'Bagni', en: 'Bathrooms', de: 'Badezimmer' },
  living_space: { it: 'mq', en: 'sqm', de: 'qm' },
  experience_title: { it: 'Dettagli e Comfort', en: 'Details & Comfort', de: 'Details & Komfort' },
  amenities_title: { it: 'Dotazioni inclusi', en: 'Included Amenities', de: 'Inklusive Ausstattung' },
  availability_title: { it: 'Calendario Disponibilità', en: 'Availability Calendar', de: 'Belegungsplan' },
  neighborhood_title: { it: 'Dove Siamo', en: 'Where we are', de: 'Standort' },
  direct_only: { it: 'Tariffa Diretta', en: 'Direct Rate', de: 'Direktpreis' },
  best_rate: { it: 'Miglior Prezzo', en: 'Best Price', de: 'Bestpreis' },
  save_msg: { it: 'Prenotando qui risparmi il costo del portale.', en: 'By booking here you save the service fees.', de: 'Hier buchen und Servicegebühren sparen.' },
  whatsapp_resp: { it: 'Risposta Rapida', en: 'Quick Reply', de: 'Schnelle Antwort' },
  concierge_service: { it: 'Assistenza Personalizzata', en: 'Personal Assistance', de: 'Persönliche Assistenz' },
  cta_btn: { it: 'Verifica con Elena', en: 'Check with Elena', de: 'Anfrage bei Elena' },
  host_status: { it: 'Host Professionista', en: 'Pro Host', de: 'Profi-Gastgeber' },
  host_online: { it: 'disponibile', en: 'online', de: 'erreichbar' },
  back: { it: 'Indietro', en: 'Back', de: 'Zurück' },
  sync_live: { it: 'Sincronizzazione...', en: 'Syncing...', de: 'Synchronisierung...' },
  sync_connected: { it: 'Live Calendar', en: 'Live Calendar', de: 'Live-Kalender' },
  available: { it: 'Libero', en: 'Available', de: 'Frei' },
  booked: { it: 'Occupato', en: 'Booked', de: 'Belegt' },
  last_sync: { it: 'Aggiornato', en: 'Updated', de: 'Aktualisiert' },
  chat_welcome: { it: "Benvenuti al Blu di Laveno! Sono Elena, il vostro concierge. Come posso aiutarvi?", en: "Welcome to Il Blu di Laveno! I'm Elena, your concierge. How can I help you today?", de: "Willkommen im Il Blu di Laveno! Ich bin Elena. Wie kann ich Ihnen helfen?" },
  contact_human: { it: "Parla con Elena", en: "Talk to Elena", de: "Kontakt con Elena" },
  contact_desc: { it: "Per prenotazioni dirette, gruppi o soggiorni lunghi, contattami direttamente su WhatsApp.", en: "For direct bookings, groups, or long stays, contact me directly via WhatsApp.", de: "Für Direktbuchungen, Gruppen oder Langzeitaufenthalte kontaktieren Sie mich direttamente per WhatsApp." }
};

export const STORY_CONTENT: StoryContent = {
  title: { it: 'Il Concept "Blu".', en: 'The "Blu" Concept.', de: 'Das "Blu" Konzept.' },
  quote: { it: '"L\'accoglienza è un\'arte che si tinge dei colori del lago."', en: '"Hospitality is an art colored by the lake shades."', de: '"Gastfreundschaft ist eine Form der Kunst in den Farben des Sees."' },
  paragraphs: {
    it: [
      'Il Blu di Laveno nasce dal desiderio di offrire un soggiorno che unisca la modernità del design alla tranquillità del Lago Maggiore.',
      'Ogni dettaglio è stato pensato per farvi sentire a casa, con il lusso di una posizione imbattibile nel cuore di Laveno.'
    ],
    en: [
      'Il Blu di Laveno was born from the desire to offer a stay combining modern design with the tranquility of Lake Maggiore.',
      'Every detail is designed to make you feel at home, with the luxury of an unbeatable location in the heart of Laveno.'
    ],
    de: [
      'Il Blu di Laveno entstand aus dem Wunsch, einen Aufenthalt zu bieten, der modernes Design mit der Ruhe des Lago Maggiore verbindet.',
      'Jedes Detail ist darauf ausgelegt, dass Sie sich wie zu Hause fühlen, gepaart mit dem Luxus einer unschlagbaren Lage.'
    ]
  },
  image: './img/story_cover.jpg'
};
