import React, { useState } from 'react';
import { DISCOUNT_CODES } from '../data/menuData';
import { X, Tag, Copy, Check, Sparkles, Percent } from 'lucide-react';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPromoCode: (code: string) => void;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({
  isOpen,
  onClose,
  onApplyPromoCode,
}) => {
  if (!isOpen) return null;

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#f6faf6] text-[#181d1b] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#320003]/20 relative my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#320003] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[#ffddb4] font-body text-xs font-bold uppercase tracking-widest block mb-1">
            Exclusive Perks & Promos
          </span>
          <h3 className="font-anton text-3xl uppercase tracking-tight text-white flex items-center gap-2">
            <Percent className="w-7 h-7 text-[#ffddb4]" /> SPECIAL DISCOUNTS
          </h3>
        </div>

        <div className="p-6 space-y-4">
          <p className="font-body text-xs text-[#554241]">
            Apply any active promo code below directly to your order bag during checkout.
          </p>

          <div className="space-y-3">
            {DISCOUNT_CODES.map((disc) => (
              <div
                key={disc.code}
                className="bg-white border-2 border-[#320003]/15 hover:border-[#320003] rounded-2xl p-5 shadow-sm transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-anton text-lg text-[#320003] tracking-wide">
                      {disc.code}
                    </span>
                    <span className="bg-[#ffddb4] text-[#291800] text-[10px] font-body font-bold uppercase px-2 py-0.5 rounded-full">
                      {disc.discountPercentage}% OFF
                    </span>
                  </div>
                  <h4 className="font-body font-bold text-xs text-[#540b0e]">{disc.title}</h4>
                  <p className="font-body text-xs text-[#554241] mt-1">{disc.description}</p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleCopy(disc.code)}
                    className="flex-1 sm:flex-initial bg-[#eadfc6] hover:bg-[#320003] text-[#320003] hover:text-white p-2.5 rounded-xl font-body text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                    title="Copy code"
                  >
                    {copiedCode === disc.code ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> Copy
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      onApplyPromoCode(disc.code);
                      onClose();
                    }}
                    className="flex-1 sm:flex-initial bg-[#320003] text-[#ffddb4] hover:bg-[#540b0e] px-4 py-2.5 rounded-xl font-body text-xs font-bold uppercase transition-all"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
