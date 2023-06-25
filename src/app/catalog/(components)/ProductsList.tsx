import apiClient from "@/utils/http-common";
import { Product, ProductResponse } from "@/app/types";
import { ALL_CATEGORIES } from "@/utils/static-categories";
import { useQuery } from "@tanstack/react-query";
import { SvgAddToCart, SvgLike, SvgWatch } from "@/app/(svg)/AllSvg";
import Link from "next/link";
import "/styles/productCart.scss";
import Prices from "./Prices";
import Image from "next/image";
import ProductSkeleton from "./ProductSkeleton";

async function getProducts(categories: number[]) {
  const res = await apiClient.post("enquiry", {
    productSubCategoryIds: categories.length ? categories : ALL_CATEGORIES,
    countryCode: process.env.NEXT_PUBLIC_COUNTRY_CODE,
  });

  return res.data;
}

const ProductsList = ({ categories }: { categories: number[] }) => {
  const { data, isLoading, error } = useQuery<ProductResponse[]>(
    ["products", categories],
    () => getProducts(categories)
  );

  if (error) return "Error";

  const getFirstSentence = (text: string) => {
    const firstPeriodIndex = text.indexOf(".");

    const firstSentence = text.slice(0, firstPeriodIndex + 1);

    return firstSentence.trim();
  };

  const skeletons = [...new Array(3)].map((_, index) => (
    <ProductSkeleton key={index} />
  ));

  console.log(data);

  if (data)
    return (
      <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
        {isLoading
          ? skeletons
          : data.map((product: ProductResponse) => (
              <Link
                className="w-[290px] flex flex-col border border-light-gray rounded-lg mb-6"
                key={product.lendoProduct.name}
                href={`/product/${product.lendoProduct.lendoProductId}`}
              >
                <div className="!h-[300px] mb-4 actions">
                  <div className="imagesWrapper rounded-lg">
                    <Image
                      className="hover:opacity-[.85] rounded-t-lg transition-all duration-300"
                      fill
                      src={product.lendoProduct.image}
                      alt="chair"
                    />
                  </div>
                  <div className="itemBtns">
                    <div className="button">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                        className="icon"
                      >
                        <SvgLike />
                      </div>
                      <span className="buttonTitle">В бажане</span>
                    </div>
                    <div className="button">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                        className="icon"
                      >
                        <SvgWatch />
                      </div>
                      <span className="buttonTitle">Оглянути</span>
                    </div>
                    <div className="button">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                        className="icon"
                      >
                        <SvgAddToCart />
                      </div>
                      <span className="buttonTitle">Замовити</span>
                    </div>
                  </div>
                </div>
                <div className="item flex flex-col px-5">
                  <div className="mb-4 text-gray-01 font-semibold text-lg lg:text-xl">
                    {product.lendoProduct.name}
                  </div>
                  <div className="min-h-[120px] flex justify-end h-full flex-col justify-between">
                    <div className="text-sm">
                      {getFirstSentence(
                        product.lendoProduct.description.replace(
                          /<\/?[^>]+(>|$)/g,
                          ""
                        )
                      )}
                    </div>
                    <div className="p-1 text-center border-2 border-primary-01 rounded-lg text-primary-01 font-semibold text-lg scale-animation">
                      Від 200₴ / тиждень
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    );
};

export default ProductsList;
