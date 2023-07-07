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
}

export interface CartState {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  toggleCart: () => void;
  showCart: boolean;
}
