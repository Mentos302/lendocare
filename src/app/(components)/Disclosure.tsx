import React, { FC, PropsWithChildren } from "react";
import {
  Disclosure as HeadlessDisclosure,
  Transition,
} from "@headlessui/react";
import { SvgDropdownArrow } from "../(svg)/AllSvg";
import classNames from "classnames";

type DisclosuresProps = PropsWithChildren<{
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;
  subTitle?: string | undefined;
  defaultClosed?: boolean;
  className?: string;
  error?: boolean;
}>;

const Disclosure: FC<DisclosuresProps> = (props) => {
  const {
    title,
    children,
    icon: Icon = undefined,
    subTitle = "",
    defaultClosed = false,
    error = false,
    className = "",
  } = props;

  return (
    <div
      className={classNames(
        "px-2 sm:px-6 py-10 border border-light-gray rounded-lg",
        className
      )}
    >
      <HeadlessDisclosure defaultOpen={defaultClosed}>
        {({ open }) => (
          <>
            <HeadlessDisclosure.Button
              className={classNames(
                "flex w-full justify-between text-gray-01 items-center font-semibold text-left",
                {
                  "text-primary-01": !open,
                  " text-red-500": error,
                }
              )}
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon />}
                <div>{title}</div>
                <div className="mt-0.75 text-SP500 font-normal text-base">
                  {subTitle}
                </div>
              </div>

              <SvgDropdownArrow
                className={classNames("text-gray-01 h-2 w-3", {
                  "text-primary-01  rotate-180 transform": !open,
                  "text-red-500": error,
                })}
              />
            </HeadlessDisclosure.Button>
            <Transition
              show={!open}
              enter="transition duration-200 ease-in"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-in"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <HeadlessDisclosure.Panel
                static
                className="pt-4 justify-center w-full sm:w-[512px] lg:w-full xl:w-[512px] flex-col flex gap-4  cursor-pointer"
              >
                {children}
              </HeadlessDisclosure.Panel>
            </Transition>
          </>
        )}
      </HeadlessDisclosure>
    </div>
  );
};

export default Disclosure;
