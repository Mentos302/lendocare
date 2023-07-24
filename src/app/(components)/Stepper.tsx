import React from "react";
import { SvgStepChose, SvgStepOrder, SvgStepSearch } from "../(svg)/AllSvg";
import Link from "next/link";

const Stepper = () => {
  return (
    <div id="stepper" className="mt-10 py-10 lg:py-16 bg-light-blue">
      <div className="container-box">
        <div className="md:w-[632px] mb-10 md:mb-14 space-y-4">
          <div className="text-sm sm:text-xl font-semibold text-primary-01">
            Отримайте обладнання, яке вам потрібно
          </div>
          <div className="text-xl sm:text-3xl text-gray-01 font-semibold">
            Орендувати обладнання можна в декілька простих кроків
          </div>
        </div>
        <div className="flex flex-wrap xl:justify-between justify-center gap-4 lg:gap-6">
          <div className="flex flex-col justify-between w-full md:w-[340px] lg:w-[365px] border border-gray-border rounded-2xl bg-white">
            <div>
              <div className="relative h-[260px] bg-primary-01 rounded-t-2xl">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <SvgStepSearch />
                </div>
              </div>
              <div className="flex flex-col gap-6 md:gap-12 justify-between p-4 sm:py-6 sm:px-8">
                <div className="text-gray-01">
                  <div className="mb-3 text-base sm:text-xl font-semibold">
                    Оберіть обладнання
                  </div>
                  <div className="text-sm sm:text-base font-medium">
                    Вдома чи у відпустці - знайдіть обладнання, яке підійде саме
                    вам.
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/catalog"
              className="w-fit px-4 pb-4 sm:pb-8 sm:px-8 font-semibold text-primary-01 text-start scale-animation"
            >
              Обрати
            </Link>
          </div>
          <div className="flex flex-col justify-between w-full md:w-[340px] lg:w-[365px] border border-gray-border rounded-2xl bg-white">
            <div>
              <div className="relative h-[260px] bg-primary-01 rounded-t-2xl">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <SvgStepChose />
                </div>
              </div>
              <div className="flex flex-col gap-6 md:gap-12 justify-between p-4 sm:py-6 sm:px-8">
                <div className="text-gray-01">
                  <Link
                    href="/catalog"
                    className="block mb-3 text-base sm:text-xl font-semibold"
                  >
                    Оформіть замовлення
                  </Link>
                  <div className="text-sm sm:text-base font-medium">
                    Подивіться, яке обладнання доступне для прокату на ваші
                    дати.
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/catalog"
              className="w-fit px-4 pb-4 sm:pb-8 sm:px-8 font-semibold text-primary-01 text-start scale-animation"
            >
              Каталог
            </Link>
          </div>
          <div className="w-full flex flex-col justify-between md:w-[340px] lg:w-[365px] border border-gray-border rounded-2xl bg-white">
            <div>
              <div className="relative h-[260px] bg-primary-01 rounded-t-2xl">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <SvgStepOrder />
                </div>
              </div>
              <div className="flex flex-col gap-6 md:gap-12 justify-between p-4 sm:py-6 sm:px-8">
                <div className="text-gray-01">
                  <div className="mb-3 text-base sm:text-xl font-semibold">
                    Орендуйте
                  </div>
                  <div className="text-sm sm:text-base font-medium">
                    Додайте в кошик та сплатіть. Легко керуйте прокатом
                    обладнання через свій обліковий запис у LendoCare.
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/catalog"
              className="w-fit px-4 pb-4 sm:pb-8 sm:px-8 font-semibold text-primary-01 text-start scale-animation"
            >
              Орендувати
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
