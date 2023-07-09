"use client";
import Image from "next/image";

import { Dialog, Popover, Transition } from "@headlessui/react";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import { SvgCart, SvgDateFinish, SvgDateStart } from "../../(svg)/AllSvg";
import Link from "next/link";
import { useCartStore } from "@/modules/cart/store";
import EmptyCart from "./EmptyCart";

const CartDropdown: FC = () => {
  const { showCart, setShowCart, toggleCart, cart, removeFromCart } =
    useCartStore((state) => state);
  const cartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        closeCart();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <Popover className="relative" ref={cartRef}>
      {() => (
        <>
          <Popover.Button
            onClick={() => toggleCart()}
            className="px-6 py-[14px] ring-0 outline-none ring-offset-0 border-2 border-primary-01 rounded-[48px] scale-animation "
          >
            <SvgCart />
          </Popover.Button>

          <Transition
            show={showCart}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="hidden md:block absolute z-50 w-screen max-w-xs sm:max-w-md px-4 mt-3.5 -right-[210px]">
              <div className="overflow-hidden rounded-2xl shadow-lg border border-light-gray">
                <div className="relative bg-white">
                  <div className="p-5 flex flex-col gap-4 justify-between ">
                    {cart.length ? (
                      cart.map((item) => (
                        <div key={item.id} className="w-full flex gap-4">
                          <Link
                            href={`/product/${item.lendoProductId}`}
                            onClick={() => toggleCart()}
                          >
                            <div className="relative bg-gray-400 rounded-2xl min-w-[80px] h-24 scale-animation">
                              <Image
                                src={item.thumb}
                                alt="Image description"
                                fill={true}
                                style={{ objectFit: "cover" }}
                                className="rounded-2xl"
                              />
                            </div>
                          </Link>
                          <div className="w-full flex flex-col ">
                            <div className="flex items-center justify-between">
                              <Link
                                href={`/product/${item.lendoProductId}`}
                                onClick={() => toggleCart()}
                              >
                                <div className="font-semibold">{item.name}</div>
                              </Link>

                              <div className="border-2 border-primary-01 py-1 px-2 text-sm text-primary-01 font-semibold rounded-lg">
                                {item.price} грн
                              </div>
                            </div>
                            <div className="h-full flex flex-col justify-between">
                              <div className="text-gray-03 text-sm font-medium">
                                <div>
                                  {item.startDate !== item.endDate
                                    ? "Термін "
                                    : "Початок "}
                                  оренди:
                                </div>
                                <div className="flex gap-2">
                                  <div className="flex gap-1 items-center">
                                    <SvgDateFinish />
                                    <>{item.startDate}</>
                                  </div>
                                  {item.startDate !== item.endDate ? (
                                    <>
                                      <div className="font-medium">-</div>
                                      <div className="flex gap-1 items-center">
                                        {/* <SvgDateStart /> */}
                                        <>{item.endDate}</>
                                      </div>
                                    </>
                                  ) : null}
                                </div>
                              </div>

                              <div className="flex justify-end items-center">
                                <button
                                  className="text-sm font-semibold text-primary-01 scale-animation"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  Видалити
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <EmptyCart onClose={toggleCart} />
                    )}
                  </div>
                  <div className="bg-light-blue p-5">
                    <p className="flex justify-between font-semibold text-slate-900">
                      <span>
                        <span>Сума замовлення</span>
                        <span className="block text-sm text-slate-500 dark:text-slate-400 font-normal">
                          Ціна вказана без вартості доставки.
                        </span>
                      </span>
                      <span className="">
                        {cart.reduce((total, item) => total + item.price, 0)}{" "}
                        грн
                      </span>
                    </p>
                    {cart.length ? (
                      <Link
                        href="/checkout"
                        className="block mt-4 btn-primary text-center"
                        onClick={toggleCart}
                      >
                        Оформити замовлення
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CartDropdown;
