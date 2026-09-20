export type CategoryType = 'all' | 'burgers' | 'chicken' | 'sandwiches' | 'sides' | 'drinks';

export interface CustomizationOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  category: CategoryType;
  tags: string[];
  image: string;
  calories: number;
  isBestSeller?: boolean;
  ingredients: string[];
  customizations?: {
    extraPatties?: CustomizationOption[];
    extraCheese?: CustomizationOption[];
    sauces?: CustomizationOption[];
    bunType?: CustomizationOption[];
  };
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  selectedOptions: {
    patty?: CustomizationOption;
    cheese?: CustomizationOption;
    sauce?: CustomizationOption;
    bun?: CustomizationOption;
  };
  specialInstructions?: string;
  itemTotal: number;
}

export interface ReservationData {
  id: string;
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  occasion: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending';
}

export interface GiftCardData {
  recipientName: string;
  recipientEmail: string;
  senderName: string;
  amount: number;
  message: string;
  design: 'burgundy' | 'gold' | 'neon' | 'classic';
}

export interface DiscountCode {
  code: string;
  title: string;
  description: string;
  discountPercentage: number;
  minSpend: number;
  expiresText: string;
}
