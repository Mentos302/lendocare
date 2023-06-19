"use client";

import React from "react";
import SidebarFilters from "./(components)/SidebarFilters";
import ProductCard from "./(components)/ProductCard";
import { products } from "../(constants)/mockProducts";

const Catalog = () => {
  console.log("zzz", products);
  return (
    <div>
      <div className="mx-auto container py-16 ">
        <div className="space-y-5">
          {/* HEADING */}
          <div className="max-w-screen-sm">
            <div className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Каталог
            </div>
          </div>
          <div className="border border-light-gray" />
          <main>
            {/* LOOP ITEMS */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 xl:w-1/4 pr-4">
                <SidebarFilters />
              </div>
              <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mx-4 border-t border-t-light-gray lg:border-t-0"></div>
              <div className="flex-1 ">
                <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 ">
                  {products.map((item: any, index: number) => (
                    <ProductCard data={item} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
