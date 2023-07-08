import { CartItem } from "@/modules/cart/interfaces";
import { useCartStore, useCheckoutStore } from "@/modules/cart/store";
import apiClient from "@/utils/http-common";
import { useQuery } from "@tanstack/react-query";

type CreateOrderResponse = { orderReceipt: { orderId: number } };

export const useCheckout = () => {
  const checkout = useCheckoutStore((state) => state);

  const { firstName, lastName, phoneNumber, city, branch } = checkout;

  const { cart, emptyCart } = useCartStore((state) => state);

  const orders: CartItem[][] = [];

  cart.reduce((acc, item) => {
    // Convert the start and end dates to string format for grouping
    const startDate = item.startDate;
    const endDate = item.endDate;

    // Find an existing order with the same start and end dates
    const existingOrder = acc.find(
      (order) =>
        order[0]?.startDate === startDate && order[0]?.endDate === endDate
    );

    if (existingOrder) {
      // If an order exists, push the item into that order
      existingOrder.push(item);
    } else {
      // If no order exists, create a new order with the item
      acc.push([item]);
    }

    // Return the updated accumulator
    return acc;
  }, orders);

  async function postOrder(order: CartItem[]) {
    const creatingResponse = await apiClient.post<CreateOrderResponse>("", {
      rentStartDate: new Date(order[0].startDate!).toISOString(),
      rentEndDate: new Date(order[0].endDate!).toISOString(),
      location: {
        postcode: null,
      },
      cart: true,
      countryCode: process.env.NEXT_PUBLIC_COUNTRY_CODE,
    });

    const orderId = creatingResponse.data.orderReceipt.orderId;

    await Promise.all(
      order.map(async ({ lendoProductId }) => {
        await apiClient.put(orderId + "/contents", {
          productOrders: [
            {
              lendoProductId,
              quantity: 1,
              deliveryType: "delivery_fee",
            },
          ],
          countryCode: process.env.NEXT_PUBLIC_COUNTRY_CODE,
        });
      })
    );

    await apiClient.put<CreateOrderResponse>(orderId + "/checkout/ua", {
      thirdPartyOrderId: null,
      priceType: "WEEK",
      customer: {
        forename: firstName,
        surname: lastName,
        phone: phoneNumber,
        email: "",
      },
      ...(branch
        ? {
            line1: "Нова пошта",
            line2: "Відділення " + branch,
            townOrCity: city,
            postcode: "",
          }
        : {
            line1: checkout.street + " " + checkout.building,
            line2: checkout.apartment,
            townOrCity: checkout.city,
            postcode: "",
          }),
      instructions: null,
      vatExempt: false,
    });
  }

  return async () => {
    await Promise.all(
      orders.map(async (order: CartItem[]) => {
        await postOrder(order);
      })
    );

    emptyCart();
  };
};
