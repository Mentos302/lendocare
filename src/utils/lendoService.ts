import { Product } from "@/app/types";

const REQUEST_SETTINGS = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

class LendoboxService {
  async getProducts(categories?: number | number[]): Promise<Product[]> {
    if (typeof categories === "number") {
      categories = [categories];
    }

    const res = await fetch(
      "https://api.lendobox.com/op/health/rent-order/enquiry",
      {
        ...REQUEST_SETTINGS,
        body: JSON.stringify({
          productSubCategoryIds:
            categories || process.env.NEXT_PUBLIC_CATEGORIES?.split(","),
          countryCode: process.env.NEXT_PUBLIC_COUNTRY_CODE,
        }),
      }
    );

    const products = await res.json();

    return products;
  }

  async getProduct(name: string): Promise<Product> {
    const res = await fetch(
      "https://api.lendobox.com/op/health/rent-order/enquiry",
      {
        ...REQUEST_SETTINGS,
        body: JSON.stringify({
          lendoProductNames: [name],
          countryCode: process.env.NEXT_PUBLIC_COUNTRY_CODE,
        }),
      }
    );

    const products: Product[] = await res.json();

    return products[0];
  }
}

export const lendobox = new LendoboxService();
