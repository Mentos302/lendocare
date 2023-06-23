export interface CartItem {
  lendoProductId: number;
  quantity: number;
  deliveryType: string;
  fromDate: Date | null;
  toDate: Date | null;
}

export interface initialStateType {
  cart: CartItem[];
}

export interface CartState {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: "increase" | "decrease") => void;
  toggleCart: () => void;
  showCart: boolean;
}
