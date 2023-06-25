import React from "react";
import { SvgFooterLogo, SvgLogo } from "../(svg)/AllSvg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light-blue" aria-labelledby="footer-heading">
      <div className="container-box sm:pt-8 lg:pb-7 lg:pt-16">
        <div className="flex flex-col sm:flex-col-reverse lg:flex-row">
          <a
            href="/"
            className="flex justify-center lg:justify-start my-5 lg:my-0"
          >
            <SvgLogo />
          </a>

          <div className="w-full flex flex-col sm:flex-row justify-center gap-5 sm:gap-0 items-center sm:items-start sm:justify-around text-center sm:text-start">
            <div>
              <h3 className="mb-5 sm:mb-8 text-lg font-semibold text-gray-01">
                Працюй з нами
              </h3>
              <div className="space-y-4 text-gray-03 text-sm sm:text-base">
                <div>Постачальник</div>
                <div>Комерційний партнер</div>
              </div>
            </div>
            <div>
              <h3 className="mb-5 sm:mb-8 text-lg font-semibold text-gray-01">
                Компанія
              </h3>
              <div className="space-y-4 text-gray-03 text-sm sm:text-base scale-animation">
                <Link href="/about-us">Про нас</Link>
              </div>
            </div>
            <div>
              <h3 className="mb-5 sm:mb-8 text-lg font-semibold text-gray-01">
                Контакти
              </h3>
              <div className="space-y-4 text-gray-03 text-sm sm:text-base">
                <div>
                  <span className="font-bold">Email: </span>{" "}
                  <a href="mailto: info@lendocare.com">info@lendocare.com</a>
                </div>
                <div>
                  <span className="font-bold">Phone: </span>{" "}
                  <a href="tel:+02030052385">+ 0203 005 2385</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 lg:mt-10 text-gray-03 text-sm sm:text-base text-center">
          © Copyright 2023 Lendolabs. All Rights Reserved. Company no. 11910916
        </div>
      </div>
      <div className="block lg:hidden">
        <SvgFooterLogo />
      </div>
    </footer>
  );
};

export default Footer;
