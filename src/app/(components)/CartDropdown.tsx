"use client";

import { Dialog, Popover, Transition } from "@headlessui/react";
import React, { FC, Fragment } from "react";
import { SvgCart, SvgDateStart } from "../(svg)/AllSvg";
import Prices from "../catalog/(components)/Prices";

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
              <Dialog.Panel className="hidden md:block absolute z-10 w-screen max-w-xs sm:max-w-md px-4 mt-3.5 top-[70px] right-[95px]">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <div className="relative bg-white">
                    <div className="max-h-[60vh] p-5 overflow-y-auto hiddenScrollbar">
                      <h3 className="text-xl font-semibold">Корзина</h3>
                    </div>
                    <div className="p-5 flex justify-between ">
                      <div className="flex gap-4">
                        <div className="bg-gray-400 rounded-2xl w-20 h-24" />
                        <div className="flex flex-col justify-between">
                          <div>Rey Nylon Backpack</div>
                          <div>
                            <div>Час оренди:</div>
                            <div>
                              <span>
                                <SvgDateStart /> 29.06.2023
                              </span>{" "}
                              - 29.11.2023
                            </div>
                          </div>
                          <div>Кількість 1</div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        <Prices />
                        <button className="text-primary-01 font-semibold">
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="bg-light-blue p-5">
                      <p className="flex justify-between font-semibold text-slate-900">
                        <span>
                          <span>Subtotal</span>
                          <span className="block text-sm text-slate-500 dark:text-slate-400 font-normal">
                            Shipping and taxes calculated at checkout.
                          </span>
                        </span>
                        <span className="">$299.00</span>
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
