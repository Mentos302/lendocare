import "@fancyapps/ui/dist/fancybox/fancybox.css";

import Fancybox from "./Fancybox";
import { Product } from "@/app/types";
import Image from "next/image";

type propTypes = { product: Product };

const ProductGallery = ({ product }: propTypes) => {
  const thumbnail = product.image;
  const photos = [product.image1, product.image2, product.image3].filter(
    (p) => p
  ) as string[];

  return (
    <div className="mx-auto lg:w-[625px]">
      <Fancybox
        options={{
          Carousel: {
            infinite: true,
          },
        }}
      >
        <a data-fancybox="gallery" href={thumbnail} className="block mb-5">
          <Image
            width={578}
            height={578}
            src={thumbnail}
            className=" rounded-2xl"
            alt="product image"
          />
        </a>
        <div className="flex gap-5 px-3">
          {photos.map((photo, i) => (
            <a
              data-fancybox="gallery"
              href={photo}
              className="block mb-3"
              key={i}
            >
              <Image
                width={115}
                height={115}
                src={photo}
                className="w-full rounded-2xl"
                alt="product image"
              />
            </a>
          ))}
        </div>
      </Fancybox>
    </div>
  );
};

export default ProductGallery;
