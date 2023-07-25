import { Product } from "@/app/types";
import Image from "next/image";

type propTypes = {
  product?: Product;
};

const Specifications = ({ product }: propTypes) => {
  const isMaxUserWeight = product?.productSpecifications?.find(
    (option) => option.name === "Max user weight"
  );
  const isSeatWidth = product?.productSpecifications?.find(
    (option) => option.name === "Seat width"
  );

  return (
    <div className="flex flex-wrap gap-3.5 mb-3.5">
      {isSeatWidth && (
        <div className="min-w-fit flex items-center gap-2.5 py-2 px-2.5 border border-gray-200 rounded-md">
          <Image
            src="/images/specs/wheelchair.png"
            height={32}
            width={21}
            alt="wheelchair"
          />
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-01">Ширина сидіння</span>
            <b className="font-semibold	text-[12px] text-gray-01">
              {isSeatWidth.measurement} см
            </b>
          </div>
        </div>
      )}
      {isMaxUserWeight && (
        <div className="min-w-fit flex items-center gap-2.5 py-2 px-2.5 border border-gray-200 rounded-md">
          <Image
            src="/images/specs/capacity.png"
            height={32}
            width={21}
            alt="wheelchair"
          />
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-01">Макс. навантаження</span>
            <b className="font-semibold	text-[12px] text-gray-01">
              {" "}
              {isMaxUserWeight.measurement} кг
            </b>
          </div>
        </div>
      )}
      {product?.width !== null && (
        <div className="min-w-fit flex items-center gap-2.5 py-2 px-2.5 border border-gray-200 rounded-md">
          <Image
            src="/images/specs/width.png"
            height={32}
            width={21}
            alt="wheelchair"
          />
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-01">Ширина</span>
            <b className="font-semibold	text-[12px] text-gray-01">
              {product?.width} см
            </b>
          </div>
        </div>
      )}
    </div>
  );
};

export default Specifications;
