import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowUpRight, Menu as MenuIcon, X, MapPin, Calendar, Gift, Tag, Info } from 'lucide-react';
import { LOCATION_DETAILS } from '../data/menuData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAppointment: () => void;
  onOpenGiftCard: () => void;
  onOpenDiscount: () => void;
  onNavigateToSection: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenAppointment,
  onOpenGiftCard,
  onOpenDiscount,
  onNavigateToSection,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'menu', label: 'MENU', action: () => onNavigateToSection('menu') },
    { id: 'about', label: 'ABOUT', action: () => onNavigateToSection('about') },
    { id: 'gift-card', label: 'GIFT CARD', action: onOpenGiftCard },
    { id: 'discount', label: 'DISCOUNT', action: onOpenDiscount },
  ];

  return (
    <header
      id="top-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#320003]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/10'
          : 'bg-[#320003] py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigateToSection('hero')}
          className="group text-left focus:outline-none"
        >
          <span className="font-anton text-2xl md:text-3xl text-white uppercase tracking-tight group-hover:text-[#ffddb4] transition-colors">
            {LOCATION_DETAILS.brand}
          </span>
          <span className="hidden sm:inline-block ml-2 text-[10px] font-body text-[#ffddb4] tracking-widest uppercase opacity-80">
            • {LOCATION_DETAILS.subBrand}
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className={`font-body text-xs font-bold uppercase tracking-wider transition-all duration-200 relative py-1 ${
                activeSection === item.id
                  ? 'text-[#ffddb4] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ffddb4]'
                  : 'text-white/80 hover:text-white hover:scale-105'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Location Info (Desktop) */}
        <div className="hidden lg:flex flex-col text-white/70 text-[10px] font-body font-bold uppercase leading-tight text-right border-r border-white/15 pr-6 mr-2">
          <span className="text-[#ffddb4] flex items-center justify-end gap-1">
            <MapPin className="w-3 h-3 text-[#ffddb4]" /> {LOCATION_DETAILS.city}
          </span>
          <span>{LOCATION_DETAILS.address.split(',')[0]}</span>
          <span>{LOCATION_DETAILS.address.split(',').slice(1).join(',')}</span>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            className="relative bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all duration-200 active:scale-95 flex items-center justify-center border border-white/15"
            title="View Order Bag"
          >
            <ShoppingBag className="w-5 h-5 text-[#ffddb4]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ffddb4] text-[#291800] font-anton text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Book Appointment CTA Button */}
          <button
            onClick={onOpenAppointment}
            className="hidden sm:flex bg-white text-[#320003] hover:bg-[#ffddb4] px-5 py-2.5 rounded-full font-body font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 items-center gap-2 shadow-lg group"
          >
            <span>BOOK APPOINTMENT</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#ffddb4]" /> : <MenuIcon className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#320003] border-t border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }}
                className="text-left font-anton text-xl text-white hover:text-[#ffddb4] tracking-wide py-1 border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 text-xs font-body text-white/70 space-y-1">
            <p className="text-[#ffddb4] font-bold uppercase flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {LOCATION_DETAILS.address}
            </p>
            <p>Hours: Mon - Sat 11:00 AM - 11:00 PM</p>
          </div>

          <button
            onClick={() => {
              onOpenAppointment();
              setMobileMenuOpen(false);
            }}
            className="w-full bg-[#ffddb4] text-[#291800] py-3 rounded-full font-anton text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            BOOK APPOINTMENT
          </button>
        </div>
      )}
    </header>
  );
};
