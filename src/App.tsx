import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuGrid } from './components/MenuGrid';
import { LookMenuBento } from './components/LookMenuBento';
import { CtaBanner } from './components/CtaBanner';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

import { ItemModal } from './components/ItemModal';
import { CartDrawer } from './components/CartDrawer';
import { AppointmentModal } from './components/AppointmentModal';
import { GiftCardModal } from './components/GiftCardModal';
import { DiscountModal } from './components/DiscountModal';

import { MenuItem, CartItem, CustomizationOption } from './types';
import { MENU_ITEMS } from './data/menuData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [giftCardModalOpen, setGiftCardModalOpen] = useState(false);
  const [discountModalOpen, setDiscountModalOpen] = useState(false);

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'initial-1',
      menuItem: MENU_ITEMS[0], // SAR Special Burger
      quantity: 1,
      selectedOptions: {},
      itemTotal: MENU_ITEMS[0].price,
    },
    {
      id: 'initial-2',
      menuItem: MENU_ITEMS[7], // Salt & Vinegar Fries
      quantity: 1,
      selectedOptions: {},
      itemTotal: MENU_ITEMS[7].price,
    },
  ]);

  const handleNavigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add Item to Cart
  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    selectedOptions: {
      patty?: CustomizationOption;
      cheese?: CustomizationOption;
      sauce?: CustomizationOption;
      bun?: CustomizationOption;
    },
    specialInstructions: string
  ) => {
    const extraPattyPrice = selectedOptions.patty?.price || 0;
    const extraCheesePrice = selectedOptions.cheese?.price || 0;
    const saucePrice = selectedOptions.sauce?.price || 0;
    const bunPrice = selectedOptions.bun?.price || 0;

    const unitTotal = item.price + extraPattyPrice + extraCheesePrice + saucePrice + bunPrice;
    const itemTotal = unitTotal * quantity;

    const newItem: CartItem = {
      id: 'cart-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      menuItem: item,
      quantity,
      selectedOptions,
      specialInstructions,
      itemTotal,
    };

    setCartItems((prev) => [...prev, newItem]);
    setCartDrawerOpen(true);
  };

  // Quick Add Item from Grid
  const handleQuickAddToCart = (item: MenuItem) => {
    const newItem: CartItem = {
      id: 'cart-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      menuItem: item,
      quantity: 1,
      selectedOptions: {},
      itemTotal: item.price,
    };
    setCartItems((prev) => [...prev, newItem]);
    setCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            const unitPrice = item.itemTotal / item.quantity;
            return {
              ...item,
              quantity: newQty,
              itemTotal: unitPrice * newQty,
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderOnlineFromLookbook = (itemId: string) => {
    const found = MENU_ITEMS.find((i) => i.id === itemId);
    if (found) {
      setSelectedItem(found);
    } else {
      setCartDrawerOpen(true);
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-body bg-[#f6faf6] text-[#181d1b] selection:bg-[#ffddb4] selection:text-[#291800]">
      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenAppointment={() => setAppointmentModalOpen(true)}
        onOpenGiftCard={() => setGiftCardModalOpen(true)}
        onOpenDiscount={() => setDiscountModalOpen(true)}
        onNavigateToSection={handleNavigateToSection}
        activeSection={activeSection}
      />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOrderClick={() => {
            handleNavigateToSection('menu');
          }}
          onExploreMenuClick={() => {
            handleNavigateToSection('menu');
          }}
        />

        {/* Menu Grid Section */}
        <MenuGrid
          onSelectItem={(item) => setSelectedItem(item)}
          onQuickAddToCart={handleQuickAddToCart}
        />

        {/* Look Menu Bento Showcase Section */}
        <LookMenuBento onOrderOnline={handleOrderOnlineFromLookbook} />

        {/* Call To Action Banner */}
        <CtaBanner
          onGetStarted={() => {
            setCartDrawerOpen(true);
          }}
        />

        {/* About & Sourcing Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateToSection={handleNavigateToSection}
        onOpenGiftCard={() => setGiftCardModalOpen(true)}
        onOpenDiscount={() => setDiscountModalOpen(true)}
      />

      {/* Modals & Overlays */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
      />

      <GiftCardModal
        isOpen={giftCardModalOpen}
        onClose={() => setGiftCardModalOpen(false)}
      />

      <DiscountModal
        isOpen={discountModalOpen}
        onClose={() => setDiscountModalOpen(false)}
        onApplyPromoCode={(code) => {
          setCartDrawerOpen(true);
        }}
      />
    </div>
  );
}
