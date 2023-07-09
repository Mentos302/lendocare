import React from "react";
import hero from "/public/images/hero.png";
import heroMobile from "/public/images/hero-mobile.png";
import Image from "next/image";
import { SvgHeroArrow } from "../(svg)/AllSvg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container-box">
      <div className="flex flex-col items-start justify-between lg:flex-row lg:px-0 lg:gap-8">
        <div className="lg:min-w-[505px]">
          <div className="justify-end hidden mt-6 lg:flex">
            <SvgHeroArrow />
          </div>
          <div className="lg:-mt-10 space-y-5">
            <div className="sm:space-y-4">
              <div className="font-semibold text-4xl sm:text-[50px]">
                Оренда речей
              </div>
              <div className="font-semibold text-4xl sm:text-[50px] text-primary-01">
                LendoCare
              </div>
            </div>
            <div className="text-lg font-medium text-gray-01">
              Оренда обладнання для людей в інвалідністю без жодних проблем.
              Забезпечення доступності медичного обладнання та технологій для
              використання вдома через оренду.
            </div>
            <div className="sm:pt-4 space-x-4 sm:space-x-6">
              <Link href="/catalog" className="btn-primary">
                Каталог
              </Link>
              <a href="#stepper" className="btn-outline">
                Детальніше
              </a>
            </div>
          </div>
        </div>
        <div className="hidden my-auto lg:block">
          <Image src={hero} alt="hero" />
        </div>
        <div className="mt-5 flex justify-end w-full lg:hidden">
          <div className="w-[550px]">
            <Image src={heroMobile} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
