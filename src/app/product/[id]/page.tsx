import { Product, ProductResponse } from "@/app/types";
import apiClient from "@/utils/http-common";
import { useQuery } from "@tanstack/react-query";

import ProductMain from "./(components)/ProductMain";
import ProductInfo from "./(components)/ProductInfo";
import { RelativeProducts } from "./(components)/RelativeProducts";

type propTypes = { params: { id: number } };

async function getProduct(id: number) {
  const res = await apiClient.post("enquiry", {
    lendoProductIds: [id],
    location: {
      countryCodeAlpha2: process.env.NEXT_PUBLIC_COUNTRY_CODE,
    },
  });

  return res.data.length ? res.data[0] : null;
}

const ProductPage = async ({ params }: propTypes) => {
  const data = await getProduct(params.id);

  if (!data) return "Product not found";

  return (
    <main className="lg:mt-10">
      <ProductMain product={data.lendoProduct} />
      <ProductInfo product={data.lendoProduct} />
      <RelativeProducts />
    </main>
  );
};

export default ProductPage;
