import React, { useState } from 'react';
import { ArrowUpRight, Grid, X, Eye, Flame, ShieldCheck } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';

interface LookMenuBentoProps {
  onOrderOnline: (itemId: string) => void;
}

export const LookMenuBento: React.FC<LookMenuBentoProps> = ({ onOrderOnline }) => {
  const [lookbookOpen, setLookbookOpen] = useState(false);

  const friesItem = MENU_ITEMS.find((i) => i.id === 'french-fries') || MENU_ITEMS[0];
  const chickenItem = MENU_ITEMS.find((i) => i.id === 'philly-cheese-steak') || MENU_ITEMS[1];

  return (
    <section id="look-menu" className="py-20 md:py-28 bg-[#540b0e] text-white relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="flex justify-between items-baseline mb-12">
          <div className="flex items-center gap-4">
            <h2 className="font-anton text-5xl md:text-6xl uppercase tracking-tight">LOOK MENU</h2>
            <button
              onClick={() => setLookbookOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-[#ffddb4] text-xs font-body font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-white/15 transition-all"
            >
              <Grid className="w-4 h-4" /> View Full 32 Lookbook Catalog
            </button>
          </div>
          <span className="font-anton text-6xl md:text-8xl text-outline opacity-40 select-none">32</span>
        </div>

        {/* Bento Grid (2 Large Showcase Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bento Card 1: Fries */}
          <div className="relative h-[500px] sm:h-[580px] group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-cover bg-center"
              style={{
                backgroundImage: `url('${friesItem.image}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-6 sm:left-8 right-6">
              <div className="bg-black/80 backdrop-blur-md p-6 sm:p-8 rounded-xl max-w-sm border border-white/15 shadow-2xl">
                <span className="text-[#ffddb4] font-body text-[10px] font-bold uppercase tracking-widest block mb-2">
                  Signature Side • Look #08
                </span>
                <h3 className="font-anton text-2xl sm:text-3xl text-white mb-4 leading-none uppercase">
                  SALT & VINEGAR FRENCH FRIES
                </h3>
                <button
                  onClick={() => onOrderOnline(friesItem.id)}
                  className="font-body text-xs font-bold text-[#ffddb4] hover:text-white uppercase border-b-2 border-[#ffddb4] hover:border-white pb-1 inline-flex items-center gap-2 transition-all group/btn"
                >
                  <span>ORDER ONLINE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Chicken Sandwich */}
          <div className="relative h-[500px] sm:h-[580px] group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-cover bg-center"
              style={{
                backgroundImage: `url('${chickenItem.image}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-6 sm:left-8 right-6">
              <div className="bg-black/80 backdrop-blur-md p-6 sm:p-8 rounded-xl max-w-sm border border-white/15 shadow-2xl">
                <span className="text-[#ffddb4] font-body text-[10px] font-bold uppercase tracking-widest block mb-2">
                  Crispy Special • Look #14
                </span>
                <h3 className="font-anton text-2xl sm:text-3xl text-white mb-4 leading-none uppercase">
                  CRISPY CHICKEN SANDWICH
                </h3>
                <button
                  onClick={() => onOrderOnline(chickenItem.id)}
                  className="font-body text-xs font-bold text-[#ffddb4] hover:text-white uppercase border-b-2 border-[#ffddb4] hover:border-white pb-1 inline-flex items-center gap-2 transition-all group/btn"
                >
                  <span>ORDER ONLINE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Lookbook Link */}
        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={() => setLookbookOpen(true)}
            className="w-full bg-[#ffddb4] text-[#291800] py-3 rounded-full font-anton text-sm uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Grid className="w-4 h-4" /> EXPLORE ALL 32 LOOKBOOK CRAVINGS
          </button>
        </div>
      </div>

      {/* Full 32 Lookbook Gallery Modal */}
      {lookbookOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#320003] text-white border border-white/20 rounded-2xl p-6 sm:p-10 max-w-5xl w-full my-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setLookbookOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-8">
              <span className="text-[#ffddb4] font-body text-xs font-bold uppercase tracking-widest">
                Culinary Lookbook Catalog
              </span>
              <h3 className="font-anton text-4xl text-white uppercase mt-1">32 SIGNATURE EDITIONS</h3>
              <p className="text-white/70 text-sm font-body mt-2">
                Every creation at SAR BURGER is systematically styled for visual perfection and explosive flavor balance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {MENU_ITEMS.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-[#540b0e] border border-white/10 rounded-xl p-4 flex flex-col items-center text-center group hover:border-[#ffddb4] transition-all"
                >
                  <span className="self-start text-[10px] font-anton text-[#ffddb4] bg-black/40 px-2 py-0.5 rounded">
                    #{(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 object-contain my-3 group-hover:scale-105 transition-transform"
                  />
                  <h4 className="font-anton text-lg text-white uppercase">{item.name}</h4>
                  <p className="font-anton text-sm text-[#ffddb4]">{item.price.toLocaleString()} ETB</p>
                  <button
                    onClick={() => {
                      setLookbookOpen(false);
                      onOrderOnline(item.id);
                    }}
                    className="mt-3 w-full bg-[#ffddb4] hover:bg-white text-[#291800] py-2 rounded-full font-body font-bold text-xs uppercase"
                  >
                    Order Look #{idx + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
