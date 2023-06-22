import { Product } from "@/app/types";
import apiClient from "@/utils/http-common";
import { useQuery } from "@tanstack/react-query";
import { ALL_CATEGORIES } from "../page";

async function getProducts(categories: number[]) {
  const res = await apiClient.post("enquiry", {
    productSubCategoryIds: categories.length ? categories : ALL_CATEGORIES,
    countryCode: "UKR",
  });

  return res.data;
}

export default function ProductsList({ categories }: { categories: number[] }) {
  const { data, isLoading, error } = useQuery(["products", categories], () =>
    getProducts(categories)
  );

  if (isLoading) return "Loading...";
  if (error) return "Error";

  return (
    <div>
      {data.map((product: Product) => (
        <h3>{product.lendoProduct.name}</h3>
      ))}
    </div>
  );
}
