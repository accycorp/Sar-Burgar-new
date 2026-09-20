import React, { useState } from 'react';
import { LOCATION_DETAILS } from '../data/menuData';
import { MapPin, Phone, Mail, Clock, Award, Star, Quote, Pause, Play, ChevronLeft, ChevronRight, ExternalLink, Navigation } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  publication: string;
  avatar: string;
  rating: number;
  badge: string;
  score: string;
}

const CRITIC_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "The crust-to-sauce harmony and double-smash sear technique here sets an entirely new benchmark for luxury fast-casual dining.",
    author: "Marcus Vance",
    role: "Senior Culinary Editor",
    publication: "Awwwards Culture & Food",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Awwwards Featured",
    score: "9.9/10"
  },
  {
    id: 't2',
    quote: "SAR Burger redefines what a smash burger can be. The custom truffle mayo and fluffy brioche bun are pure culinary architecture.",
    author: "Elena Rostova",
    role: "Lead Gastronomy Critic",
    publication: "Gourmet & Dining Journal",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Critic's Choice",
    score: "9.8/10"
  },
  {
    id: 't3',
    quote: "Hands down the highest-tier burger in East Africa. Fresh daily 5:00 AM prime beef grind ratio shines through in every single bite.",
    author: "Chef Yonas Tadesse",
    role: "Executive Director",
    publication: "Addis Culinary Guild",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Master Chef Gold",
    score: "10/10"
  },
  {
    id: 't4',
    quote: "An explosive flavor profile! The house special sauce is complex, rich, and unforgettable. Delivered piping hot in thermal boxes.",
    author: "Sarah Jenkins",
    role: "International Food Explorer",
    publication: "Global Palate Review",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Top Pick 2026",
    score: "9.9/10"
  },
  {
    id: 't5',
    quote: "Artisanal perfection. You can genuinely taste the difference in their house-pickled jalapenos and signature caramelized onions.",
    author: "Michael Kebede",
    role: "Food Columnist",
    publication: "Addis Gourmet Weekly",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Local Champion",
    score: "9.7/10"
  }
];

