
import React from 'react';
import { Apartment } from '../types';

interface PropertyModalProps {
  apartment: Apartment | null;
  onClose: () => void;
  onInquiry?: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ apartment, onClose, onInquiry }) => {
  if (!apartment) return null;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-slate-900/90 backdrop-blur-xl">
      {/* Modal Container */}
      <div className="relative w-full max-w-7xl h-full md:h-[92vh] bg-white md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in slide-in-from-bottom-8 duration-500">
        
        {/* Close Button (Floating) */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[60] p-3 bg-white/90 rounded-full hover:bg-white transition-all shadow-xl active:scale-90 hover:rotate-90 group"
        >
          <svg className="w-6 h-6 text-slate-800 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Gallery Section (Left - Scrollable) */}
        <div className="w-full md:w-[65%] h-[40vh] md:h-full overflow-y-auto bg-slate-50 space-y-2 p-2 scrollbar-hide snap-y snap-mandatory">
          {apartment.images.map((img, idx) => (
            <div key={idx} className="w-full overflow-hidden snap-start">
              <img 
                src={img} 
                alt={`${apartment.name} gallery ${idx + 1}`} 
                onError={handleImageError}
                className="w-full h-auto object-cover hover:brightness-105 transition-all duration-1000" 
              />
            </div>
          ))}
          <div className="h-32 flex items-center justify-center text-slate-300 text-xs uppercase tracking-[0.5em] font-bold">
            End of Experience
          </div>
        </div>

        {/* Info Section (Right - Sticky scroll) */}
        <div className="w-full md:w-[35%] h-[60vh] md:h-full overflow-y-auto bg-white p-8 md:p-14 flex flex-col">
          <div className="flex-1">
            <span className="text-[11px] font-bold text-blue-500 tracking-[0.4em] uppercase block mb-4">{apartment.location}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-none">{apartment.name}</h2>
            <p className="text-slate-500 serif italic mt-6 text-2xl leading-relaxed">{apartment.tagline}</p>

            <div className="flex justify-between py-10 border-y border-slate-100 my-10">
              <div className="text-left">
                <p className="text-3xl font-bold text-slate-900">{apartment.bedrooms}</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Bedrooms</p>
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-slate-900">{apartment.bathrooms}</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Bathrooms</p>
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-slate-900">{apartment.sqft}</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">m² Space</p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-4">The Residence</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {apartment.description}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-6">Features & Comfort</h4>
                <div className="grid grid-cols-1 gap-y-4">
                  {apartment.amenities.map(amenity => (
                    <div key={amenity} className="flex items-center gap-4 text-sm text-slate-600 group">
                      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Footer */}
          <div className="pt-12 mt-12 border-t border-slate-100 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Starting from</p>
                <p className="text-4xl font-bold text-slate-900 tracking-tight">{apartment.price}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 justify-end text-green-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-[10px] uppercase font-bold tracking-widest">Available</p>
                </div>
                <p className="text-sm font-medium text-slate-500">Direct booking</p>
              </div>
            </div>
            <button 
              onClick={onInquiry}
              className="w-full bg-slate-900 text-white py-6 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200 active:scale-95 transform hover:-translate-y-1"
            >
              Inquire with Elena
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
