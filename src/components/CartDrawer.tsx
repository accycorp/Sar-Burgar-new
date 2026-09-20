import React, { useState } from 'react';
import { CartItem } from '../types';
import { DISCOUNT_CODES, LOCATION_DETAILS } from '../data/menuData';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Tag, Truck, Store, CreditCard } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [fulfillmentType, setFulfillmentType] = useState<'delivery' | 'pickup'>('delivery');
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<typeof DISCOUNT_CODES[0] | null>(null);
  const [promoError, setPromoError] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'confirmed'>('cart');

  // Customer Checkout Details
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'cash'>('card');
  const [orderReference, setOrderReference] = useState('');

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.itemTotal, 0);
  const discountAmount = appliedDiscount
    ? (subtotal * appliedDiscount.discountPercentage) / 100
    : 0;
  const deliveryFee = fulfillmentType === 'delivery' ? 100 : 0;
  const tax = (subtotal - discountAmount) * 0.15; // 15% VAT
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee + tax);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoCodeInput.trim().toUpperCase();
    const found = DISCOUNT_CODES.find((d) => d.code === code);
    if (!found) {
      setPromoError('Invalid promo code. Try FIRSTBITE15');
      return;
    }
    if (subtotal < found.minSpend) {
      setPromoError(`Minimum spend of ${found.minSpend.toLocaleString()} ETB required for ${found.code}`);
      return;
    }
    setAppliedDiscount(found);
    setPromoCodeInput('');
  };

  const handleProceedCheckout = () => {
    if (cartItems.length === 0) return;
    setCheckoutStep('checkout');
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;
    const refNum = 'SAR-' + Math.floor(100000 + Math.random() * 900000);
    setOrderReference(refNum);
    setCheckoutStep('confirmed');
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
      <div className="bg-[#f6faf6] text-[#181d1b] w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 relative">
        {/* Header */}
        <div className="p-6 bg-[#320003] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-[#ffddb4]" />
            <div>
              <h3 className="font-anton text-2xl uppercase tracking-tight text-white">YOUR ORDER BAG</h3>
              <p className="text-xs font-body text-[#ffddb4]">{cartItems.length} items selected</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Fulfillment Switcher */}
        <div className="bg-[#eadfc6]/60 p-2 flex gap-1 border-b border-[#320003]/10 shrink-0">
          <button
            onClick={() => setFulfillmentType('delivery')}
            className={`flex-1 py-2 rounded-xl text-xs font-body font-bold uppercase flex items-center justify-center gap-2 transition-all ${
              fulfillmentType === 'delivery'
                ? 'bg-[#320003] text-white shadow-md'
                : 'text-[#320003] hover:bg-[#eadfc6]'
            }`}
          >
            <Truck className="w-4 h-4" /> Delivery (100 ETB)
          </button>
          <button
            onClick={() => setFulfillmentType('pickup')}
            className={`flex-1 py-2 rounded-xl text-xs font-body font-bold uppercase flex items-center justify-center gap-2 transition-all ${
              fulfillmentType === 'pickup'
                ? 'bg-[#320003] text-white shadow-md'
                : 'text-[#320003] hover:bg-[#eadfc6]'
            }`}
          >
            <Store className="w-4 h-4" /> Bole Pickup (Free)
          </button>
        </div>

        {/* Content Views */}
        {checkoutStep === 'cart' && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 text-[#554241]">
                <ShoppingBag className="w-16 h-16 text-[#320003]/20 mb-4" />
                <h4 className="font-anton text-2xl text-[#320003] uppercase">BAG IS EMPTY</h4>
                <p className="text-sm font-body max-w-xs mt-1">
                  Explore our signature menu cravings and treat yourself to SAR Burger gastronomy!
                </p>
              </div>
            ) : (
              <>
                {/* Cart Item Cards */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-[#320003]/10 rounded-2xl p-4 flex gap-4 items-center shadow-sm"
                    >
                      <img
                        src={item.menuItem.image}
                        alt={item.menuItem.name}
                        className="w-16 h-16 object-contain shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-anton text-lg text-[#320003] truncate uppercase">
                          {item.menuItem.name}
                        </h4>
                        <p className="font-anton text-sm text-[#540b0e]">
                          {item.itemTotal.toLocaleString()} ETB
                        </p>

                        {/* Selected Options Summary */}
                        <div className="text-[11px] font-body text-[#554241] mt-0.5 space-y-0.5">
                          {item.selectedOptions.patty && (
                            <p>+ {item.selectedOptions.patty.name}</p>
                          )}
                          {item.selectedOptions.cheese && (
                            <p>+ {item.selectedOptions.cheese.name}</p>
                          )}
                          {item.selectedOptions.sauce && (
                            <p>+ {item.selectedOptions.sauce.name}</p>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-600 hover:text-red-800 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-2 bg-[#eadfc6]/50 rounded-full px-2 py-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="text-[#320003] hover:scale-125 transition-transform"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-anton text-xs text-[#320003]">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="text-[#320003] hover:scale-125 transition-transform"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="space-y-2 pt-2">
                  <label className="font-body text-xs font-bold uppercase tracking-wider text-[#320003] block">
                    Promo Code / Coupon
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCodeInput}
                      onChange={(e) => setPromoCodeInput(e.target.value)}
                      placeholder="e.g. FIRSTBITE15"
                      className="flex-1 bg-white border border-[#320003]/20 rounded-xl px-3 py-2 text-xs font-body uppercase text-[#181d1b] focus:outline-none focus:border-[#320003]"
                    />
                    <button
                      type="submit"
                      className="bg-[#320003] text-[#ffddb4] px-4 py-2 rounded-xl font-body text-xs font-bold uppercase"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && <p className="text-red-600 text-xs font-body">{promoError}</p>}
                  {appliedDiscount && (
                    <div className="bg-[#ffddb4] text-[#291800] p-2.5 rounded-xl text-xs font-body font-bold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Tag className="w-4 h-4" /> {appliedDiscount.code} ({appliedDiscount.discountPercentage}% OFF)
                      </span>
                      <button
                        type="button"
                        onClick={() => setAppliedDiscount(null)}
                        className="text-xs underline hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        )}

        {/* Checkout Form View */}
        {checkoutStep === 'checkout' && (
          <form onSubmit={handleCompleteOrder} className="flex-1 overflow-y-auto p-6 space-y-4">
            <h4 className="font-anton text-2xl text-[#320003] uppercase">GUEST DETAILS</h4>

            <div>
              <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g., Abebe Bikila"
                className="w-full bg-white border border-[#320003]/20 rounded-xl p-3 text-xs font-body focus:outline-none focus:border-[#320003]"
              />
            </div>

            <div>
              <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="+251 91 123 4567"
                className="w-full bg-white border border-[#320003]/20 rounded-xl p-3 text-xs font-body focus:outline-none focus:border-[#320003]"
              />
            </div>

            {fulfillmentType === 'delivery' && (
              <div>
                <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-1">
                  Delivery Address in Addis Ababa *
                </label>
                <input
                  type="text"
                  required
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Street / Area (e.g. Bole Atlas, Kazanchis)"
                  className="w-full bg-white border border-[#320003]/20 rounded-xl p-3 text-xs font-body focus:outline-none focus:border-[#320003]"
                />
              </div>
            )}

            <div>
              <label className="font-body text-xs font-bold uppercase text-[#320003] block mb-2">
                Payment Method
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-center text-xs font-body font-bold flex flex-col items-center gap-1 ${
                    paymentMethod === 'card'
                      ? 'border-[#320003] bg-[#320003] text-white'
                      : 'border-[#320003]/20 bg-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4" /> Telebirr / CBE
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple')}
                  className={`p-3 rounded-xl border text-center text-xs font-body font-bold flex flex-col items-center gap-1 ${
                    paymentMethod === 'apple'
                      ? 'border-[#320003] bg-[#320003] text-white'
                      : 'border-[#320003]/20 bg-white'
                  }`}
                >
                  Credit Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cash')}
                  className={`p-3 rounded-xl border text-center text-xs font-body font-bold flex flex-col items-center gap-1 ${
                    paymentMethod === 'cash'
                      ? 'border-[#320003] bg-[#320003] text-white'
                      : 'border-[#320003]/20 bg-white'
                  }`}
                >
                  Cash On Arrival
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#320003] hover:bg-[#540b0e] text-[#ffddb4] py-4 rounded-full font-anton text-lg uppercase tracking-wider transition-all shadow-xl"
            >
              CONFIRM & PAY {finalTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ETB
            </button>
          </form>
        )}

        {/* Order Confirmed View */}
        {checkoutStep === 'confirmed' && (
          <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-[#320003] text-[#ffddb4] rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-anton text-3xl text-[#320003] uppercase">ORDER CONFIRMED!</h4>
            <p className="font-anton text-xl text-[#540b0e]">Ref #: {orderReference}</p>
            <p className="font-body text-sm text-[#554241] max-w-xs leading-relaxed">
              Thank you, <span className="font-bold text-[#320003]">{customerName}</span>! Our SAR Burger kitchen team in Bole is prepping your meal right now.
            </p>
            <div className="bg-[#eadfc6] p-4 rounded-2xl w-full text-xs font-body text-[#320003] text-left space-y-1">
              <p>
                <strong>Estimated Time:</strong> 25-30 Mins
              </p>
              <p>
                <strong>Method:</strong> {fulfillmentType.toUpperCase()}
              </p>
              <p>
                <strong>Location:</strong> {LOCATION_DETAILS.address}
              </p>
            </div>
            <button
              onClick={() => {
                setCheckoutStep('cart');
                onClose();
              }}
              className="w-full bg-[#320003] text-white py-3.5 rounded-full font-body font-bold text-xs uppercase"
            >
              Done & Close
            </button>
          </div>
        )}

        {/* Cart Total Breakdown Footer */}
        {checkoutStep === 'cart' && cartItems.length > 0 && (
          <div className="p-6 bg-[#eadfc6]/60 border-t border-[#320003]/10 space-y-3 shrink-0">
            <div className="space-y-1.5 text-xs font-body text-[#554241]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-[#320003]">{subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ETB</span>
              </div>
              {appliedDiscount && (
                <div className="flex justify-between text-green-700 font-bold">
                  <span>Discount ({appliedDiscount.code})</span>
                  <span>-{discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ETB</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Fulfillment Fee</span>
                <span>{deliveryFee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ETB</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated VAT (15%)</span>
                <span>{tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ETB</span>
              </div>
              <div className="flex justify-between text-base font-anton text-[#320003] pt-2 border-t border-[#320003]/15">
                <span>TOTAL</span>
                <span className="text-[#540b0e]">{finalTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ETB</span>
              </div>
            </div>

            <button
              onClick={handleProceedCheckout}
              className="w-full bg-[#320003] hover:bg-[#540b0e] text-[#ffddb4] py-4 rounded-full font-anton text-lg uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
