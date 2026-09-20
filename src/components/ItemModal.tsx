import React, { useState } from 'react';
import { MenuItem, CustomizationOption } from '../types';
import { X, Plus, Minus, Check, Star, Sparkles, Flame } from 'lucide-react';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    quantity: number,
    selectedOptions: {
      patty?: CustomizationOption;
      cheese?: CustomizationOption;
      sauce?: CustomizationOption;
      bun?: CustomizationOption;
    },
    specialInstructions: string
  ) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedPatty, setSelectedPatty] = useState<CustomizationOption | undefined>(undefined);
  const [selectedCheese, setSelectedCheese] = useState<CustomizationOption | undefined>(undefined);
  const [selectedSauce, setSelectedSauce] = useState<CustomizationOption | undefined>(undefined);
  const [selectedBun, setSelectedBun] = useState<CustomizationOption | undefined>(
    item.customizations?.bunType?.[0]
  );
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Calculate price
  const basePrice = item.price;
  const extraPattyPrice = selectedPatty?.price || 0;
  const extraCheesePrice = selectedCheese?.price || 0;
  const saucePrice = selectedSauce?.price || 0;
  const bunPrice = selectedBun?.price || 0;

  const unitPrice = basePrice + extraPattyPrice + extraCheesePrice + saucePrice + bunPrice;
  const totalPrice = unitPrice * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddToCart(
      item,
      quantity,
      {
        patty: selectedPatty,
        cheese: selectedCheese,
        sauce: selectedSauce,
        bun: selectedBun,
      },
      specialInstructions
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#f6faf6] text-[#181d1b] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#320003]/10 relative my-8 animate-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col max-h-[85vh]">
          {/* Header Image Header */}
          <div className="relative h-64 sm:h-72 bg-[#540b0e] flex items-center justify-center p-6 shrink-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />
            <img
              src={item.image}
              alt={item.name}
              className="max-h-full max-w-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)] z-10"
            />
            {item.isBestSeller && (
              <span className="absolute bottom-4 left-4 bg-[#ffddb4] text-[#291800] text-xs font-anton uppercase tracking-widest px-3 py-1 rounded-full shadow-lg z-10 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Best Seller
              </span>
            )}
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-anton text-3xl sm:text-4xl text-[#320003] uppercase">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-anton text-2xl text-[#540b0e]">
                      {item.price.toLocaleString()} ETB
                    </span>
                    <span className="text-xs font-body text-[#554241] flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#320003] text-[#320003]" /> {item.rating} ({item.reviewsCount} reviews)
                    </span>
                    <span className="text-xs font-body text-[#554241]">• {item.calories} Calories</span>
                  </div>
                </div>
              </div>
              <p className="font-body text-sm text-[#554241] mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Ingredients Tags */}
            <div>
              <span className="font-body text-xs font-bold uppercase tracking-wider text-[#320003] block mb-2">
                Ingredients Included:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="bg-[#eadfc6]/50 text-[#320003] text-xs font-body px-2.5 py-1 rounded-md border border-[#320003]/10"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Customization Options */}
            {item.customizations && (
              <div className="space-y-5 border-t border-[#320003]/10 pt-5">
                {/* Extra Patties */}
                {item.customizations.extraPatties && item.customizations.extraPatties.length > 0 && (
                  <div>
                    <label className="font-body text-xs font-bold uppercase tracking-wider text-[#320003] block mb-2">
                      Extra Beef Patty
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedPatty(undefined)}
                        className={`p-3 rounded-xl border text-left text-xs font-body font-bold flex justify-between items-center transition-all ${
                          selectedPatty === undefined
                            ? 'border-[#320003] bg-[#320003] text-white shadow-md'
                            : 'border-[#320003]/20 bg-white text-[#181d1b]'
                        }`}
                      >
                        <span>Standard Patty</span>
                        <span>+0 ETB</span>
                      </button>
                      {item.customizations.extraPatties.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setSelectedPatty(p)}
                          className={`p-3 rounded-xl border text-left text-xs font-body font-bold flex justify-between items-center transition-all ${
                            selectedPatty?.id === p.id
                              ? 'border-[#320003] bg-[#320003] text-white shadow-md'
                              : 'border-[#320003]/20 bg-white text-[#181d1b]'
                          }`}
                        >
                          <span>{p.name}</span>
                          <span>+{p.price} ETB</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Extra Cheese */}
                {item.customizations.extraCheese && item.customizations.extraCheese.length > 0 && (
                  <div>
                    <label className="font-body text-xs font-bold uppercase tracking-wider text-[#320003] block mb-2">
                      Extra Cheese
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedCheese(undefined)}
                        className={`p-3 rounded-xl border text-left text-xs font-body font-bold flex justify-between items-center transition-all ${
                          selectedCheese === undefined
                            ? 'border-[#320003] bg-[#320003] text-white shadow-md'
                            : 'border-[#320003]/20 bg-white text-[#181d1b]'
                        }`}
                      >
                        <span>No Extra Cheese</span>
                        <span>+0 ETB</span>
                      </button>
                      {item.customizations.extraCheese.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedCheese(c)}
                          className={`p-3 rounded-xl border text-left text-xs font-body font-bold flex justify-between items-center transition-all ${
                            selectedCheese?.id === c.id
                              ? 'border-[#320003] bg-[#320003] text-white shadow-md'
                              : 'border-[#320003]/20 bg-white text-[#181d1b]'
                          }`}
                        >
                          <span>{c.name}</span>
                          <span>+{c.price} ETB</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sauces */}
                {item.customizations.sauces && item.customizations.sauces.length > 0 && (
                  <div>
                    <label className="font-body text-xs font-bold uppercase tracking-wider text-[#320003] block mb-2">
                      Special Drizzle & Sauce
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedSauce(undefined)}
                        className={`p-3 rounded-xl border text-left text-xs font-body font-bold flex justify-between items-center transition-all ${
                          selectedSauce === undefined
                            ? 'border-[#320003] bg-[#320003] text-white shadow-md'
                            : 'border-[#320003]/20 bg-white text-[#181d1b]'
                        }`}
                      >
                        <span>Standard Drizzle</span>
                        <span>+0 ETB</span>
                      </button>
                      {item.customizations.sauces.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedSauce(s)}
                          className={`p-3 rounded-xl border text-left text-xs font-body font-bold flex justify-between items-center transition-all ${
                            selectedSauce?.id === s.id
                              ? 'border-[#320003] bg-[#320003] text-white shadow-md'
                              : 'border-[#320003]/20 bg-white text-[#181d1b]'
                          }`}
                        >
                          <span>{s.name}</span>
                          <span>+{s.price} ETB</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Special Instructions Input */}
            <div>
              <label className="font-body text-xs font-bold uppercase tracking-wider text-[#320003] block mb-2">
                Chef Instructions / Allergies:
              </label>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="e.g., Extra crispy fries, sauce on the side, no raw onions..."
                rows={2}
                className="w-full bg-white border border-[#320003]/20 rounded-xl p-3 text-xs font-body text-[#181d1b] focus:outline-none focus:border-[#320003]"
              />
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="p-6 bg-[#eadfc6]/40 border-t border-[#320003]/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            {/* Quantity Selector */}
            <div className="flex items-center gap-3 bg-white border border-[#320003]/20 rounded-full px-4 py-2">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-[#320003] hover:scale-125 transition-transform"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-anton text-lg text-[#320003] w-6 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="text-[#320003] hover:scale-125 transition-transform"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Submit Add To Order Button */}
            <button
              type="submit"
              className="w-full sm:w-auto flex-1 bg-[#320003] hover:bg-[#540b0e] text-[#ffddb4] py-3.5 px-8 rounded-full font-anton text-lg uppercase tracking-wider transition-all duration-200 shadow-xl flex items-center justify-between gap-4"
            >
              <span>ADD TO ORDER</span>
              <span className="text-white text-xl">{totalPrice.toLocaleString()} ETB</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
