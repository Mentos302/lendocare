"use client";
import Image from "next/image";

import { Dialog, Popover, Transition } from "@headlessui/react";
import React, { FC, Fragment } from "react";
import { SvgCart, SvgDateFinish, SvgDateStart } from "../../(svg)/AllSvg";
import Link from "next/link";
import { useCartStore } from "@/modules/cart/store";

const CartDropdown: FC = () => {
  const { showCart, toggleCart, cart, removeFromCart } = useCartStore(
    (state) => state
  );

  return (
    <Transition appear show={showCart} as={Fragment}>
      <Dialog
        as="div"
        className="hidden lg:block lg:relative z-50"
        onClose={() => toggleCart()}
      >
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full justify-end ">
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-400"
              enterFrom="opacity-0 translate-y-0"
              enterTo="opacity-100 translate-y-1"
              leave="transition ease-in duration-400"
              leaveFrom="opacity-100 translate-y-1"
              leaveTo="opacity-0 translate-y-o"
            >
              <Dialog.Panel className="hidden md:block absolute z-50 w-screen max-w-xs sm:max-w-md px-4 mt-3.5 top-[70px] right-[95px]">
                <div className="overflow-hidden rounded-2xl shadow-lg border border-light-gray">
                  <div className="relative bg-white">
                    <div className="max-h-[60vh] p-5 overflow-y-auto hiddenScrollbar">
                      <h3 className="text-xl font-semibold">Корзина</h3>
                    </div>
                    <div className="p-5 flex flex-col gap-4 justify-between ">
                      {cart.map((item) => (
                        <div className="w-full flex gap-4">
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
                      ))}
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
                          {cart.reduce((total, item) => total + item.price, 0)}
                          грн
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartDropdown;