const CUSTOMER_TESTIMONIALS: Testimonial[] = [
  {
    id: 'c1',
    quote: "The thermal eco-packaging is magic. After 35 mins in traffic, the bun was perfectly fluffy and the cheese was ultra melty!",
    author: "Bethelhem M.",
    role: "Verified Orderer",
    publication: "Addis Ababa",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Thermal Hot Delivery",
    score: "5.0 ★"
  },
  {
    id: 'c2',
    quote: "Best smash crust I've had anywhere in the world. Crispy lace edges and juicy center. 10/10 recommend the SAR Special!",
    author: "Dawit Wolde",
    role: "Regular Guest",
    publication: "Bole Medhaniallem",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Double Smash Lover",
    score: "5.0 ★"
  },
  {
    id: 'c3',
    quote: "Their Salt & Vinegar loaded fries paired with the Smoky Truffle Mayo is an absolute cheat-meal dream.",
    author: "Selamawit A.",
    role: "Food Blogger",
    publication: "Tasty Addis",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Trending Foodie",
    score: "4.9 ★"
  },
  {
    id: 'c4',
    quote: "Fast service, insane presentation, and the custom gift cards make for the best gifts for burger fanatic friends!",
    author: "Henok Girma",
    role: "Loyal Member",
    publication: "Kazanchis",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "VIP Gourmet",
    score: "5.0 ★"
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-20 md:pt-28 pb-0 bg-[#320003] text-white overflow-hidden relative">
      {/* Background Subtle Gradient Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#da716c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#ffddb4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-12 relative z-10">
        {/* Awwwards Inspired Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl uppercase text-white tracking-wide leading-tight">
            PRAISED BY WORLD-CLASS <span className="text-[#ffddb4] underline decoration-[#ffddb4]/40 decoration-wavy">FOOD CRITICS</span>
          </h2>
          <p className="font-body text-sm md:text-base text-white/75 mt-3 max-w-xl mx-auto">
            Discover what top culinary publications, master chefs, and food critics say about our daily custom-ground smash burgers.
          </p>
        </div>
      </div>

      {/* Moving Marquee Container 1 (Left Direction) */}
      <div className="relative w-full overflow-hidden mb-6 py-2 group">
        {/* Left & Right Gradient Shadows for Seamless Fade Edge */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#320003] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#320003] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max animate-marquee pause-on-hover">
          {[...CRITIC_TESTIMONIALS, ...CRITIC_TESTIMONIALS].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[320px] sm:w-[380px] md:w-[440px] shrink-0 bg-[#540b0e]/80 backdrop-blur-md border border-white/15 hover:border-[#ffddb4] rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:scale-[1.02] shadow-2xl flex flex-col justify-between group/card hover:bg-[#630f13]"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-end mb-4">
                    <div className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                      <span className="text-xs font-bold text-[#ffddb4]">{item.score}</span>
                      <div className="flex text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-[#ffddb4]/20 absolute -top-3 -left-2 rotate-180" />
                    <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed pl-4 border-l-2 border-[#ffddb4]/40 italic">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/10 mt-auto">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#ffddb4]/50 shrink-0 shadow-md"
                  />
                  <div>
                    <h4 className="font-anton text-lg text-white uppercase tracking-wide group-hover/card:text-[#ffddb4] transition-colors">
                      {item.author}
                    </h4>
                    <p className="font-body text-xs text-white/70">
                      {item.role} · <span className="text-[#ffddb4] font-medium">{item.publication}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Moving Marquee Container 2 (Right / Reverse Direction) */}
      <div className="relative w-full overflow-hidden mb-16 py-2 group">
        {/* Left & Right Gradient Shadows */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#320003] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#320003] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max animate-marquee-reverse pause-on-hover">
          {[...CUSTOMER_TESTIMONIALS, ...CUSTOMER_TESTIMONIALS, ...CUSTOMER_TESTIMONIALS].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[300px] sm:w-[350px] md:w-[400px] shrink-0 bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#ffddb4] rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] shadow-xl flex flex-col justify-between group/card hover:bg-[#540b0e]/90"
              >
                <div>
                  <div className="flex items-center justify-end mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed italic mb-4">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-9 h-9 rounded-full object-cover border border-[#ffddb4]/40"
                  />
                  <div>
                    <h5 className="font-anton text-base text-white uppercase group-hover/card:text-[#ffddb4]">
                      {item.author}
                    </h5>
                    <p className="font-body text-[11px] text-white/60">
                      {item.role} · {item.publication}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Awwwards-Inspired Seamless Unified Location & Map Card */}
      <div className="w-full relative z-10 mt-12">
        <div className="border-t border-white/10 bg-[#540b0e] grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Panel: Compact Details */}
          <div className="lg:col-span-5 p-6 sm:p-10 md:p-12 lg:pl-16 xl:pl-24 2xl:pl-32 flex flex-col justify-between relative overflow-hidden bg-[#540b0e] min-h-[220px] md:min-h-[250px]">
            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffddb4]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-[#ffddb4]/30 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#ffddb4] uppercase tracking-wider">
                  <MapPin className="w-3 h-3 text-[#ffddb4]" />
                  <span>XQWR+Q9V · ADDIS ABABA</span>
                </div>
                <span className="text-[10px] text-white/50 font-mono hidden sm:inline">8.9968° N, 38.7886° E</span>
              </div>

              <h3 className="font-anton text-xl md:text-2xl text-white uppercase mb-3 tracking-wide">
                LOCATION & HOURS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 font-body text-xs text-white/90">
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#ffddb4] shrink-0" />
                  <span className="truncate font-bold text-white text-xs">{LOCATION_DETAILS.address}</span>
                </div>

                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                  <Phone className="w-3.5 h-3.5 text-[#ffddb4] shrink-0" />
                  <span className="truncate font-medium text-white text-xs">{LOCATION_DETAILS.phone}</span>
                </div>
              </div>

              {/* Operating Hours Inline Compact Pills */}
              <div className="mt-3 pt-2.5 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#ffddb4] uppercase tracking-wider mb-1.5">
                  <Clock className="w-3 h-3" />
                  <span>Hours: 11:00 AM – 10:30 PM (Sun-Thu) | 11:30 PM (Fri-Sat)</span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=XQWR%2BQ9V,+Addis+Ababa,+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#ffddb4] text-[#291800] hover:bg-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.005]"
            >
              <Navigation className="w-3.5 h-3.5 fill-current" />
              <span>Directions (Google Maps)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Right Panel: Seamless Embedded Map */}
          <div className="lg:col-span-7 relative bg-[#1a0002] min-h-[220px] md:min-h-[250px] lg:min-h-full flex flex-col justify-between group overflow-hidden">
            {/* Embedded Modern Google Map */}
            <iframe
              title="SAR Burger Flagship Map Location - XQWR+Q9V, Addis Ababa"
              src="https://maps.google.com/maps?q=XQWR%2BQ9V,+Addis+Ababa&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 opacity-100 transition-all duration-300 pointer-events-auto"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

