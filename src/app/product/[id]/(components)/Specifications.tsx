import Image from "next/image";

type propTypes = {
  specs?: {
    name: string;
    measurement: string;
  }[];
};

const Specifications = ({ specs }: propTypes) => {
  return (
    <div className="flex flex-wrap gap-3.5 mb-3.5">
      <div className="min-w-fit flex items-center gap-2.5 py-2 px-2.5 border border-gray-200 rounded-md">
        <Image
          src="/images/specs/wheelchair.png"
          height={32}
          width={21}
          alt="wheelchair"
        />
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-01">Ширина сидіння</span>
          <b className="font-semibold	text-[12px] text-gray-01">46 см</b>
        </div>
      </div>
      <div className="min-w-fit flex items-center gap-2.5 py-2 px-2.5 border border-gray-200 rounded-md">
        <Image
          src="/images/specs/capacity.png"
          height={32}
          width={21}
          alt="wheelchair"
        />
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-01">Макс. навантаження</span>
          <b className="font-semibold	text-[12px] text-gray-01">115 кг</b>
        </div>
      </div>
      <div className="min-w-fit flex items-center gap-2.5 py-2 px-2.5 border border-gray-200 rounded-md">
        <Image
          src="/images/specs/width.png"
          height={32}
          width={21}
          alt="wheelchair"
        />
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-01">Ширина</span>
          <b className="font-semibold	text-[12px] text-gray-01">63.6 см</b>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
