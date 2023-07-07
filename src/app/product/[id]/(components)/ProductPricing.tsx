"use client";

import { SvgClock } from "@/app/(svg)/AllSvg";
import { Pricing } from "@/app/types";
import { Ordering } from "./Ordering";
import { FC } from "react";

type ProductPricingPropsType = { pricing: Pricing; children: JSX.Element };

const ProductPricing: FC<ProductPricingPropsType> = ({ pricing, children }) => {
  const minPrice =
    pricing.priceSchedule[pricing.priceSchedule.length - 1].totalPrice;

  return (
    <div className="py-[25px] border-y border-gray-300">
      <div className="flex gap-2.5 font-semibold text-xl md:text-2xl text-gray-01 mb-4">
        <span>Від</span>
        <span className="px-2 text-primary-01 bg-primary-50">
          {minPrice / 100} грн
        </span>
        <span> / тиждень</span>
      </div>
      <div className="flex gap-1.5 items-center text-primary-01 cursor-pointer mb-4">
        <SvgClock />
        <span className="text-sm">
          Ціна залежить від терміну оренди обладнання
        </span>
      </div>
      {children}
    </div>
  );
};

export default ProductPricing;
