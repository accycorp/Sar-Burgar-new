import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem, CategoryType } from '../types';
import { ChevronLeft, ChevronRight, Plus, Star, Sparkles, ShoppingBag } from 'lucide-react';

interface MenuGridProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAddToCart: (item: MenuItem) => void;
}

export const MenuGrid: React.FC<MenuGridProps> = ({ onSelectItem, onQuickAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [currentPage, setCurrentPage] = useState(0);

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Cravings' },
    { id: 'burgers', label: 'Beef Burgers' },
    { id: 'chicken', label: 'Chicken Burgers' },
    { id: 'sandwiches', label: 'Sandwiches' },
    { id: 'sides', label: 'Fries & Sides' },
    { id: 'drinks', label: 'Drinks' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#f6faf6] text-[#181d1b]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-6 border-b border-[#320003]/10 gap-6">
          <div>
            <span className="text-[#540b0e] font-body font-bold uppercase tracking-widest text-xs md:text-sm">
              Our Signature Cravings
            </span>
            <h2 className="font-anton text-5xl md:text-6xl text-[#320003] uppercase mt-1">MENU</h2>
          </div>

          {/* Navigation Controls & Pagination */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-body font-bold text-[#554241]">
              Showing {currentPage * itemsPerPage + 1}-
              {Math.min((currentPage + 1) * itemsPerPage, filteredItems.length)} of {filteredItems.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 border border-[#320003]/20 rounded-full flex items-center justify-center hover:bg-[#320003] hover:text-white transition-all duration-300 active:scale-95"
                title="Previous Page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 border border-[#320003]/20 rounded-full flex items-center justify-center hover:bg-[#320003] hover:text-white transition-all duration-300 active:scale-95"
                title="Next Page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage(0);
              }}
              className={`px-5 py-2.5 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#320003] text-white shadow-md scale-105'
                  : 'bg-[#eadfc6]/40 hover:bg-[#eadfc6] text-[#320003]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#eadfc6]/30 hover:bg-[#eadfc6]/60 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-[#320003]/5 relative overflow-hidden"
            >
              {/* Best Seller Badge */}
              {item.isBestSeller && (
                <div className="absolute top-4 left-4 bg-[#320003] text-[#ffddb4] text-[10px] font-body font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 text-[#ffddb4]" />
                  <span>Best Seller</span>
                </div>
              )}

              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-body font-bold text-[#320003]">
                <Star className="w-3.5 h-3.5 fill-[#320003] text-[#320003]" />
                <span>{item.rating}</span>
              </div>

              {/* Product Image */}
              <div
                onClick={() => onSelectItem(item)}
                className="h-48 sm:h-52 w-full my-4 flex items-center justify-center cursor-pointer transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain drop-shadow-md select-none"
                />
              </div>

              {/* Title */}
              <h3
                onClick={() => onSelectItem(item)}
                className="font-anton text-2xl md:text-3xl text-[#320003] mb-1 cursor-pointer hover:text-[#540b0e] transition-colors"
              >
                {item.name}
              </h3>

              {/* Price */}
              <p className="font-anton text-xl text-[#540b0e] mb-3">{item.price.toLocaleString()} ETB</p>

              {/* Description */}
              <p className="font-body text-sm text-[#554241] max-w-[240px] leading-relaxed mb-6 line-clamp-2">
                {item.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-auto flex items-center gap-3 w-full">
                <button
                  onClick={() => onSelectItem(item)}
                  className="flex-1 bg-white hover:bg-[#320003] text-[#320003] hover:text-white border border-[#320003]/20 py-2.5 px-4 rounded-full font-body font-bold text-xs uppercase tracking-wider transition-all duration-200"
                >
                  Customize
                </button>
                <button
                  onClick={() => onQuickAddToCart(item)}
                  className="bg-[#320003] hover:bg-[#540b0e] text-[#ffddb4] p-2.5 rounded-full transition-all duration-200 active:scale-95 shadow-md flex items-center justify-center"
                  title="Add directly to order"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
