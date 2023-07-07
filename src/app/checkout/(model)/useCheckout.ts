import { CartItem } from "@/modules/cart/interfaces";
import { useCartStore } from "@/modules/cart/store";

export const useCheckout = () => {
  const cart = useCartStore((state) => state.cart);
};
