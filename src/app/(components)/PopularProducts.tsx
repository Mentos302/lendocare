import Link from "next/link";
import React from "react";

const PopularProducts = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="container-box">
        <div className="md:w-[632px] mb-10 md:mb-14 space-y-4">
          <div className="text-sm sm:text-xl font-semibold text-primary-01">
            Обладнання в наявності
          </div>
          <div className="text-xl sm:text-3xl text-gray-01 font-semibold">
            Найпопулярніші товари
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link
            href="/catalog"
            className="w-[286px] border border-gray-04 rounded-2xl scale-animation"
          >
            <div className="bg-gray-400 h-[200px] rounded-t-2xl"></div>
            <div className="p-6 text-gray-01">
              <div className="mb-3 text-base sm:text-lg font-semibold">
                Інвалідні візки
              </div>
              <div className="text-sm sm:text-base font-medium">
                Пропонуємо в оренду/прокат інвалідні візки.
              </div>
            </div>
          </Link>
          <Link
            href="/catalog"
            className="w-[286px] border border-gray-04 rounded-2xl scale-animation"
          >
            <div className="bg-gray-400 h-[200px] rounded-t-2xl"></div>
            <div className="p-6 text-gray-01">
              <div className="mb-3 text-base sm:text-lg font-semibold">
                Інвалідні візки з опорою для правої ноги
              </div>
              <div className="text-sm sm:text-base font-medium">
                Пропонуємо в оренду/прокат інвалідні візки з опорою для.
              </div>
            </div>
          </Link>
          <Link
            href="/catalog"
            className="w-[286px] border border-gray-04 rounded-2xl scale-animation"
          >
            <div className="bg-gray-400 h-[200px] rounded-t-2xl"></div>
            <div className="p-6 text-gray-01">
              <div className="mb-3 text-base sm:text-lg font-semibold">
                Оренда роллаторів
              </div>
              <div className="text-sm sm:text-base font-medium">
                We empower you to decide the domestic care you receive and how
                it is delivered.
              </div>
            </div>
          </Link>
          <Link
            href="/catalog"
            className="w-[286px] border border-gray-04 rounded-2xl scale-animation"
          >
            <div className="bg-gray-400 h-[200px] rounded-t-2xl"></div>
            <div className="p-6 text-gray-01">
              <div className="mb-3 text-base sm:text-lg font-semibold">
                2 в 1 Роллатор-візок
              </div>
              <div className="text-sm sm:text-base font-medium">
                We empower you to decide the domestic care you receive and how
                it is delivered.
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
