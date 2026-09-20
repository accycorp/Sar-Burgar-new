import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ArrowUp,
  Instagram,
  Facebook,
  Clock,
  Gift,
  Tag,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react';
import { LOCATION_DETAILS } from '../data/menuData';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenGiftCard: () => void;
  onOpenDiscount: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToSection,
  onOpenGiftCard,
  onOpenDiscount,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#540b0e] border-t border-white/10 text-white relative overflow-hidden pt-16 pb-10">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffddb4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#da716c]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Large Watermark Brand Text */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full text-center opacity-5">
        <span className="font-anton text-[12vw] leading-none uppercase text-white tracking-widest whitespace-nowrap">
          SAR BURGER ADDIS
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-12 relative z-10">


        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand Info & Social Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ffddb4] text-[#291800] flex items-center justify-center font-anton text-xl shadow-lg">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <span className="font-anton text-2xl text-white uppercase tracking-wider block">
                  SAR BURGER
                </span>
                <span className="text-[10px] text-[#ffddb4] uppercase tracking-widest font-mono">
                  Flagship Kitchen · Addis Ababa
                </span>
              </div>
            </div>

            <p className="font-body text-sm text-white/80 leading-relaxed max-w-sm">
              Hand-pressed 100% prime beef smash burgers, artisan brioche buns, and house-made signature sauces crafted fresh daily in the heart of Addis Ababa.
            </p>

            <div className="pt-2">
              <p className="font-anton text-xs text-[#ffddb4] uppercase tracking-widest mb-3">
                Follow The Flavor
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 hover:border-[#ffddb4] flex items-center justify-center text-white/80 hover:text-[#ffddb4] hover:scale-105 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 hover:border-[#ffddb4] flex items-center justify-center text-white/80 hover:text-[#ffddb4] hover:scale-105 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 hover:border-[#ffddb4] flex items-center justify-center text-white/80 hover:text-[#ffddb4] hover:scale-105 transition-all duration-300 font-bold text-xs"
                  aria-label="TikTok"
                >
                  <span className="font-mono">TT</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-anton text-lg text-[#ffddb4] uppercase mb-5 tracking-wider flex items-center gap-2">
              <span>Explore Menu</span>
            </h4>
            <ul className="space-y-3 font-body text-sm">
              {[
                { name: 'All Products', section: 'menu' },
                { name: 'Smash Burgers', section: 'menu' },
                { name: 'Loaded Fries & Sides', section: 'menu' },
                { name: 'Craft Drinks & Shakes', section: 'menu' },
                { name: 'Daily Specials', section: 'menu' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigateToSection(item.section)}
                    className="text-white/80 hover:text-[#ffddb4] transition-colors duration-200 text-left flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffddb4] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div className="lg:col-span-3">
            <h4 className="font-anton text-lg text-[#ffddb4] uppercase mb-5 tracking-wider">
              About & Experience
            </h4>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <button
                  onClick={() => onNavigateToSection('about')}
                  className="text-white/80 hover:text-[#ffddb4] transition-colors duration-200 text-left flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffddb4] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>The SAR Burger Story</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('about')}
                  className="text-white/80 hover:text-[#ffddb4] transition-colors duration-200 text-left flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffddb4] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Our Culinary Philosophy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection('about')}
                  className="text-white/80 hover:text-[#ffddb4] transition-colors duration-200 text-left flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffddb4] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Guest Reviews & Press</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGiftCard}
                  className="text-white/80 hover:text-[#ffddb4] transition-colors duration-200 text-left flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffddb4] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Affiliate & Catering Program</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Hours Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-anton text-lg text-[#ffddb4] uppercase mb-5 tracking-wider">
              Flagship Kitchen
            </h4>
            
            <div className="space-y-3 font-body text-xs text-white/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ffddb4] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">{LOCATION_DETAILS.address}</p>
                  <p className="text-white/60 text-[11px]">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ffddb4] shrink-0" />
                <p className="font-medium text-white">{LOCATION_DETAILS.phone}</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ffddb4] shrink-0" />
                <p className="font-medium text-white">{LOCATION_DETAILS.email}</p>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#ffddb4] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-[11px] uppercase">Kitchen Operating Hours</p>
                  <p className="text-white/70 text-[11px]">Sun–Thu: 11:00 AM – 10:30 PM</p>
                  <p className="text-white/70 text-[11px]">Fri–Sat: 11:00 AM – 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body">
          <div className="flex items-center gap-6 text-white/70">
            <button onClick={onOpenDiscount} className="hover:text-[#ffddb4] transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenDiscount} className="hover:text-[#ffddb4] transition-colors">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={onOpenDiscount} className="hover:text-[#ffddb4] transition-colors">
              Cookie Preferences
            </button>
          </div>

          <p className="text-white/80 font-medium text-center">
            SAR BURGER ADDIS ABABA © {new Date().getFullYear()} · ALL RIGHTS RESERVED
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/40 border border-white/20 hover:border-[#ffddb4] text-white hover:text-[#ffddb4] font-bold text-xs uppercase tracking-wider transition-all duration-300 group shadow-md"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

