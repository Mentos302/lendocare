/* eslint-disable no-param-reassign */
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { CartItem, CartState, initialStateType } from "./interfaces";

const MOCK_CART = [
  {
    lendoProductId: 1234,
    quantity: 1,
    deliveryType: "delivery_fee",
    fromDate: new Date(),
    toDate: new Date(),
  },
];

const initialState: initialStateType = {
  cart: MOCK_CART,
};

export const useCartStore = create<CartState>()(
  persist(
    immer((set) => ({
      ...initialState,
      addToCart: (product: CartItem) =>
        set((state) => {
          state.cart.push({
            ...product,
            quantity: 1,
          });
        }),
      removeFromCart: (productId: number) =>
        set((state) => {
          state = {
            ...state,
            cart: state.cart.filter((product: CartItem) => {
              product.lendoProductId !== productId;
            }),
          };
        }),
      updateQuantity: (productId: number, action: "increase" | "decrease") =>
        set((state) => {
          const cart = state.cart;

          const findProduct = state.cart.find(
            (p: CartItem) => p.lendoProductId === productId
          );

          if (findProduct) {
            if (action === "decrease") {
              findProduct.quantity =
                findProduct.quantity! > 1
                  ? findProduct.quantity! - 1
                  : findProduct.quantity!;
            } else {
              findProduct.quantity! += 1;
            }
          }

          state.cart = cart;
        }),
      showCart: false,
      toggleCart: () =>
        set((state) => {
          state.showCart = !state.showCart;
        }),
    })),
    { name: "cartState", version: 1 }
  )
);

// const { addToCart, removeFromCart, updateQuantity, showCart, toggleCart } =
//   useCartStore((state) => state);

// const logInHandler = () => setFormType(formTypes.LOG_IN);
