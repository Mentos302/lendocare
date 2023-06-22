export interface CartItem {
  lendoProductId: number;
  quantity: number;
  deliveryType: "delivery_fee";
}

export interface initialStateType {
  cart: CartItem[];
  fromDate: null;
  toDate: null;
}

export interface CartState {
  cart: CartItem[];
  fromDate: Date | null;
  toDate: Date | null | undefined;
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: "increase" | "decrease") => void;
  toggleCart: () => void;
  showCart: boolean;
}
