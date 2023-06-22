"use client";

import { Product } from "@/app/types";
import apiClient from "@/utils/http-common";
import { useQuery } from "@tanstack/react-query";

type propTypes = { params: { slug: string } };

async function getProduct(slug: string) {
  const res = await apiClient.post("enquiry", {
    lendoProductNames: [slug],
    countryCode: process.env.NEXT_PUBLIC_COUNTRY_CODE,
  });

  return res.data;
}

const ProductPage = ({ params }: propTypes) => {
  const { data, isLoading, error } = useQuery<Product>(
    ["product", params.slug],
    () => getProduct(params.slug)
  );

  if (isLoading) return "Loading...";
  if (error) return "Error";

  if (data)
    return (
      <div>
        <h1>{params.slug}</h1>
        <h1>{data?.lendoProduct.name}</h1>
      </div>
    );

  return "Product not found";
};

export default ProductPage;
