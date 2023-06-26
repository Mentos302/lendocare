"use client";

import React, { useRef, useState } from "react";
import classNames from "classnames";
import { SvgDateFinish, SvgDateStart } from "../(svg)/AllSvg";
import ContactInfoForm from "./(components)/ContactInfoForm";
import { ShippingForm } from "./(components)/ShippingForm";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const [formStep, setFormStep] = useState(0);
  const ref = useRef(new FormData());
  const formData = ref.current;

  const confirmOrder = () => {
    router.push("/");
  };

  return (
    <div className="container-box">
      <div
        id="order"
        className="my-10 text-2xl sm:text-3xl lg:text-4xl font-semibold"
      >
        Оформлення замовлення
      </div>
      <div className=" mb-10 flex flex-col lg:flex-row">
        <div className="lg:w-[60%]">
          <ContactInfoForm formData={formData} setFormStep={setFormStep} />
          {formStep >= 1 && (
            <ShippingForm formData={formData} setFormStep={setFormStep} />
          )}
        </div>
        <div className="hidden lg:block mx-8 border-r border-r-light-gray" />
        <div className="lg:w-[40%]">
          <div className="mt-8 lg:mt-0 text-xl text-gray-01 font-semibold">
            Підсумок замовлення
          </div>
          <div className="w-full flex gap-4 border-b border-b-light-gray py-5 first:pt-0">
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

                <div className="mt-3 sm:mt-0 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      -
                    </button>
                    <div>1</div>
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      +
                    </button>
                  </div>
                  <button className="text-sm sm:text-base font-semibold text-primary-01 scale-animation">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 border-b border-b-light-gray py-5 first:pt-0">
            <div>
              <div className="bg-gray-400 rounded-2xl min-w-[80px] h-24 sm:min-w-[128px] sm:h-32" />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-semibold">
                  Rey Nyl on Backpack Rey Nylon Backp ack Rey Ny lon Back pack
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

                <div className="mt-3 sm:mt-0 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      -
                    </button>
                    <div>1</div>
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      +
                    </button>
                  </div>
                  <button className="text-sm sm:text-base font-semibold text-primary-01 scale-animation">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 border-b border-b-light-gray py-5 first:pt-0">
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

                <div className="mt-3 sm:mt-0 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      -
                    </button>
                    <div>1</div>
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      +
                    </button>
                  </div>
                  <button className="text-sm sm:text-base font-semibold text-primary-01 scale-animation">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="py-2 flex justify-between text-sm">
              <div className="text-gray-03">Ціна товару</div>
              <div className="text-gray-01 font-semibold">299.00 грн</div>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <div className="text-gray-03">Доставка</div>
              <div className="text-gray-01 font-semibold">25.00 грн</div>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <div className="text-gray-03">Податки</div>
              <div className="text-gray-01 font-semibold">75.00 грн</div>
            </div>
            <div className="py-2 flex justify-between text-gray-01 font-semibold text-base">
              <div>Загальна ціна</div>
              <div>399.00 грн</div>
            </div>
            <div className="mt-2 flex justify-center">
              <button
                id="confirmOrder"
                disabled={formStep !== 2}
                onClick={confirmOrder}
                form="orderForm"
                className={classNames("btn-primary", {
                  "opacity-70 hover:bg-primary-01 hover:text-white":
                    formStep !== 2,
                })}
              >
                Підтвердити замовлення
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
