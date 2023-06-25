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
              <>
                <b className="block text-bold text-2xl mb-5">Опис</b>
                <div className="text-bold text-base sm:text-lg">
                  {parse(product.description)}
                </div>
              </>
            </Tab.Panel>
            <Tab.Panel>
              <>
                <b className="block text-bold text-2xl mb-5">Характеристики</b>
                <div className="text-bold text-base sm:text-lg">
                  {parse(product.description)}
                </div>
              </>
            </Tab.Panel>
            <Tab.Panel>
              <>
                <b className="block text-bold text-2xl mb-5">Доставка</b>
                <div className="text-bold text-base sm:text-lg">
                  {parse(product.description)}
                </div>
              </>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {/* <div className="mb-6 flex text-gray-05">
          <button
            className="pb-3 px-8 border-b-4 font-semibold text-primary-01 border-primary-01"
            onClick={() => setActiveTab("description")}
          >
            Опис
          </button>
          <button
            className="pb-3 px-8 border-b-4 border-gray-300"
            onClick={() => setActiveTab("specs")}
          >
            Характеристики
          </button>
          <button
            className="pb-3 px-8 border-b-4 border-gray-300"
            onClick={() => setActiveTab("delivery")}
          >
            Доставка
          </button>
          <div className="w-full border-b-4 border-gray-300"></div>
        </div>
        <div className="px-6 py-7 rounded-lg bg-white">
          {activeTab === "description" ? (
            <>
              <b className="block text-bold text-2xl mb-5">Опис</b>
              <div className="text-bold text-lg">
                {parse(product.description)}
              </div>
            </>
          ) : (
            ""
          )}
          {activeTab === "specs" ? (
            <>
              <b className="block text-bold text-2xl mb-5">Характеристики</b>
              <div className="text-bold text-lg">
                {parse(product.description)}
              </div>
            </>
          ) : (
            ""
          )}
          {activeTab === "delivery" ? (
            <>
              <b className="block text-bold text-2xl mb-5">Доставка</b>
              <div className="text-bold text-lg">
                {parse(product.description)}
              </div>
            </>
          ) : (
            ""
          )}
        </div> */}
      </div>
    </section>
  );
};

export default ProductInfo;
