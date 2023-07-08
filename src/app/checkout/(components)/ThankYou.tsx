import { SvgThankYou } from "@/app/(svg)/AllSvg";
import Link from "next/link";
import React from "react";

const ThankYou = () => {
  return (
    <div className="mx-auto mt-10 mb-20 md:h-[420px] w-full xl:w-[960px] bg-thank-blue flex flex-col md:flex-row justify-between p-5 sm:px-20 sm:py-16 border border-light-blue rounded-lg shadow-field">
      <div>
        {" "}
        <div className="font-semibold text-4xl sm:text-5xl text-gray-03">
          Дякуємо!
        </div>
        <div className="mt-4 font-semibold text-xl sm:text-3xl text-gray-01">
          Замовлення отримано!
        </div>
        <div className="mt-4 sm:mt-10 font-semibold text-xl text-primary-01">
          Ми з вами зв&apos;яжемося!
        </div>
        <Link className="block btn-primary w-fit mt-4 text-base py-3" href="/">
          На головну
        </Link>
      </div>
      <div className="mt-4 sm:mt-0 flex justify-end md:justify-start">
        <SvgThankYou />
      </div>
    </div>
  );
};

export default ThankYou;
