import React, { useState } from 'react';
import { INGREDIENT_GALLERY } from '../data/menuData';
import { X, CheckCircle2, MapPin } from 'lucide-react';

interface CtaBannerProps {
  onGetStarted: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onGetStarted }) => {
  const [selectedIngredient, setSelectedIngredient] = useState<typeof INGREDIENT_GALLERY[0] | null>(null);

  const rotations = ['-rotate-3', 'rotate-6', '-rotate-2', 'rotate-3', '-rotate-6'];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#ffddb4] text-[#320003]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-12 relative z-10 text-center">
        {/* Giant Display Headline */}
        <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-[100px] leading-[0.92] uppercase mb-10 tracking-tight text-[#320003]">
          ORDER ONLINE OR<br />
          COME VISIT US TODAY
        </h2>

        {/* CTA Button */}
        <button
          onClick={onGetStarted}
          className="bg-[#201100] text-white hover:bg-[#320003] px-10 md:px-14 py-4 md:py-5 rounded-full font-anton text-2xl md:text-3xl hover:scale-105 transition-all duration-300 active:scale-95 shadow-2xl mb-16 border-2 border-black/10 inline-flex items-center gap-3 group"
        >
          <span>GET STARTED</span>
        </button>

        {/* Rotated 5 Ingredient Showcase Cards */}
        <div className="mb-4">
          <p className="font-body text-xs font-bold uppercase tracking-widest text-[#320003]/80 mb-6">
            Click Any Sourced Ingredient Below to Inspect Quality Standards
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {INGREDIENT_GALLERY.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedIngredient(item)}
                className={`aspect-square rounded-2xl overflow-hidden shadow-xl transform ${
                  rotations[idx % rotations.length]
                } hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer border-2 border-[#320003]/20 relative group bg-black/10`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end text-left">
                  <span className="font-anton text-xs text-[#ffddb4] uppercase leading-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ingredient Quality Inspection Modal */}
      {selectedIngredient && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#f6faf6] text-[#181d1b] border border-[#320003]/20 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="relative h-56">
              <img
                src={selectedIngredient.image}
                alt={selectedIngredient.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedIngredient(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center gap-1.5 bg-[#320003] text-[#ffddb4] text-[10px] font-body font-bold uppercase px-3 py-1 rounded-full mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verified Artisanal Sourcing
              </div>
              <h3 className="font-anton text-2xl text-[#320003] uppercase">{selectedIngredient.title}</h3>
              <p className="font-body font-bold text-xs text-[#540b0e] mb-3">{selectedIngredient.subtitle}</p>
              <p className="font-body text-sm text-[#554241] leading-relaxed mb-6">
                {selectedIngredient.description}
              </p>
              <button
                onClick={() => setSelectedIngredient(null)}
                className="w-full bg-[#320003] text-white py-3 rounded-full font-body font-bold text-xs uppercase"
              >
                Close Inspection
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
