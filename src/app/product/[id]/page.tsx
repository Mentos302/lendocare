"use client";

import { Product } from "@/app/types";
import apiClient from "@/utils/http-common";
import { useQuery } from "@tanstack/react-query";

type propTypes = { params: { id: number } };

async function getProduct(id: number) {
  const res = await apiClient.post("enquiry", {
    lendoProductIds: [id],
    countryCode: process.env.NEXT_PUBLIC_COUNTRY_CODE,
  });

  return res.data.length ? res.data[0] : null;
}

const ProductPage = ({ params }: propTypes) => {
  const { data, isLoading, error } = useQuery<Product[]>(
    ["product", params.id],
    () => getProduct(params.id)
  );

  if (isLoading) return "Loading...";
  if (error) return "Error";

  if (data)
    return (
      <div>
        <h1>{params.id}</h1>
        <h1>{data[0].lendoProduct.name}</h1>
      </div>
    );

  return "Product not found";
};

export default ProductPage;
