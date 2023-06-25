import React from "react";
import Accordion from "./Accordion";
import { questions } from "../(constants)/faqQuestions";
import faq from "../../../public/images/faq.png";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="container-box">
        <div>
          <div className="mb-14 text-3xl text-gray-01 font-semibold">
            Найчастіше питання?
          </div>
          <div className="flex gap-14 items-start">
            <Accordion questions={questions} />
            <div className="hidden lg:block w-[465px]">
              <Image src={faq} alt="faq" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
