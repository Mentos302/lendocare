import { SvgEmptyCart } from "@/app/(svg)/AllSvg";
import { useCartStore } from "@/modules/cart/store";
import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";

type EmptyCartProps = {
  className?: string;
  onClose?: () => void;
};

const EmptyCart: FC<EmptyCartProps> = (props) => {
  const { className = "", onClose } = props;
  const { setShowCart } = useCartStore((state) => state);

  return (
    <div
      className={classNames(
        "p-5 mx-auto flex flex-col justify-center items-center gap-4 w-full md:w-fit",
        className
      )}
    >
      <SvgEmptyCart />
      <div className="text-gray-01 text-center font-semibold text-2xl">
        Ваша корзина пуста
      </div>
      <div className="text-sm text-center text-gray-03">
        Схоже, ви не додали жодного продукту в кошик. Поверніться до каталогу,
        щоб ознайомитися з нашими продуктами.
      </div>
      <Link onClick={onClose} href="/catalog" className="mt-2 btn-primary">
        Перейти до каталогу
      </Link>
    </div>
  );
};

export default EmptyCart;
