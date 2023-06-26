import { SvgCalendar, SvgClock } from "@/app/(svg)/AllSvg";
import { Pricing } from "@/app/types";

type propTypes = { pricing: Pricing };

const ProductPricing = ({ pricing }: propTypes) => {
  const minPrice =
    pricing.priceSchedule[pricing.priceSchedule.length - 1].totalPrice;

  return (
    <div className="py-[25px] border-y border-gray-300">
      <div className="flex gap-2.5 font-semibold text-xl md:text-2xl text-gray-01 mb-4">
        <span>Від</span>
        <span className="px-2 text-primary-01 bg-primary-50">{minPrice}</span>
        <span>грн/тиждень</span>
      </div>
      <div className="flex gap-1.5 items-center text-primary-01 cursor-pointer mb-4">
        <SvgClock />
        <span className="text-sm">
          Ціна залежить від терміну оренди обладнання
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-lg sm:text-xl font-medium text-white">
        <button className="min-w-fit flex items-center justify-center gap-2.5 py-2.5 xl:py-3.5 px-9 rounded-lg bg-primary-01">
          <SvgCalendar />
          <span>Замовити</span>
        </button>
        <button></button>
      </div>
    </div>
  );
};

export default ProductPricing;
