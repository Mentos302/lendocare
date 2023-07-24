"use client";

import parse from "html-react-parser";
import { Product, productSpecification } from "@/app/types";
import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";

type propTypes = { product: Product };

const ProductInfo = ({ product }: propTypes) => {
  console.log("xxx", product);
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
            {product.description ? (
              <Tab.Panel>
                <div className="p-4 sm:p-7 rounded-lg bg-white">
                  <b className="block text-bold text-2xl mb-5">Опис</b>
                  <div className="text-bold text-base sm:text-lg">
                    {parse(product.description)}
                  </div>
                </div>
              </Tab.Panel>
            ) : null}
            <Tab.Panel>
              <div className="p-4 sm:p-7 rounded-lg bg-white">
                <b className="block text-bold text-2xl mb-5">Характеристики</b>
                <div className="sm:border rounded-lg p-0 sm:p-5 border-light-gray text-bold text-base sm:text-lg space-y-2">
                  <div className="border rounded-lg px-4 p-2 border-light-gray w-full flex justify-between">
                    <div className="min-w-[50%] font-medium mr-4">Ширина:</div>
                    <div className="sm:min-w-[50%]"> {product.width}</div>
                  </div>
                  <div className="border rounded-lg px-4 p-2 bg-gray-100 border-light-gray w-full flex justify-between">
                    <div className="min-w-[50%] font-medium mr-4">Довжина:</div>
                    <div className="sm:min-w-[50%]"> {product.length}</div>
                  </div>
                  <div className="border rounded-lg px-4 p-2 border-light-gray w-full flex justify-between">
                    <div className="min-w-[50%] font-medium mr-4">Висота: </div>{" "}
                    <div className="sm:min-w-[50%]">{product.height}</div>
                  </div>
                  {product?.productSpecifications?.map(
                    (specification: productSpecification) => (
                      <div
                        className="border rounded-lg px-4 p-2 border-light-gray w-full flex justify-between even:bg-gray-100"
                        key={specification.name}
                      >
                        <div className="font-medium min-w-[50%] mr-4">
                          {specification.name}:
                        </div>
                        <div className="sm:min-w-[50%]">
                          {specification.measurement}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-4 sm:p-7 rounded-lg bg-white">
                <b className="block text-bold text-2xl mb-5">Доставка</b>
                <div className="text-bold text-base sm:text-lg">
                  Доставка здійснюється перевізником &quot;Нова Пошта&quot;. Ви
                  можете обрати один з варіантів доставки:
                  <div> - доставка у відділення НП</div>
                  <div>- адресна доставка кур&apos;єром</div>
                  <div className="mt-1">
                    Обрати зручний для вас спосіб ви зможете при оформленні
                    замовлення.
                  </div>
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
