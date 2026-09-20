import React from 'react';
import { HERO_BURGER_IMAGE } from '../data/menuData';
import { ArrowDown, Flame, Star, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
  onExploreMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onExploreMenuClick }) => {
  return (
    <section id="hero" className="relative bg-[#540b0e] pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* Background Subtle Radial Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-12 grid md:grid-cols-2 items-center gap-10 md:gap-12 relative z-10">
        {/* Left Column: Bold Editorial Typography */}
        <div className="order-2 md:order-1 flex flex-col items-start">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#320003]/80 border border-[#ffddb4]/30 text-[#ffddb4] px-3.5 py-1.5 rounded-full text-xs font-body font-bold uppercase tracking-wider mb-6">
            <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
            <span>Smash Burgers • Addis Ababa, Ethiopia</span>
          </div>

          <h1 className="font-anton text-6xl sm:text-7xl md:text-8xl lg:text-[130px] text-white leading-[0.88] uppercase tracking-tight -ml-0.5 md:-ml-2">
            DESIGN<br />
            BEYOND<br />
            LIMITS.
          </h1>

          <p className="font-anton text-2xl sm:text-3xl lg:text-4xl text-[#ffddb4] mt-6 md:mt-8 max-w-lg leading-tight uppercase tracking-wide">
            WHERE EVERY BITE HITS DIFFERENT
          </p>

          <p className="font-body text-sm sm:text-base text-white/80 mt-4 max-w-md leading-relaxed">
            Crafted with A5 Japanese Wagyu blend, 30-day fermented garlic pickles, and hand-brushed brioche baked fresh every morning.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              onClick={onOrderClick}
              className="bg-[#ffddb4] text-[#291800] hover:bg-white px-8 py-4 rounded-full font-anton text-lg tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-3 group"
            >
              <span>ORDER ONLINE NOW</span>
              <span className="w-2 h-2 rounded-full bg-[#320003] group-hover:scale-150 transition-transform" />
            </button>

            <button
              onClick={onExploreMenuClick}
              className="border-2 border-white/20 hover:border-[#ffddb4] text-white hover:text-[#ffddb4] px-6 py-3.5 rounded-full font-body font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2"
            >
              <span>VIEW CRAVINGS</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-6 mt-10 pt-6 border-t border-white/10 w-full max-w-md">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#ffddb4] text-[#ffddb4]" />
              ))}
            </div>
            <div className="text-xs font-body text-white/80">
              <span className="font-bold text-white">4.9/5 Rating</span> • Over 10,000+ Gourmet Burgers Served
            </div>
          </div>
        </div>

        {/* Right Column: Floating Double Cheeseburger */}
        <div className="order-1 md:order-2 flex justify-center items-center relative">
          <div className="relative w-full max-w-md lg:max-w-lg aspect-square burger-float">
            {/* Glow Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ffddb4]/20 to-transparent rounded-full blur-3xl -z-10" />

            <img
              src={HERO_BURGER_IMAGE}
              alt="Gourmet SAR Double Cheeseburger"
              className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] select-none hover:scale-105 transition-transform duration-500 cursor-pointer"
              onClick={onOrderClick}
            />

            {/* Floating Price Tag Badge (450 ETB Best Seller) */}
            <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-4 bg-[#ffddb4] text-[#291800] p-4 sm:p-6 rounded-full w-28 h-28 sm:w-36 sm:h-36 flex flex-col items-center justify-center rotate-12 shadow-2xl border-4 border-[#320003] hover:rotate-0 transition-transform duration-300">
              <span className="font-anton text-2xl sm:text-3xl text-[#320003] leading-none">450 ETB</span>
              <span className="font-body text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#320003] mt-1">
                Best Seller
              </span>
            </div>

            {/* Quality Sticker */}
            <div className="absolute top-4 left-2 bg-[#320003]/90 text-white backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-[11px] font-body font-bold uppercase flex items-center gap-1.5 shadow-xl">
              <ShieldCheck className="w-4 h-4 text-[#ffddb4]" />
              <span>Fresh Prime Beef</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
