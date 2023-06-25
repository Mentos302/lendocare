"use client";

import parse from "html-react-parser";
import { Product } from "@/app/types";
import { useState } from "react";

type propTypes = { product: Product };

const ProductInfo = ({ product }: propTypes) => {
  const [activeTab, setActiveTab] = useState<string>("description");

  return (
    <section className="py-20 bg-primary-50" id="details">
      <div className="container-box">
        <div className="mb-6 flex text-gray-05">
          <button
            className="pb-3 px-8 border-b-4 font-semibold text-primary-01 border-primary-01"
            onClick={() => setActiveTab("description")}
          >
            Опис
          </button>
          <button
            className="pb-3 px-8 border-b-4 border-gray-300"
            onClick={() => setActiveTab("specs")}
          >
            Характеристики
          </button>
          <button
            className="pb-3 px-8 border-b-4 border-gray-300"
            onClick={() => setActiveTab("delivery")}
          >
            Доставка
          </button>
          <div className="w-full border-b-4 border-gray-300"></div>
        </div>
        <div className="px-6 py-7 rounded-lg bg-white">
          {activeTab === "description" ? (
            <>
              <b className="block text-bold text-2xl mb-5">Опис</b>
              <div className="text-bold text-lg">
                {parse(product.description)}
              </div>
            </>
          ) : (
            ""
          )}
          {activeTab === "specs" ? (
            <>
              <b className="block text-bold text-2xl mb-5">Характеристики</b>
              <div className="text-bold text-lg">
                {parse(product.description)}
              </div>
            </>
          ) : (
            ""
          )}
          {activeTab === "delivery" ? (
            <>
              <b className="block text-bold text-2xl mb-5">Доставка</b>
              <div className="text-bold text-lg">
                {parse(product.description)}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
