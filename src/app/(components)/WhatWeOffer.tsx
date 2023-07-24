import React from "react";
import {
  SvgOffer01,
  SvgOffer02,
  SvgOffer03,
  SvgOffer04,
} from "../(svg)/AllSvg";

const WhatWeOffer = () => {
  return (
    <div className="py-10 lg:py-16 bg-light-blue">
      <div className="container-box">
        <div className="sm:w-[486px] mb-10 md:mb-14 space-y-4">
          <div className="text-xl sm:text-3xl text-gray-01 font-semibold">
            Що ми пропонуємо
          </div>
          <div className="text-gray-03 text-sm md:text-lg font-medium">
            Доступ до медичного обладнання ще ніколи не був таким простим.
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="w-[286px] p-6 border border-gray-border rounded-2xl bg-white">
            <SvgOffer01 />
            <div className="mt-7 mb-3 text-gray-01 font-semibold text-base sm:text-lg">
              Швидко і легко
            </div>
            <div className="text-sm sm:text-base font-medium">
              LendoCare надає вам доступ до широкого спектру товарів, доступних
              для оренди по всій Україні, і все це в одному місці.
            </div>
          </div>
          <div className="w-[286px] p-6 border border-gray-border rounded-2xl bg-white">
            <SvgOffer02 />
            <div className="mt-7 mb-3 text-gray-01 font-semibold text-base sm:text-lg">
              Гнучко
            </div>
            <div className="text-sm sm:text-base font-medium">
              Легко змінюйте орендні товари відповідно до ваших потреб.
              Продовжте або скоротіть час оренди одним натисканням кнопки.
            </div>
          </div>
          <div className="w-[286px] p-6 border border-gray-border rounded-2xl bg-white">
            <SvgOffer03 />
            <div className="mt-7 mb-3 text-gray-01 font-semibold text-base sm:text-lg">
              Миттєве бронювання
            </div>
            <div className="text-sm sm:text-base font-medium">
              Перегляньте товари, які вас цікавлять та доступні на потрібні вам
              дати і забронюйте їх в один клік.
            </div>
          </div>
          <div className="w-[286px] p-6 border border-gray-border rounded-2xl bg-white">
            <SvgOffer04 />
            <div className="mt-7 mb-3 text-gray-01 font-semibold text-base sm:text-lg">
              Ви на першому місці
            </div>
            <div className="text-sm sm:text-base font-medium">
              Отримайте найкращий сервіс та перевірене європейське обладнання.
              Ми працюємо над тим, щоб постійно оновлювати доступні товари.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
