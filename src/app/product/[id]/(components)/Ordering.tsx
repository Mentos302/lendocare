import {
  SvgCalendar,
  SvgExactPeriod,
  SvgFlexiblePeriod,
} from "@/app/(svg)/AllSvg";
import { PriceSchedule, Pricing, Product } from "@/app/types";
import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, RefObject, useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useCartStore } from "@/modules/cart/store";
import dayjs from "dayjs";
import { CartItem } from "@/modules/cart/interfaces";
import Datepicker from "react-tailwindcss-datepicker";
import { v4 as uuidv4 } from "uuid";

type OrderingPropsType = {
  prices: PriceSchedule[];
  name: string;
  id: number;
  thumb: string;
};

type DateRange = {
  startDate: null | Date | string;
  endDate: null | Date | string;
};

export const Ordering: FC<OrderingPropsType> = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const cancelButtonRef = useRef(null);
  const exactRef = useRef(null);
  const flexibleRef = useRef(null);
  const [submit, setSubmit] = useState(false);
  const [total, setTotal] = useState(0);
  const { addToCart, toggleCart } = useCartStore((state) => state);
  const { name, prices, id, thumb } = props;

  const [exactDate, setExactDate] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  const [flexibleDate, setFlexibleDate] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  const clickHandler = (ev: any, ref: any) => {
    ev.target.remove();

    if (ref.current) {
      ref.current.style.display = "block";
      ref.current.querySelector("button").click();
    }
  };

  const calculatePrice = (dates: DateRange) => {
    const date1 = dayjs(dates.startDate);
    const date2 = dayjs(dates.endDate);

    const daysDiff = date2.diff(date1, "week") || 1;

    const pricePlan = prices.find(
      (schedule) =>
        schedule.fromNight < daysDiff && schedule.untilNight > daysDiff
    );

    if (pricePlan) {
      const price = (pricePlan?.totalPrice * daysDiff) / 100;

      setTotal(price);

      return price;
    }
  };

  const chooseDateHandler = (type: "exact" | "flex", value: any) => {
    setSubmit(!!value.startDate);

    if (type === "exact") {
      setFlexibleDate({
        startDate: null,
        endDate: null,
      });
      setExactDate(value);
    } else if (type === "flex") {
      setExactDate({
        startDate: null,
        endDate: null,
      });
      setFlexibleDate(value);
    }

    if (value.startDate) calculatePrice(value);
  };

  const submitHandler = () => {
    window.scrollTo(0, 0);
    toast.success("Товар успішно додано до корзини!");
    const dates = exactDate.startDate ? exactDate : flexibleDate;
    const price = calculatePrice(dates) || 0;

    const cartItem: CartItem = {
      id: uuidv4(),
      lendoProductId: id,
      name,
      thumb,
      price,
      ...dates,
    };

    addToCart(cartItem);

    setOpenModal(false);

    toggleCart();
  };

  const ModalCloseHandler = () => {
    setOpenModal(false);
  };

  const ModalOpenHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Toaster />
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          id="calendar"
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 text-center lg:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative min-h-fit md:min-w-[700px] flex transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="flex flex-col gap-2 md:gap-5 p-5">
                    <div className="hidden lg:flex flex-col md:flex-row gap-2 md:gap-5 text-gray-01">
                      <div className="w-full flex flex-col how-it-works-bg-2 items-center p-2.5 rounded-lg">
                        <span className="text-sm">
                          До {Math.floor(prices[0].untilNight / 7)} тижнів
                        </span>
                        <b className="text-xl font-semibold">
                          {prices[0].totalPrice / 100}
                        </b>
                        <span className="text-xs">грн/тиждень</span>
                      </div>
                      <div className="w-full flex flex-col how-it-works-bg-4  items-center p-2.5 rounded-lg">
                        <span className="text-sm">
                          {Math.floor(prices[1].fromNight / 7)}
                          {" - "}
                          {Math.floor(prices[1].untilNight / 7)} тижнів
                        </span>
                        <b className="text-xl font-semibold">
                          {Math.floor(prices[1].totalPrice / 100)}
                        </b>
                        <span className="text-xs">грн/тиждень</span>
                      </div>
                      <div className="w-full flex flex-col how-it-works-bg-3  items-center p-2.5 rounded-lg">
                        <span className="text-sm">
                          Більше {Math.floor(prices[2].fromNight / 7)} тижнів
                        </span>
                        <b className="text-xl font-semibold">
                          {Math.floor(prices[2].totalPrice / 100)}
                        </b>
                        <span className="text-xs">грн/тиждень</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-5 ">
                      <div className="w-full flex flex-col items-center  p-10 px-8 rounded-lg bg-primary-01  text-center justify-between gap-3 sm:gap-5 text-white">
                        <div className="hidden lg:block">
                          <SvgExactPeriod />
                        </div>
                        <b className="text-xl sm:text-2xl font-semibold">
                          Точний період користування
                        </b>
                        <p className="text-sm">
                          Підійде для тих, кому обладаняння потрібне на
                          конкретний період часу
                        </p>
                        <div ref={exactRef} className="w-full hidden">
                          <Datepicker
                            value={exactDate as any}
                            onChange={(value) =>
                              chooseDateHandler("exact", value as any)
                            }
                            primaryColor={"blue"}
                            i18n={"uk"}
                            separator={"-"}
                            placeholder="Оберіть точний термін"
                            minDate={new Date()}
                            startWeekOn="mon"
                            displayFormat={"DD/MM/YYYY"}
                            
                          />
                        </div>
                        <div
                          className="h-10 bg-white w-full text-black flex items-center justify-center rounded-md cursor-pointer"
                          onClick={(ev) => clickHandler(ev, exactRef)}
                        >
                          Обрати
                        </div>
                      </div>
                      <div className="w-full flex flex-col items-center p-10 px-8 rounded-lg bg-primary-50 text-center justify-between gap-3 sm:gap-5 text-gray-01">
                        <div className="hidden lg:block">
                          <SvgFlexiblePeriod />
                        </div>
                        <b className="text-xl sm:text-2xl font-semibold">
                          Гнучкий період користування
                        </b>
                        <p className="text-sm">
                          Підійде для тих, кому обладнання потрібне на
                          невизначений термін
                        </p>
                        <div ref={flexibleRef} className="w-full hidden">
                          <Datepicker
                            value={flexibleDate as any}
                            onChange={(value) =>
                              chooseDateHandler("flex", value as any)
                            }
                            primaryColor={"blue"}
                            i18n={"uk"}
                            separator={"-"}
                            useRange={false}
                            asSingle={true}
                            placeholder="Оберіть гнучкий термін"
                            minDate={new Date()}
                            startWeekOn="mon"
                            displayFormat={"DD/MM/YYYY"}
                          />
                        </div>
                        <div
                          className="h-10 bg-primary-01 w-full text-white flex items-center justify-center rounded-md cursor-pointer"
                          onClick={(ev) => clickHandler(ev, flexibleRef)}
                        >
                          Обрати
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between  text-lg">
                      <span className=" md:w-2/5 text-base text-gray-01">
                        {total ? (
                          <>
                            Вартісь за весь час користування:{" "}
                            <b className="text-xl">{total} грн</b>
                          </>
                        ) : (
                          "Оберіть дату, щоб дізнатись вартість і замовити товар."
                        )}
                      </span>
                      <div className="mt-5 md:mt-0 flex w-full sm:w-fit flex-col sm:flex-row gap-5">
                        <button
                          onClick={ModalCloseHandler}
                          className="block md:hidden w-full sm:w-fit btn-outline py-1.5 xl:py-3 px-9 rounded-lg "
                        >
                          Закрити
                        </button>
                        <button
                          className={`transition-all duration-300 ease w-full sm:w-fit flex items-center justify-center gap-2.5 py-1.5 xl:py-3 px-9 rounded-lg  
          ${
            submit ? "bg-primary-01" : "bg-gray-200 cursor-default"
          } text-white`}
                          onClick={submitHandler}
                        >
                          <span>Замовити</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div
        onClick={ModalOpenHandler}
        className="grid grid-cols-2 gap-4 text-lg sm:text-xl font-medium text-white"
      >
        <button className="min-w-fit flex items-center justify-center gap-2.5 py-2.5 xl:py-3.5 px-9 rounded-lg bg-primary-01">
          <SvgCalendar />
          <span>Замовити</span>
        </button>
      </div>
    </>
  );
};
