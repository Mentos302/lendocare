export type ProductResponse = {
  lendoProduct: Product;
  pricePlan: Pricing;
};

export type Product = {
  productId: number;
  subCategory: {
    id: number;
    name: string;
    image: string;
    description: string;
  };
  name: string;
  image: string;
  image1: string | null;
  image2: string | null;
  image3: string | null;
  description: string;
  productSpecifications: {
    name: string;
    measurement: string;
  };
  pricePlan: Pricing;
  lendoProductId: number;
};

export type Pricing = {
  priceSchedule: {
    fromNight: number;
    untilNight: number;
    totalPrice: number;
  }[];
};
