
import React, { useState, useEffect } from 'react';
import { APARTMENTS, SITE_CONFIG, STORY_CONTENT, HERO_SECTION, UI_LABELS } from './constants';
import { Apartment, Language } from './types';
import ApartmentCard from './components/ApartmentCard';
import AIChatConcierge from './components/AIChatConcierge';
import { fetchAndParseIcal, BookedRange } from './services/icalService';

type View = 'home' | 'story' | 'property';

const SmartImage: React.FC<{ src?: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const fallback = 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200';
  const [currentSrc, setCurrentSrc] = useState(src || fallback);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src || fallback);
    setHasError(false);
  }, [src]);

  return (
    <img 
      src={hasError ? fallback : currentSrc} 
      alt={alt} 
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

const AvailabilityCalendar: React.FC<{ apartment: Apartment; lang: Language }> = ({ apartment, lang }) => {
  const [viewDate, setViewDate] = useState(new Date());
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState(new Date());
  const [realBookings, setRealBookings] = useState<BookedRange[]>([]);

  useEffect(() => {
    const sync = async () => {
      if (!apartment.icalUrl) return;
      setIsSyncing(true);
      const bookings = await fetchAndParseIcal(apartment.icalUrl);
      setRealBookings(bookings);
      setLastSync(new Date());
      setIsSyncing(false);
    };
    sync();
  }, [apartment.id, apartment.icalUrl]);

  const monthName = viewDate.toLocaleString(lang, { month: 'long' });
  const year = viewDate.getFullYear();
  const daysInMonth = new Date(year, viewDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, viewDate.getMonth(), 1).getDay();

  const isDayBooked = (day: number) => {
    const checkDate = new Date(year, viewDate.getMonth(), day);
    return realBookings.some(range => checkDate >= range.start && checkDate < range.end);
  };

  return (
    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-6 sm:p-12 shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h4 className="font-bold text-slate-900 text-3xl tracking-tight capitalize">{monthName} {year}</h4>
          <div className="flex items-center gap-2 mt-2">
            <div className={`w-2 h-2 rounded-full ${isSyncing ? 'bg-orange-400 animate-pulse' : 'bg-emerald-500'}`}></div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
              {isSyncing ? UI_LABELS.sync_live[lang] : UI_LABELS.sync_connected[lang]}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setViewDate(new Date(year, viewDate.getMonth() - 1, 1))} className="p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth={2}/></svg>
          </button>
          <button onClick={() => setViewDate(new Date(year, viewDate.getMonth() + 1, 1))} className="p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2}/></svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className="text-center text-[10px] font-bold text-slate-300 py-2">{d}</div>)}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={i}></div>)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const booked = isDayBooked(day);
          return (
            <div key={day} className={`aspect-square flex items-center justify-center rounded-xl text-sm font-bold border ${booked ? 'bg-slate-50 text-slate-200 border-transparent' : 'bg-white text-slate-700 border-slate-50 shadow-sm'}`}>
              {day}
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex gap-6 pt-6 border-t border-slate-50">
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-blue-500"></div><span className="text-[10px] uppercase font-bold text-slate-400">{UI_LABELS.available[lang]}</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-slate-100"></div><span className="text-[10px] uppercase font-bold text-slate-400">{UI_LABELS.booked[lang]}</span></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [selectedAptId, setSelectedAptId] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>('it');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const selectedApartment = APARTMENTS.find(a => a.id === selectedAptId);

  const navigateTo = (newView: View, id?: string, anchor?: string) => {
    setView(newView);
    setSelectedAptId(id || null);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
    if (anchor) {
      setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  const LanguageSwitcher = () => (
    <div className="flex items-center bg-slate-100 rounded-2xl p-1 border border-slate-200 shadow-sm">
      {(['it', 'en', 'de'] as Language[]).map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-bold uppercase transition-all ${lang === l ? 'bg-white text-blue-600 shadow-md scale-105' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <img src={`https://flagcdn.com/w40/${l === 'en' ? 'gb' : l}.png`} alt={l} className="w-4 h-auto rounded-sm border border-slate-100" />
          <span className="hidden xs:inline">{l}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 h-20 sm:h-28 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <div onClick={() => navigateTo('home')} className="cursor-pointer group">
            <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">{SITE_CONFIG.name}</span>
          </div>
          <nav className="hidden md:flex gap-10 items-center text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <LanguageSwitcher />
            <button onClick={() => navigateTo('home', undefined, 'stays')} className="hover:text-slate-900">{UI_LABELS.nav_residences[lang]}</button>
            <button onClick={() => navigateTo('story')} className="hover:text-slate-900">{UI_LABELS.nav_history[lang]}</button>
            <button onClick={() => navigateTo('home', undefined, 'contact')} className="bg-slate-900 text-white px-8 py-3 rounded-xl hover:bg-blue-600 shadow-lg">{UI_LABELS.nav_contact[lang]}</button>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-slate-50 rounded-lg"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg></button>
          </div>
        </div>
      </header>

      {view === 'home' && (
        <>
          <section className="relative py-20 sm:py-40 px-6 lake-gradient text-center">
            <div className="max-w-4xl mx-auto">
              <span className="text-blue-600 font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">{HERO_SECTION.subtitle[lang]}</span>
              <h1 className="text-5xl sm:text-8xl font-bold text-slate-900 mb-10 tracking-tighter leading-tight">
                {HERO_SECTION.title1[lang]} <br />
                <span className="serif italic font-normal text-blue-600">{HERO_SECTION.title2[lang]}</span>
              </h1>
              <p className="text-lg sm:text-2xl text-slate-500 mb-12 font-light">{HERO_SECTION.description[lang]}</p>
              <button onClick={() => navigateTo('home', undefined, 'stays')} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-blue-600 shadow-xl transition-all">
                {HERO_SECTION.buttonLabel[lang]}
              </button>
            </div>
          </section>

          <section id="stays" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-28">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">{UI_LABELS.houses_title[lang]}</h2>
              <p className="text-slate-400 serif italic text-xl">{UI_LABELS.houses_subtitle[lang]}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
              {APARTMENTS.map(apt => <ApartmentCard key={apt.id} apartment={apt} lang={lang} onSelect={a => navigateTo('property', a.id)} />)}
            </div>
          </section>

          <section id="contact" className="py-32 bg-slate-900 text-white text-center scroll-mt-28">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-4xl sm:text-7xl font-bold mb-8 tracking-tighter">{UI_LABELS.contact_human[lang]}</h2>
              <p className="text-slate-400 text-lg sm:text-xl mb-12 font-light">{UI_LABELS.contact_desc[lang]}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`mailto:${SITE_CONFIG.email}`} className="bg-blue-600 px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-blue-500 transition-all">Email {SITE_CONFIG.hostName}</a>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} className="bg-emerald-600 px-8 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 transition-all">WhatsApp</a>
              </div>
            </div>
          </section>
        </>
      )}

      {view === 'property' && selectedApartment && (
        <div className="animate-in fade-in duration-500 bg-white">
          <section className="px-6 py-10 bg-slate-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 h-[70vh]">
              <SmartImage src={selectedApartment.images[0]} alt="" className="w-full h-full object-cover rounded-3xl shadow-xl" />
              <div className="grid grid-rows-2 gap-6">
                <SmartImage src={selectedApartment.images[1]} alt="" className="w-full h-full object-cover rounded-3xl shadow-lg" />
                <SmartImage src={selectedApartment.images[2]} alt="" className="w-full h-full object-cover rounded-3xl shadow-lg" />
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tighter">{selectedApartment.name[lang]}</h1>
              <p className="text-2xl serif italic text-slate-400 mb-10">{selectedApartment.tagline[lang]}</p>
              <div className="flex gap-10 py-10 border-y border-slate-100 my-10">
                <div className="flex flex-col"><span className="text-3xl font-bold">{selectedApartment.bedrooms}</span><span className="text-[10px] uppercase font-bold text-slate-400">{UI_LABELS.bedrooms[lang]}</span></div>
                <div className="flex flex-col"><span className="text-3xl font-bold">{selectedApartment.bathrooms}</span><span className="text-[10px] uppercase font-bold text-slate-400">{UI_LABELS.bathrooms[lang]}</span></div>
                <div className="flex flex-col"><span className="text-3xl font-bold">{selectedApartment.sqft}</span><span className="text-[10px] uppercase font-bold text-slate-400">{UI_LABELS.living_space[lang]}</span></div>
              </div>
              <div className="prose prose-xl text-slate-600 mb-20">{selectedApartment.description[lang]}</div>
              <AvailabilityCalendar apartment={selectedApartment} lang={lang} />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl">
                <span className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">{UI_LABELS.direct_only[lang]}</span>
                <p className="text-4xl font-bold my-4">{selectedApartment.price}</p>
                <p className="text-xs opacity-60 mb-8">{UI_LABELS.save_msg[lang]}</p>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Interessato a ${selectedApartment.name[lang]}`} className="block w-full bg-blue-600 py-6 rounded-2xl text-center font-bold uppercase tracking-widest text-sm hover:bg-blue-500 transition-all">{UI_LABELS.cta_btn[lang]}</a>
              </div>
            </div>
          </section>
        </div>
      )}

      {view === 'story' && (
        <section className="py-24 px-6 max-w-4xl mx-auto text-center animate-in fade-in duration-1000">
          <h1 className="text-5xl sm:text-8xl font-bold mb-16 tracking-tighter leading-none">{STORY_CONTENT.title[lang]}</h1>
          <p className="text-3xl serif italic text-slate-900 mb-16">{STORY_CONTENT.quote[lang]}</p>
          <div className="prose prose-xl text-slate-500 space-y-10 text-left">
            {STORY_CONTENT.paragraphs[lang].map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>
      )}

      <footer className="py-20 border-t border-slate-50 text-center">
        <p className="text-2xl font-bold tracking-tighter mb-4">{SITE_CONFIG.name}</p>
        <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">© 2024 • {SITE_CONFIG.locationLabel[lang]}</p>
      </footer>

      <AIChatConcierge lang={lang} />
    </div>
  );
};

export default App;
