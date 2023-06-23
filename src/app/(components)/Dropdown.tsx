/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import { SvgDropdownArrow, SvgSelectedItem } from "../(svg)/AllSvg";
import { Option } from "@/utils/createDropdownOptions";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type DropdownProps = {
  onChange: (value: string) => void;
  error?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
    | boolean;
  placeholder?: string;
  options: Option[];
  defaultValue?: string | null;
};

const Dropdown: FC<DropdownProps> = (props) => {
  const {
    error = "",
    onChange,
    placeholder = "",
    options,
    defaultValue = null,
  } = props;

  const isOption = (option: any): option is Option =>
    option.id !== undefined && option.name !== undefined;

  function getDefaultOption(value: string | null): Option | null {
    if (typeof value === "string") {
      return (
        options.find((option) => isOption(option) && option.name === value) ??
        null
      );
    }

    return value;
  }

  const [selected, setSelected] = useState<null | Option>(
    getDefaultOption(defaultValue)
  );

  const hasSelectedValue = selected !== null;

  const optionHandler = (e: Option | null) => {
    setSelected(e);
    onChange(e?.name ?? "");
  };

  return (
    <div>
      <Listbox value={selected} onChange={optionHandler}>
        {({ open }) => (
          <div className="relative w-full sm:w-[512px] lg:w-full xl:w-[512px] mt-0.5">
            <Listbox.Button
              className={classNames(
                "h-[38px] w-full sm:w-[512px] lg:w-full xl:w-[512px] bg-white appearance-none rounded-md border px-4 py-2 text-gray-01 shadow-field focus:outline-none text-sm sm:text-base",
                {
                  "border-red-500 focus:border-red-500 focus:ring-red-500":
                    error,
                  "border-gray-01 focus:border-gray-01 focus:ring-gray-01 text-gray-01":
                    !error,
                }
              )}
            >
              <div
                className={classNames("truncate w-full text-left", {
                  "text-gray-01": hasSelectedValue,
                  "text-gray-400": !hasSelectedValue && placeholder,
                })}
              >
                {hasSelectedValue ? selected.name : placeholder}
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <SvgDropdownArrow
                  className={`text-gray-01 ${
                    open ? "rotate-180 transform" : ""
                  }`}
                />
              </div>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full sm:w-[512px] lg:w-full xl:w-[512px] overflow-auto  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm sm:text-base">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        "font-medium relative cursor-pointer select-none py-2 pl-3 pr-3",
                        {
                          "bg-gray-50 ": active,
                          "text-gray-01": !active,
                        }
                      )
                    }
                    value={option}
                  >
                    {({ selected: isSelected }) => (
                      <div className="flex justify-between items-center">
                        <span
                          className={classNames("block truncate", {
                            "font-medium text-primary-01": isSelected,
                            "font-normal": !isSelected,
                          })}
                        >
                          {option.name}
                        </span>
                        {isSelected && <SvgSelectedItem />}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
      {error && typeof error === "object" && (
        <span className="text-red-500 text-xs">
          {error?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export { Dropdown };
