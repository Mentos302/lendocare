"use client";

import { useState } from "react";
import ProductsFiltering from "./(components)/ProductsFiltering";
import ProductsList from "./(components)/ProductsList";

export const ALL_CATEGORIES = process.env
  .NEXT_PUBLIC_CATEGORIES!.split(",")
  .map((cat) => parseFloat(cat));

export default function Catalog() {
  const [categories, setCategories] = useState<number[]>([]);

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        <ProductsFiltering setCategories={setCategories} />
      </div>
      <ProductsList categories={categories} />
    </div>
  );
}
