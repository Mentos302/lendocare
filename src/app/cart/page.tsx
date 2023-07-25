"use client";

import React from "react";
import { SvgDateFinish, SvgDateStart, SvgInfo } from "../(svg)/AllSvg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useYupValidationResolver } from "@/utils/useYupValidationResolver";
import EmptyCart from "./(components)/EmptyCart";
import { useCartStore } from "@/modules/cart/store";

const Cart = () => {
  const { showCart, setShowCart, toggleCart, cart, removeFromCart } =
    useCartStore((state) => state);

  const schema = yup.object().shape({
    option: yup.string().required("Please select at least one option"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: useYupValidationResolver(schema),
  });

  return (
    <div className="container-box mb-8">
      <div className="my-8 w-full border-t border-t-light-gray" />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[60%]">
          <div className="w-full flex gap-4 border-b border-b-light-gray py-10 first:pt-0">
            <div>
              <div className="bg-gray-400 rounded-2xl min-w-[80px] h-24 sm:min-w-[128px] sm:h-32" />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Rey Nylon Backpack</div>
                <div className="border-2 border-primary-01 py-1 px-2 text-sm text-primary-01 font-semibold rounded-lg">
                  1550 грн
                </div>
              </div>
              <div className="h-full flex flex-col justify-between">
                <div className="text-gray-03 text-sm font-medium">
                  <div>Час оренди:</div>
                  <div className="flex gap-2">
                    <div className="flex gap-1 items-center">
                      <SvgDateFinish /> 29.06.2023
                    </div>
                    <div className="font-medium">-</div>
                    <div className="flex gap-1 items-center">
                      <SvgDateStart /> 29.11.2023
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0 flex justify-end items-center">
                  {/* <div className="flex gap-5 items-center">
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      -
                    </button>
                    <div>1</div>
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      +
                    </button>
                  </div> */}
                  <button className="text-sm sm:text-base font-semibold text-primary-01 scale-animation">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 border-b border-b-light-gray py-10 first:pt-0">
            <div>
              <div className="bg-gray-400 rounded-2xl min-w-[80px] h-24 sm:min-w-[128px] sm:h-32" />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Rey Nylon Backpack</div>
                <div className="border-2 border-primary-01 py-1 px-2 text-sm text-primary-01 font-semibold rounded-lg">
                  1550 грн
                </div>
              </div>
              <div className="h-full flex flex-col justify-between">
                <div className="text-gray-03 text-sm font-medium">
                  <div>Час оренди:</div>
                  <div className="flex gap-2">
                    <div className="flex gap-1 items-center">
                      <SvgDateFinish /> 29.06.2023
                    </div>
                    <div className="font-medium">-</div>
                    <div className="flex gap-1 items-center">
                      <SvgDateStart /> 29.11.2023
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0 flex justify-end items-center">
                  {/* <div className="flex gap-5 items-center">
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      -
                    </button>
                    <div>1</div>
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      +
                    </button>
                  </div> */}
                  <button className="text-sm sm:text-base font-semibold text-primary-01 scale-animation">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 border-b border-b-light-gray py-10 first:pt-0">
            <div>
              <div className="bg-gray-400 rounded-2xl min-w-[80px] h-24 sm:min-w-[128px] sm:h-32" />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Rey Nylon Backpack</div>
                <div className="border-2 border-primary-01 py-1 px-2 text-sm text-primary-01 font-semibold rounded-lg">
                  1550 грн
                </div>
              </div>
              <div className="h-full flex flex-col justify-between">
                <div className="text-gray-03 text-sm font-medium">
                  <div>Час оренди:</div>
                  <div className="flex gap-2">
                    <div className="flex gap-1 items-center">
                      <SvgDateFinish /> 29.06.2023
                    </div>
                    <div className="font-medium">-</div>
                    <div className="flex gap-1 items-center">
                      <SvgDateStart /> 29.11.2023
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0 flex justify-end items-center">
                  {/* <div className="flex gap-5 items-center">
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      -
                    </button>
                    <div>1</div>
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      +
                    </button>
                  </div> */}
                  <button className="text-sm sm:text-base font-semibold text-primary-01 scale-animation">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block mx-8 border-r border-r-light-gray" />
        <div className="lg:w-[40%]">
          <div className="mt-8 lg:mt-0 text-xl text-gray-01 font-semibold">
            Підсумок замовлення
          </div>
          <div className="py-4 flex justify-between text-sm border-b border-b-light-gray">
            <div className="text-gray-03">Ціна товару</div>
            <div className="text-gray-01 font-semibold">299.00 грн</div>
          </div>
          <div className="py-4 flex justify-between text-sm border-b border-b-light-gray">
            <div className="text-gray-03">Доставка</div>
            <div className="text-gray-01 font-semibold">25.00 грн</div>
          </div>
          <div className="py-4 flex justify-between text-sm border-b border-b-light-gray">
            <div className="text-gray-03">Податки</div>
            <div className="text-gray-01 font-semibold">75.00 грн</div>
          </div>
          <div className="py-4 flex justify-between text-gray-01 font-semibold text-base">
            <div>Загальна ціна</div>
            <div>399.00 грн</div>
          </div>
          <div className="mt-4 mb-2 flex justify-center">
            <Link href="/checkout" className="btn-primary">
              Оформити замовлення
            </Link>
          </div>
          <div className="flex gap-1  justify-center sm:text-center items-start sm:items-center  text-sm text-gray-03">
            <SvgInfo />
            <div className="-mt-[2px]  sm:-mt-0">
              Дізнайтеся більше про{" "}
              <span className="text-gray-01 font-semibold underline cursor-pointer">
                податки
              </span>{" "}
              та{" "}
              <span className="text-gray-01 font-semibold underline cursor-pointer">
                доставку
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <EmptyCart className="my-10 border border-light-blue rounded-lg shadow-field" /> */}
    </div>
  );
};

export default Cart;
