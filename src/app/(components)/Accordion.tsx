"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { FC } from "react";
import { Question } from "../(constants)/faqQuestions";
import { SvgArrow } from "../(svg)/AllSvg";

const transitionStyles = {
  entering: { opacity: 1, maxHeight: "1000px", color: "red" },
  entered: { opacity: 1, maxHeight: "1000px", color: "yellow" },
  exiting: {
    maxHeight: 0,
    transition: "max-height 1s cubic-bezier(0, 1, 0, 1)",
  },
  exited: {
    opacity: 0,
    maxHeight: 0,
    visibility: "hidden",
    transition: `max-height 0.6s cubic-bezier(1, 0, 1, 0)`,
  },
};

type AccordionProps = {
  questions: Question[];
};

const Accordion: FC<AccordionProps> = (props) => {
  const { questions } = props;

  return (
    <div className="w-full lg:w-fit flex flex-col gap-4">
      {questions.map((item, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <div className="w-full lg:w-[550px] xl:w-[678px] border border-gray-border rounded-2xl">
              <Disclosure.Button className="text-start flex justify-between items-center w-full p-6">
                <h3 className="text-lg font-bold">{item.question}</h3>{" "}
                <SvgArrow
                  className={`${
                    open ? "rotate-180" : ""
                  } transition-all duration-200`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition-opacity duration-300 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Disclosure.Panel className="px-6 pb-6">
                  <p>{item.answer}</p>
                </Disclosure.Panel>
              </Transition>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Accordion;
