"use client";

import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { SvgCart } from "../(svg)/AllSvg";

const CartDropdown = () => {
  return (
    <Popover className="relative">
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
          >
            <Popover.Panel className="hidden md:block absolute z-10 w-screen max-w-xs sm:max-w-md px-4 mt-3.5 -right-28 sm:right-0 sm:px-0">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <div className="relative bg-white">
                  <div className="max-h-[60vh] p-5 overflow-y-auto hiddenScrollbar">
                    <h3 className="text-xl font-semibold">Shopping cart</h3>
                    {/* <div className="divide-y divide-slate-100 dark:divide-slate-700">
                   {[PRODUCTS[0], PRODUCTS[1], PRODUCTS[2]].map(
                     (item, index) => renderProduct(item, index, close)
                   )}
                 </div> */}
                    product
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
                    {/* <div className="flex space-x-2 mt-5">
                   <ButtonSecondary
                     href="/cart"
                     className="flex-1 border border-slate-200 dark:border-slate-700"
                     onClick={close}
                   >
                     View cart
                   </ButtonSecondary>
                   <ButtonPrimary
                     href="/checkout"
                     onClick={close}
                     className="flex-1"
                   >
                     Check out
                   </ButtonPrimary>
                 </div> */}
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
