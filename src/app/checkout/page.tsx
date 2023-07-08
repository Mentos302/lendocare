"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SvgDateFinish, SvgDateStart } from "../(svg)/AllSvg";
import ContactInfoForm from "./(components)/ContactInfoForm";
import { ShippingForm } from "./(components)/ShippingForm";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/modules/cart/store";
import Link from "next/link";
import { useCheckout } from "./(model)/useCheckout";

const Checkout = () => {
  const submitCheckout = useCheckout();
  const router = useRouter();
  const [formStep, setFormStep] = useState(0);
  const ref = useRef(new FormData());
  const { cart } = useCartStore((state) => state);
  const formData = ref.current;

  const confirmOrder = async () => {
    await submitCheckout();

    // SUCCESS TOAST
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
          {cart.map((item) => (
            <div className="w-full flex gap-4 border-b border-b-light-gray py-5 first:pt-0">
              <Link href={`/product/${item.lendoProductId}`}>
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
              <div className="w-full flex flex-col">
                <div className="flex items-center justify-between">
                  <Link href={`/product/${item.lendoProductId}`}>
                    <div className="font-semibold">{item.name}</div>
                  </Link>
                  <div className="border-2 border-primary-01 py-1 px-2 text-sm text-primary-01 font-semibold rounded-lg">
                    {item.price} грн
                  </div>
                </div>
                <div className="text-gray-03 text-sm font-medium">
                  <div>
                    {item.startDate !== item.endDate ? "Термін " : "Початок "}
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
              </div>
            </div>
          ))}
          <div className="mt-2">
            <div className="py-2 flex justify-between text-sm">
              <div className="text-gray-03">Ціна товару</div>
              <div className="text-gray-01 font-semibold">
                {cart.reduce((total, item) => total + item.price, 0)} грн
              </div>
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
              <div>
                {cart.reduce((total, item) => total + item.price, 0)} грн
              </div>
            </div>
            <div className="w-full mt-2 flex justify-end">
              <button
                id="confirmOrder"
                disabled={formStep !== 2}
                onClick={confirmOrder}
                form="orderForm"
                className={classNames("btn-primary mt-3", {
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
