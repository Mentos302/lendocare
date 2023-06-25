"use client";

import parse from "html-react-parser";
import { Product } from "@/app/types";
import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

type propTypes = { product: Product };

const ProductInfo = ({ product }: propTypes) => {
  return (
    <section className="py-10 xl:py-20 bg-primary-50" id="details">
      <div className="container-box">
        <Tab.Group>
          <Tab.List className="mb-5 flex sm:justify-center overflow-x-auto">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={classNames(
                    "w-fit ring-0 ring-offset-0 focus:outline-none ",
                    {
                      "pb-3 px-8 border-b-4 font-semibold text-primary-01 border-primary-01":
                        selected,
                      "pb-3 px-8 border-b-4 font-semibold text-gray-01 border-transparent":
                        !selected,
                    }
                  )}
                >
                  Опис
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={classNames(
                    "w-fix ring-0 ring-offset-0 focus:outline-none ",
                    {
                      "pb-3 px-8 border-b-4 font-semibold text-primary-01 border-primary-01":
                        selected,
                      "pb-3 px-8 border-b-4 font-semibold text-gray-01 border-transparent":
                        !selected,
                    }
                  )}
                >
                  Характеристики
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={classNames(
                    "w-fit ring-0 ring-offset-0 focus:outline-none ",
                    {
                      "pb-3 px-8 border-b-4 font-semibold text-primary-01 border-primary-01":
                        selected,
                      "pb-3 px-8 border-b-4 font-semibold text-gray-01 border-transparent":
                        !selected,
                    }
                  )}
                >
                  Доставка
                </button>
              )}
            </Tab>
            {/* <div className="absolute bottom-0 w-full border-b-4" /> */}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="p-7 rounded-lg bg-white">
                <b className="block text-bold text-2xl mb-5">Опис</b>
                <div className="text-bold text-base sm:text-lg">
                  {parse(product.description)}
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-7 rounded-lg bg-white">
                <b className="block text-bold text-2xl mb-5">Характеристики</b>
                <div className="text-bold text-base sm:text-lg">
                  {parse(product.description)}
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-7 rounded-lg bg-white">
                <b className="block text-bold text-2xl mb-5">Доставка</b>
                <div className="text-bold text-base sm:text-lg">
                  {parse(product.description)}
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default ProductInfo;
