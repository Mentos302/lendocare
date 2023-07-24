"use client";

import { ProductBreadcrumb } from "./ProductBreadcrumb";
import Specifications from "./Specifications";
import Sticky from "react-stickynode";
import ProductGallery from "./ProductGallery";
import { Product } from "@/app/types";
import ProductPricing from "./ProductPricing";
import HowItWorks from "./HowItWorks";
import { getFirstSentence } from "@/utils/getFirstSentence";
import { Ordering } from "./Ordering";

type propTypes = { product: Product };

const ProductMain = ({ product }: propTypes) => {
  const photos = [product.image1, product.image2, product.image3].filter(
    (p) => p
  ) as string[];

  return (
    <section className="pb-10 xl:pb-20">
      <div className="container-box flex flex-col items-start gap-6 lg:flex-row lg:gap-8">
        <ProductGallery product={product} />
        <Sticky
          enabled={photos.length === 1}
          top={50}
          bottomBoundary={1300}
          className="mx-auto lg:w-[500px] xl:min-w-[580px]"
        >
          <>
            <ProductBreadcrumb product={product} />
            <h1 className="font-semibold text-2xl md:text-4xl leading-12 text-gray-01 mb-4">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base text-gray-05 mb-5">
              {product.description
                ? getFirstSentence(
                    product.description.replace(/<\/?[^>]+(>|$)/g, "")
                  )
                : null}
            </p>
            <Specifications />
            <a
              href="#details"
              className="block font-medium text-sm text-primary-01 mb-4"
            >
              Детальніше
            </a>
            <ProductPricing pricing={product.pricePlan}>
              <Ordering
                name={product.name}
                prices={product.pricePlan.priceSchedule}
                id={product.lendoProductId}
                thumb={product.image}
              />
            </ProductPricing>
            <HowItWorks />
          </>
        </Sticky>
      </div>
    </section>
  );
};

export default ProductMain;
