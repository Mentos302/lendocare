export interface CartItem {
  id: string;
  lendoProductId: number;
  name: string;
  thumb: string;
  price: number;
  startDate: null | Date | string;
  endDate: null | Date | string;
}

export interface initialStateType {
  cart: CartItem[];
  [key: string]: any;
}

export interface CartState {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  emptyCart: () => void;
  toggleCart: () => void;
  showCart: boolean;
}

export interface CheckoutState {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  city?: string;
  street?: string;
  building?: string;
  apartment?: string;
  branch?: string;
}
