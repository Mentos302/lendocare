"use client";

import React, { FC } from "react";

import Link from "next/link";
import Prices from "./Prices";
import Image from "next/image";

export interface ProductCardProps {
  className?: string;
  data?: any;
  isLiked?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  className = "",
  data,
  isLiked,
}) => {
  const { name, image } = data.lendoProduct;

  return (
    <>
      <div
        className={`nc-ProductCard relative flex flex-col bg-transparent ${className}`}
        data-nc-id="ProductCard"
      >
        <Link href="#" className="absolute inset-0"></Link>

        <div className="relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-1 group">
          <Link href="#" className="block">
            <Image src={image} alt={name} height={275} width={300} />
          </Link>
        </div>

        <div className="space-y-4 px-2.5 pt-5 pb-2.5">
          <div>
            <h2
              className={`nc-ProductCard__title text-base font-semibold transition-colors`}
            >
              {name}
            </h2>
          </div>

          <div className="flex justify-between items-end ">
            <Prices />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
