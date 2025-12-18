
import React, { useState, useEffect } from 'react';
import { APARTMENTS } from './constants';
import { Apartment } from './types';
import ApartmentCard from './components/ApartmentCard';
import PropertyModal from './components/PropertyModal';
import AIChatConcierge from './components/AIChatConcierge';

type View = 'home' | 'story' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);

  // Handle smooth scrolling to anchors when navigating back to home
  const navigateTo = (newView: View, anchor?: string) => {
    setView(newView);
    if (anchor) {
      // Small timeout to allow the view to switch before scrolling
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleInquiryFromModal = () => {
    setSelectedApartment(null);
    navigateTo('home', 'contact');
  };

  const HomeView = () => (
    <>
      {/* Warm Hero */}
      <section className="relative py-20 lg:py-32 px-6 lake-gradient overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2000" 
            alt="Lake Maggiore Vista"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-blue-500 font-semibold tracking-widest uppercase text-[10px] mb-4 block">Boutique Lake Maggiore Stays</span>
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
            Experience the soul of <br />
            <span className="serif italic font-normal text-blue-600 tracking-tight">Laveno Mombello.</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Small, family-run residences for those who love authentic Italian lake life. 
            From the historic charm of Mombello to the vibrant Laveno lakeside.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigateTo('home', 'stays')}
              className="inline-block bg-slate-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse our 4 properties
            </button>
            <button 
              onClick={() => navigateTo('story')}
              className="inline-block bg-white border border-slate-200 text-slate-900 px-10 py-4 rounded-full font-semibold hover:border-slate-400 transition-all shadow-sm transform hover:-translate-y-1"
            >
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Apartment Grid */}
      <section id="stays" className="py-24 px-6 max-w-6xl mx-auto w-full scroll-mt-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Our Homes</h2>
          <p className="text-slate-500 serif italic text-lg">Independently managed, thoughtfully designed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {APARTMENTS.map(apt => (
            <ApartmentCard 
              key={apt.id} 
              apartment={apt} 
              onSelect={setSelectedApartment}
            />
          ))}
        </div>
      </section>

      {/* Local Guide Section */}
      <section id="location" className="py-24 bg-white border-y border-slate-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Living in Laveno</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Known as the "Port of Lake Maggiore," Laveno Mombello offers the perfect mix of mountain adventure and lakeside relaxation. Our apartments are strategically located so you can experience everything our town has to offer on foot.
              </p>
              <div className="space-y-6">
                {[
                  { title: "The 'Bucket' Cable Car", desc: "Take the iconic Funivia up to Sasso del Ferro for the most famous view in Northern Italy." },
                  { title: "MIDeC Museum", desc: "Discover Laveno's rich ceramic history at the museum in the beautiful Palazzo Perabò." },
                  { title: "Lake Ferries", desc: "Verbania, Stresa, and the Borromean Islands are just a 20-minute ferry ride away." }
                ].map(item => (
                  <div key={item.title} className="flex gap-5">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1558239027-63a566735398?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-80 w-full object-cover shadow-md" alt="Laveno Landscape" />
                <img src="https://images.unsplash.com/photo-151833153ec36-076135891e4b?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-48 w-full object-cover shadow-sm" alt="Italian Lake Life" />
              </div>
              <div className="pt-12 space-y-4">
                <img src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-56 w-full object-cover shadow-sm" alt="Lake Village" />
                <img src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&q=80&w=600" className="rounded-2xl h-72 w-full object-cover shadow-md" alt="Laveno Waters" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Contact */}
      <section id="contact" className="py-24 px-6 bg-[#fafafa] scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
             <span className="text-2xl font-bold text-blue-600">E</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Talk to Elena</h2>
          <p className="text-slate-600 mb-12 text-lg leading-relaxed">
            I personally handle every inquiry to ensure you have the best possible stay. 
            Send me a note with your preferred dates and apartment, and I'll get back to you within 24 hours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="mailto:elena@lavenoshores.com" className="bg-white border border-slate-200 px-8 py-5 rounded-2xl flex flex-col items-center gap-3 hover:border-blue-400 transition-all group">
              <div className="p-3 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="text-center">
                <p className="font-bold text-slate-900">Email Me</p>
                <p className="text-xs text-slate-400">elena@lavenoshores.com</p>
              </div>
            </a>
            {/* WhatsApp Link Fixed with real URL structure */}
            <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-5 rounded-2xl flex flex-col items-center gap-3 hover:bg-green-600 transition-all shadow-lg">
              <div className="p-3 bg-white/20 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </div>
              <div className="text-center">
                <p className="font-bold">WhatsApp</p>
                <p className="text-xs opacity-80">Quick Responses</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );

  const OurStoryView = () => (
    <div className="py-32 px-6 max-w-4xl mx-auto min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button onClick={() => navigateTo('home')} className="mb-8 flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest hover:text-blue-700 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Back to Home
      </button>
      <h1 className="text-5xl font-bold text-slate-900 mb-8">Our Story</h1>
      <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
        <p className="text-xl serif italic text-slate-800">Founded on the shores of Lake Maggiore in 2018, Laveno Shores is a family-run passion project.</p>
        <p>
          It all started with 'Il Borghetto', a family residence in old Mombello that had been in our family for three generations. After a careful renovation that preserved the original stone and spirit, we realized there was a lack of authentic, high-quality, personal hospitality in Laveno.
        </p>
        <p>
          We aren't a corporate agency. We are Elena, Marco, and our small local team. We live here, we eat at the local restaurants, and we take the same ferries you will take. Our mission is to provide more than just a bed; we want you to feel the rhythm of life in Laveno Mombello.
        </p>
        <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200" alt="Lake Maggiore Sunset" className="rounded-3xl shadow-xl my-12 w-full h-96 object-cover" />
        <p>
          Each of our 4 apartments was selected for its unique perspective of the area—be it the mountain trails, the historic center, or the shimmering lake promenade. We hope you find as much joy in these spaces as we do.
        </p>
      </div>
    </div>
  );

  const PrivacyView = () => (
    <div className="py-32 px-6 max-w-4xl mx-auto min-h-screen animate-in fade-in duration-500">
      <button onClick={() => navigateTo('home')} className="mb-8 flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest hover:text-blue-700">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Back to Home
      </button>
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-slate-600">
        <p>Your privacy is important to us. It is Laveno Shores' policy to respect your privacy regarding any information we may collect from you across our website.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-8">1. Information we collect</h2>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-8">2. Use of Information</h2>
        <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft.</p>
      </div>
    </div>
  );

  const TermsView = () => (
    <div className="py-32 px-6 max-w-4xl mx-auto min-h-screen animate-in fade-in duration-500">
      <button onClick={() => navigateTo('home')} className="mb-8 flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest hover:text-blue-700">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Back to Home
      </button>
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
      <div className="space-y-6 text-slate-600">
        <p>By accessing the website at Laveno Shores, you are agreeing to be bound by these terms of service.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-8">1. Booking & Inquiries</h2>
        <p>All bookings are managed personally. An inquiry does not constitute a confirmed booking. Bookings are only finalized once confirmed by Elena via official communication.</p>
        <h2 className="text-xl font-bold text-slate-900 mt-8">2. House Rules</h2>
        <p>We pride ourselves on our peaceful community. Guests are expected to respect local noise regulations and keep our properties in the condition they found them.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div onClick={() => navigateTo('home')} className="flex items-center gap-2 cursor-pointer group">
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">Laveno Shores</span>
          </div>
          <nav className="hidden sm:flex gap-8 text-sm font-medium text-slate-500">
            <button onClick={() => navigateTo('home', 'stays')} className="hover:text-slate-900 transition-colors">Our Stays</button>
            <button onClick={() => navigateTo('home', 'location')} className="hover:text-slate-900 transition-colors">Local Guide</button>
            <button onClick={() => navigateTo('home', 'contact')} className="hover:text-slate-900 transition-colors font-semibold text-blue-600">Contact Elena</button>
          </nav>
        </div>
      </header>

      {/* Main Content Router */}
      <main className="flex-1">
        {view === 'home' && <HomeView />}
        {view === 'story' && <OurStoryView />}
        {view === 'privacy' && <PrivacyView />}
        {view === 'terms' && <TermsView />}
      </main>

      {/* Simplified Footer */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <p onClick={() => navigateTo('home')} className="text-2xl font-bold text-slate-900 mb-1 cursor-pointer hover:text-blue-600 transition-colors">Laveno Shores</p>
              <p className="text-sm text-slate-400">Via Roma 12, Laveno Mombello (VA), Italia</p>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm font-medium text-slate-500">
              <button onClick={() => navigateTo('home', 'stays')} className="hover:text-slate-900 transition-colors">Apartments</button>
              <button onClick={() => navigateTo('home', 'location')} className="hover:text-slate-900 transition-colors">Location</button>
              <button onClick={() => navigateTo('story')} className="hover:text-slate-900 transition-colors">Our Story</button>
              <button onClick={() => navigateTo('home', 'contact')} className="hover:text-slate-900 transition-colors">Email Us</button>
              <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 text-green-600 font-semibold">WhatsApp</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-300 tracking-widest uppercase font-medium">
            <p>© 2024 Boutique Lake Stays</p>
            <div className="flex gap-6">
              <button onClick={() => navigateTo('privacy')} className="hover:text-slate-900 transition-colors">Privacy Policy</button>
              <button onClick={() => navigateTo('terms')} className="hover:text-slate-900 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Property Details Modal */}
      <PropertyModal 
        apartment={selectedApartment} 
        onClose={() => setSelectedApartment(null)} 
        onInquiry={handleInquiryFromModal}
      />

      {/* AI Concierge (Elena) */}
      <AIChatConcierge />
    </div>
  );
};

export default App;
