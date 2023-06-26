"use client";

import { Dialog, Popover, Transition } from "@headlessui/react";
import React, { FC, Fragment } from "react";
import { SvgCart, SvgDateFinish, SvgDateStart } from "../../(svg)/AllSvg";
import Link from "next/link";
import EmptyCart from "./EmptyCart";

type CartDropdownProps = {
  open: boolean;
  onClose: () => void;
};

const CartDropdown: FC<CartDropdownProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="hidden lg:block lg:relative z-50"
        onClose={onClose}
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
                      <div className="w-full flex gap-4">
                        <Link href="/cart" onClick={onClose}>
                          <div className="bg-gray-400 rounded-2xl min-w-[80px] h-24 scale-animation" />
                        </Link>
                        <div className="w-full flex flex-col ">
                          <div className="flex items-center justify-between">
                            <div className="font-semibold">
                              Rey Nylon Backpack
                            </div>
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

                            <div className="flex justify-end items-center">
                              <button className="text-sm font-semibold text-primary-01 scale-animation">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex gap-4">
                        <Link href="/cart" onClick={onClose}>
                          <div className="bg-gray-400 rounded-2xl min-w-[80px] h-24 scale-animation" />
                        </Link>
                        <div className="w-full flex flex-col ">
                          <div className="flex items-center justify-between">
                            <div className="font-semibold">
                              Rey Nylon Backpack
                            </div>
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

                            <div className="flex justify-end items-center">
                              <button className="text-sm font-semibold text-primary-01 scale-animation">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex gap-4">
                        <Link href="/cart" onClick={onClose}>
                          <div className="bg-gray-400 rounded-2xl min-w-[80px] h-24 scale-animation" />
                        </Link>
                        <div className="w-full flex flex-col ">
                          <div className="flex items-center justify-between">
                            <div className="font-semibold">
                              Rey Nylon Backpack
                            </div>
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

                            <div className="flex justify-end items-center">
                              <button className="text-sm font-semibold text-primary-01 scale-animation">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light-blue p-5">
                      <p className="flex justify-between font-semibold text-slate-900">
                        <span>
                          <span>Повна ціна</span>
                          <span className="block text-sm text-slate-500 dark:text-slate-400 font-normal">
                            Ціна без вартості доставки і податків.
                          </span>
                        </span>
                        <span className="">4650 грн</span>
                      </p>
                    </div>
                  </div>
                  {/* <EmptyCart onClose={onClose} className="relative bg-white" /> */}
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

{
  /* <Popover className="relative">
  {({ open, close }) => (
    <>
      <Popover.Button className="px-6 py-3 border-2 border-primary-01 rounded-[48px] scale-animation">
        <SvgCart />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      ></Transition>
    </>
  )}
</Popover>; */
}
