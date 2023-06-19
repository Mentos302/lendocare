import React from "react";
import { SvgFooterLogo, SvgLogo } from "../(svg)/AllSvg";

const Footer = () => {
  return (
    <footer className="bg-light-blue" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 mt-20 sm:pt-8 sm:pb-7 lg:pt-16">
        <div className="flex flex-col sm:flex-col-reverse lg:flex-row">
          <div className="flex justify-center lg:justify-start my-5 lg:my-0">
            <SvgLogo />
          </div>
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
              <div className="space-y-4 text-gray-03 text-sm sm:text-base">
                <div>Про нас</div>
              </div>
            </div>
            <div>
              <h3 className="mb-5 sm:mb-8 text-lg font-semibold text-gray-01">
                Контакти
              </h3>
              <div className="space-y-4 text-gray-03 text-sm sm:text-base">
                <div>
                  <span className="font-bold">Email: </span> info@lendocare.com
                </div>
                <div>
                  <span className="font-bold">Phone: </span> 0203 005 2385
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-gray-03 text-sm sm:text-base text-center">
          © Copyright 2023 Lendolabs. All Rights Reserved. Company no. 11910916
        </div>
      </div>
      <div className="block sm:hidden">
        <SvgFooterLogo />
      </div>
    </footer>
  );
};

export default Footer;
