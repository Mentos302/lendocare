/* eslint-disable no-param-reassign */
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import {
  CartItem,
  CartState,
  CheckoutState,
  initialStateType,
} from "./interfaces";

const initialState: initialStateType = {
  cart: [],
};

export const useCartStore = create<CartState>()(
  persist(
    immer((set) => ({
      ...initialState,
      addToCart: (product: CartItem) =>
        set((state) => {
          state.cart.push({
            ...product,
          });
        }),
      removeFromCart: (itemId: string) =>
        set((state) => {
          state.cart = state.cart.filter(
            (product: CartItem) => product.id !== itemId
          );
        }),
      emptyCart: () =>
        set((state) => {
          state.cart = [];
        }),
      showCart: false,
      toggleCart: () =>
        set((state) => {
          state.showCart = !state.showCart;
        }),
      setShowCart: (value: boolean) =>
        set((state) => {
          state.showCart = value;
        }),
    })),
    { name: "cartState", version: 1 }
  )
);

export const useCheckoutStore = create<CheckoutState>()(
  persist(
    immer((set) => ({
      ...initialState,
    })),
    { name: "checkoutState", version: 1 }
  )
);

// const { addToCart, removeFromCart, updateQuantity, showCart, toggleCart } =
//   useCartStore((state) => state);

// const logInHandler = () => setFormType(formTypes.LOG_IN);
