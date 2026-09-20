import React, { useState } from 'react';
import { GiftCardData } from '../types';
import { X, Gift, Sparkles, CheckCircle2 } from 'lucide-react';

interface GiftCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GiftCardModal: React.FC<GiftCardModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [amount, setAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('Enjoy SAR Burger smash burgers on me!');
  const [design, setDesign] = useState<'burgundy' | 'gold' | 'neon' | 'classic'>('burgundy');
  const [purchased, setPurchased] = useState(false);

  const activeAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientName || !recipientEmail || activeAmount <= 0) return;
    setPurchased(true);
  };

  const cardThemes = {
    burgundy: 'bg-[#320003] text-[#ffddb4] border-[#ffddb4]/30',
    gold: 'bg-[#ffddb4] text-[#291800] border-[#320003]/30',
    neon: 'bg-[#2c322f] text-green-400 border-green-400/40',
    classic: 'bg-[#540b0e] text-white border-white/20',
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#f6faf6] text-[#181d1b] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#320003]/20 relative my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#320003] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[#ffddb4] font-body text-xs font-bold uppercase tracking-widest block mb-1">
            Digital Gastronomy Pass
          </span>
          <h3 className="font-anton text-3xl uppercase tracking-tight text-white flex items-center gap-2">
            <Gift className="w-7 h-7 text-[#ffddb4]" /> GIFT CARD EXPERIENCE
          </h3>
        </div>

        {!purchased ? (
          <form onSubmit={handlePurchase} className="p-6 space-y-6">
            {/* Live Gift Card Preview */}
            <div
              className={`p-6 rounded-2xl border-2 shadow-2xl transition-all duration-300 relative overflow-hidden ${cardThemes[design]}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-anton text-xl uppercase tracking-wider block">SAR BURGER</span>
                  <span className="text-[10px] font-body uppercase tracking-widest opacity-80">
                    Artisanal Gift Card
                  </span>
                </div>
                <span className="font-anton text-3xl">{activeAmount.toLocaleString()} ETB</span>
              </div>

              <div className="mt-8 space-y-1 text-xs font-body opacity-90">
                <p>
                  <strong>For:</strong> {recipientName || 'Recipient Name'}
                </p>
                <p className="italic text-[11px] line-clamp-2">"{message}"</p>
                <p className="text-[10px] opacity-75 pt-2">From: {senderName || 'Your Name'}</p>
              </div>
            </div>

            {/* Design Selector */}
            <div>
              <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-2">
                Select Card Style
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['burgundy', 'gold', 'neon', 'classic'] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDesign(d)}
                    className={`py-2 px-1 rounded-xl text-center font-body text-[11px] font-bold uppercase border transition-all ${
                      design === d
                        ? 'border-[#320003] bg-[#320003] text-white shadow-md'
                        : 'border-[#320003]/20 bg-white text-[#181d1b]'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount Selector */}
            <div>
              <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-2">
                Choose Gift Amount
              </label>
              <div className="grid grid-cols-4 gap-2 mb-2">
                {[300, 500, 800, 1000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setAmount(amt);
                      setCustomAmount('');
                    }}
                    className={`py-2.5 rounded-xl font-anton text-base transition-all ${
                      amount === amt && !customAmount
                        ? 'bg-[#320003] text-[#ffddb4] shadow-md'
                        : 'bg-[#eadfc6]/50 text-[#320003]'
                    }`}
                  >
                    {amt} ETB
                  </button>
                ))}
              </div>
            </div>

            {/* Recipient Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1">
                  Recipient Name *
                </label>
                <input
                  type="text"
                  required
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="e.g., Sarah Parker"
                  className="w-full bg-white border border-[#320003]/20 rounded-xl p-2.5 text-xs font-body focus:outline-none focus:border-[#320003]"
                />
              </div>

              <div>
                <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1">
                  Recipient Email *
                </label>
                <input
                  type="email"
                  required
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="sarah@example.com"
                  className="w-full bg-white border border-[#320003]/20 rounded-xl p-2.5 text-xs font-body focus:outline-none focus:border-[#320003]"
                />
              </div>
            </div>

            <div>
              <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1">
                Your Message
              </label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white border border-[#320003]/20 rounded-xl p-2.5 text-xs font-body focus:outline-none focus:border-[#320003]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#320003] hover:bg-[#540b0e] text-[#ffddb4] py-4 rounded-full font-anton text-lg uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2"
            >
              SEND DIGITAL GIFT CARD ({activeAmount.toLocaleString()} ETB)
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#320003] text-[#ffddb4] rounded-full flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-anton text-3xl text-[#320003] uppercase">GIFT CARD SENT!</h4>
            <p className="font-body text-sm text-[#554241]">
              A digital voucher valued at <strong className="text-[#320003]">{activeAmount.toLocaleString()} ETB</strong> has been emailed to <strong className="text-[#320003]">{recipientEmail}</strong>.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-[#320003] text-white py-3.5 rounded-full font-body font-bold text-xs uppercase"
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
