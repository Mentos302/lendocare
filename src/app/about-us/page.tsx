import Image from "next/image";
import React from "react";
import descAboutUs from "../../../public/images/about-us-desc.png";
import mobAboutUs from "../../../public/images/about-us-mob.png";
import founders from "../../../public/images/founders.png";

const AboutUs = () => {
  return (
    <div className="mb-20">
      <div className="bg-primary-04 mb-10">
        <div className="container-box relative h-[424px]">
          <div className="text-primary-01 font-semibold text-4xl md:text-[80px] text-center pt-11 md:pt-28 lg:pr-14">
            Про нас
          </div>
          <div className="hidden md:block absolute bottom-0">
            <Image src={descAboutUs} alt="about us" />
          </div>
          <div className=" w-[266px] block md:hidden absolute bottom-0 right-0 left-1/2 transform -translate-x-[38%]">
            <Image src={mobAboutUs} height={398} width={266} alt="about us" />
          </div>
        </div>
      </div>
      <div className="container-box flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-20 justify-between items-center">
          <div className="lg:w-[620px] flex flex-col gap-5">
            <div className="font-medium text-lg md:text-2xl">
              Ми є частиною <span className="text-primary-01">Lendo</span>{" "}
              сім&apos;ї.
            </div>
            <div className="border-b border-b-gray-02 w-24" />
            <div className="font-semibold text-xl sm:text-4xl">
              Якесь дуже мудре речення знову мудре речення про нас речення
            </div>
            <div className="text-gray-02">
              Наша мета — надати клієнтам легкий доступ до оренди медичного
              обладнання та техніки вдома. Ми знаходимо для вас усі необхідні
              продукти та спрощуємо бронювання та керування замовленнями оренди
              в одному місці.
            </div>
            <button className="mt-4 lg:mt-10 btn-primary w-64">
              Більше про Lendo
            </button>
          </div>
          <div className="relative max-w-[628px] mx-auto lg:mx-0 max-h-[628px] lg:w-[628px] lg:h-[628px]">
            <Image src={founders} alt="Founders" />
            <div className="mt-1 text-gray-01 font-medium text-end text-xs md:text-base">
              Соломія та Роман - засновники LendoCare
            </div>
          </div>
        </div>
        <div>
          <div className="font-medium text-2xl text-center">
            Наша мета
            <div className="mt-4 border-gray-02 border-b w-[123px] mx-auto" />
          </div>
          <div className="w-full mt-8 lg:mt-14 flex flex-col lg:flex-row gap-8 xl:gap-24">
            <div className="mx-auto w-full sm:w-96 lg:w-[290px] text-center">
              <div className="mb-3 font-semibold text-2xl lg:text-3xl">
                Доступність
              </div>
              <div className="text-gray-02">
                Спростіть пошук і бронювання необхідного обладнання. Немає
                нічого гіршого, ніж побачити
              </div>
            </div>
            <div className="lg:w-0 w-[123px] lg:mx-0 mx-auto border-b border-b-gray-02 lg:border-r lg:border-r-gray-02" />
            <div className="mx-auto w-full sm:w-96 lg:w-[290px] text-center">
              <div className="mb-3 font-semibold text-2xl lg:text-3xl">
                Доступність
              </div>
              <div className="text-gray-02">
                Спростіть пошук і бронювання необхідного обладнання. Немає
                нічого гіршого, ніж побачити
              </div>
            </div>
            <div className="lg:w-0 w-[123px] lg:mx-0 mx-auto border-b border-b-gray-02 lg:border-r lg:border-r-gray-02" />
            <div className="mx-auto w-full sm:w-96 lg:w-[290px] text-center">
              <div className="mb-3 font-semibold text-2xl lg:text-3xl">
                Доступність
              </div>
              <div className="text-gray-02">
                Спростіть пошук і бронювання необхідного обладнання. Немає
                нічого гіршого, ніж побачити
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
