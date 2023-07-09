"use client";

import { useState } from "react";
import ProductsFiltering from "./(components)/ProductsFiltering";
import ProductsList from "./(components)/ProductsList";
import { products } from "../(constants)/mockProducts";
import { SvgCatalogDude } from "../(svg)/AllSvg";
import { useSearchParams } from "next/navigation";

export default function Catalog() {
  const searchParams = useSearchParams();
  const category = searchParams.get("cat");
  const initialState = category ? [parseFloat(category)] : [];

  const [categories, setCategories] = useState<number[]>(initialState);

  return (
    <div className="container-box py-16 ">
      <div>
        <div className="space-y-3 md:space-y-6">
          {/* HEADING */}
          <div className="max-w-screen-sm">
            <div className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Каталог
            </div>
          </div>
          <div className="border border-light-gray" />
          <div>
            {/* LOOP ITEMS */}
            <div className="flex flex-col lg:flex-row">
              <div className="w-full min-w-[220px] lg:w-[20%] space-y-6">
                {/* <SidebarFilters /> */}
                <ProductsFiltering
                  preselected={initialState[0]}
                  setCategories={setCategories}
                />
                <div className="hidden lg:block">
                  <SvgCatalogDude />
                </div>
              </div>
              <div className="hidden lg:block border border-light-gray mx-6"></div>

              <div className="mt-5 lg:mt-0 w-full lg:w-[80%]">
                <ProductsList categories={categories} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
