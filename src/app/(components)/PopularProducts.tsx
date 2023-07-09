import Link from "next/link";
import React from "react";
import Image from "next/image";

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
            href="/catalog?cat=153"
            className="w-[286px] border border-gray-border rounded-2xl scale-animation p-y4"
          >
            <div
              className="relative p-4"
              style={{ height: "220px", width: "100%" }}
            >
              <Image
                src="/images/wheelchair.jpg"
                fill
                style={{ objectFit: "contain" }}
                alt="Інвалідний візок"
              />
            </div>
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
            href="/catalog?cat=153"
            className="w-[286px] border border-gray-border rounded-2xl scale-animation overflow-hidden"
          >
            <div
              className="relative p-4"
              style={{ height: "220px", width: "100%" }}
            >
              <Image
                src="/images/wheelleg.png"
                fill
                style={{ objectFit: "contain" }}
                alt="Інвалідний візок"
              />
            </div>

            <div className="p-6 text-gray-01">
              <div className="mb-3 text-base sm:text-lg font-semibold">
                Інвалідні візки з опорою для ноги
              </div>
              <div className="text-sm sm:text-base font-medium">
                Пропонуємо в оренду/прокат інвалідні візки з опорою для ноги.
              </div>
            </div>
          </Link>
          <Link
            href="/catalog?cat=154"
            className="w-[286px] border border-gray-border rounded-2xl scale-animation"
          >
            <div
              className="relative p-4"
              style={{ height: "220px", width: "100%" }}
            >
              <Image
                src="/images/rollator.png"
                fill
                style={{ objectFit: "contain" }}
                alt="Інвалідний візок"
              />
            </div>
            <div className="p-6 text-gray-01">
              <div className="mb-3 text-base sm:text-lg font-semibold">
                Ролатори
              </div>
              <div className="text-sm sm:text-base font-medium">
                Пропонуємо в оренду/прокат ролатори та ходулі.
              </div>
            </div>
          </Link>
          <Link
            href="/catalog?cat=154"
            className="w-[286px] border border-gray-border rounded-2xl scale-animation"
          >
            <div
              className="relative p-4"
              style={{ height: "220px", width: "100%" }}
            >
              <Image
                src="/images/rollator21.png"
                fill
                style={{ objectFit: "contain" }}
                alt="Інвалідний візок"
              />
            </div>
            <div className="p-6 text-gray-01">
              <div className="mb-3 text-base sm:text-lg font-semibold">
                2 в 1 Роллатор-візок
              </div>
              <div className="text-sm sm:text-base font-medium">
                Пропонуємо в оренду/прокат ролатор-візок 2 в 1 .
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
