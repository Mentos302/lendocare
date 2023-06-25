"use client";

<<<<<<< HEAD
import { useYupValidationResolver } from "@/utils/useYupValidationResolver";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Disclosure as HeadlessDisclosure } from "@headlessui/react";
import * as yup from "yup";
import { Field } from "../(components)/Field";
import classNames from "classnames";
import { createDropdownOptions } from "@/utils/createDropdownOptions";
import { novaPostBranches } from "../(constants)/dropdownOptions";
import { Dropdown } from "../(components)/Dropdown";
import Prices from "../catalog/(components)/Prices";
import {
  SvgDateFinish,
  SvgDateStart,
  SvgPersonalInfo,
  SvgShipping,
} from "../(svg)/AllSvg";
import Link from "next/link";
import Disclosure from "../(components)/Disclosure";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();

  const [deliveryByCourier, setDeliveryByCourier] = useState(false);
  const [deliveryToBranch, setDeliveryToBranch] = useState(false);

  const options = createDropdownOptions(novaPostBranches);

  const schema = yup.object().shape({
    firstName: yup.string().required("Введіть ваше ім'я"),
    lastName: yup.string().required("Введіть ваше прізвище"),
    phoneNumber: yup.string().required("Введіть ваш номер телефону"),
    ...(deliveryByCourier
      ? {
          city: yup.string().required("Вкажіть ваше місто"),
          street: yup.string().required("Вкажіть вашу вулицю"),
          building: yup.string().required("Вкажіть ваш будинок"),
          apartment: yup.string().required("Вкажіть вашу квартиру"),
        }
      : {}),
    ...(deliveryToBranch
      ? {
          branch: yup.string().required("Вкажіть номер відділення"),
        }
      : {}),
    checkbox: yup.array().min(1),
  });

=======
import { useForm } from "react-hook-form";
import { useCheckout } from "./(model)/useCheckout";

const CheckoutPage = () => {
  useCheckout();

>>>>>>> feature/product-page
  const {
    register,
    handleSubmit,
    reset,
    unregister,
    control,
    formState: { errors },
  } = useForm({
    resolver: useYupValidationResolver(schema),
  });

  const personalInfoErrors = Boolean(
    errors.firstName || errors.lastName || errors.phoneNumber
  );

  const shipppingErrors = Boolean(
    errors.branch ||
      errors.city ||
      errors.street ||
      errors.checkbox ||
      errors.building ||
      errors.apartment
  );

  const handleDeliveryByCourierChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryByCourier(e.target.checked);
    if (e.target.checked) {
      setDeliveryToBranch(false);
    } else {
      reset({
        city: "",
        street: "",
        building: "",
        apartment: "",
      });
      unregister("city");
      unregister("street");
      unregister("building");
      unregister("apartment");
    }
  };

  const handleDeliveryToBranchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryToBranch(e.target.checked);
    if (e.target.checked) {
      setDeliveryByCourier(false);
    } else {
      reset({
        branch: "",
      });
      unregister("branch");
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
    router.push("/");
  };

  useEffect(() => {
    if (errors) {
      const element = document.getElementById("order");
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [errors]);

  return (
    <div className="container-box">
      <div
        id="order"
        className="my-10 text-2xl sm:text-3xl lg:text-4xl font-semibold"
      >
        Оформлення замовлення
      </div>
      <div className=" mb-10 flex flex-col lg:flex-row">
        <div className="lg:w-[60%]">
          <form
            id="orderForm"
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Disclosure
              error={personalInfoErrors}
              title="КОНТАКТНА ІНФОРМАЦІЯ"
              icon={SvgPersonalInfo}
            >
              <Field
                id="firstName"
                {...register("firstName")}
                error={errors.firstName}
                labelError={Boolean(errors.firstName)}
                label="Ім'я"
                placeholder="Введіть ваше ім'я"
              />
              <Field
                id="lastName"
                {...register("lastName")}
                error={errors.lastName}
                labelError={Boolean(errors.lastName)}
                label="Прізвище"
                placeholder="Введіть ваше прізвище"
              />

              <Field
                id="phoneNumber"
                {...register("phoneNumber")}
                error={errors.phoneNumber}
                labelError={Boolean(errors.phoneNumber)}
                label="Номер телефону"
                type="tel"
                placeholder="+380 35 167 35"
              />

              <HeadlessDisclosure.Button
                type="button"
                className="w-fit mt-4 text-base py-3 btn-primary"
              >
                Підтвердити інформацію
              </HeadlessDisclosure.Button>
            </Disclosure>

            <Disclosure
              error={shipppingErrors}
              title="ДОСТАВКA"
              icon={SvgShipping}
            >
              <div className="flex my-4 gap-5 items-center">
                <div>
                  <label
                    className={classNames(
                      "flex gap-3 items-center cursor-pointer text-gray-01 text-sm sm:text-base",
                      {
                        "text-primary-01": deliveryByCourier,
                        "text-red-500": errors.checkbox,
                      }
                    )}
                  >
                    Доставка кур&apos;єром
                    <input
                      className="h-4 w-4 text-sm sm:text-base cursor-pointer accent-primary-01 focus:ring-0 focus:ring-offset-0"
                      type="checkbox"
                      id="deliveryByCourier"
                      {...register("checkbox")}
                      checked={deliveryByCourier}
                      onChange={handleDeliveryByCourierChange}
                    />
                  </label>
                </div>
                <div>
                  <label
                    className={classNames(
                      "flex gap-3 items-center cursor-pointer text-gray-01 text-sm sm:text-base",
                      {
                        "text-primary-01": deliveryToBranch,
                        "text-red-500": errors.checkbox,
                      }
                    )}
                  >
                    Доставка на відділення
                    <input
                      className="h-4 w-4 text-sm sm:text-base cursor-pointer accent-primary-01 focus:ring-0 focus:ring-offset-0"
                      type="checkbox"
                      id="deliveryToBranch"
                      {...register("checkbox")}
                      checked={deliveryToBranch}
                      onChange={handleDeliveryToBranchChange}
                    />
                  </label>
                </div>
              </div>
              {deliveryByCourier && (
                <>
                  <Field
                    id="city"
                    {...register("city")}
                    error={errors.city}
                    labelError={Boolean(errors.city)}
                    label="Ваше місто"
                    placeholder="Вкажіть ваше місто"
                  />
                  <Field
                    id="street"
                    {...register("street")}
                    error={errors.street}
                    labelError={Boolean(errors.street)}
                    label="Ваша вулиця"
                    placeholder="Введіть вашу вулицю"
                  />
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start">
                    <Field
                      id="building"
                      {...register("building")}
                      error={errors.building}
                      labelError={Boolean(errors.building)}
                      label="Ваш будинок"
                      placeholder="Вкажіть ваш будинок"
                    />
                    <Field
                      id="apartment"
                      {...register("apartment")}
                      error={errors.apartment}
                      labelError={Boolean(errors.apartment)}
                      label="Ваша вулиця"
                      placeholder="Вкажіть вашу квартиру"
                    />
                  </div>
                </>
              )}
              {deliveryToBranch && (
                <Controller
                  control={control}
                  name="branch"
                  render={({ field: { onChange } }) => (
                    <div className="w-[312px]">
                      <div>
                        <Dropdown
                          options={options}
                          placeholder="Оберіть ваше відділення"
                          error={errors.branch}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  )}
                />
              )}
              {errors.checkbox && <p>Оберіть варіант доставки</p>}
              <HeadlessDisclosure.Button
                type="button"
                className="w-fit mt-4 text-base py-3 btn-primary"
              >
                Підтвердити адрес
              </HeadlessDisclosure.Button>
            </Disclosure>
          </form>
        </div>
        <div className="hidden lg:block mx-8 border-r border-r-light-gray" />
        <div className="lg:w-[40%]">
          <div className="mt-8 lg:mt-0 text-xl text-gray-01 font-semibold">
            Підсумок замовлення
          </div>
          <div className="w-full flex gap-4 border-b border-b-light-gray py-5 first:pt-0">
            <div>
              <div className="bg-gray-400 rounded-2xl min-w-[80px] h-24 sm:min-w-[128px] sm:h-32" />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Rey Nylon Backpack</div>
                <Prices />
              </div>
              <div className="h-full flex flex-col justify-between">
                <div className="text-gray-03 text-sm font-medium">
                  <div>Час оренди:</div>
                  <div className="flex gap-2">
                    <div className="flex gap-1 items-center">
                      <SvgDateFinish /> 29.06.2023
                    </div>
                    <div className="font-medium">-</div>
                    <div className="flex gap-1 items-center">
                      <SvgDateStart /> 29.11.2023
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      -
                    </button>
                    <div>1</div>
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      +
                    </button>
                  </div>
                  <button className="text-sm sm:text-base font-semibold text-primary-01 scale-animation">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 border-b border-b-light-gray py-5 first:pt-0">
            <div>
              <div className="bg-gray-400 rounded-2xl min-w-[80px] h-24 sm:min-w-[128px] sm:h-32" />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-semibold">
                  Rey Nyl on Backpack Rey Nylon Backp ack Rey Ny lon Back pack
                </div>
                <Prices />
              </div>
              <div className="h-full flex flex-col justify-between">
                <div className="text-gray-03 text-sm font-medium">
                  <div>Час оренди:</div>
                  <div className="flex gap-2">
                    <div className="flex gap-1 items-center">
                      <SvgDateFinish /> 29.06.2023
                    </div>
                    <div className="font-medium">-</div>
                    <div className="flex gap-1 items-center">
                      <SvgDateStart /> 29.11.2023
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      -
                    </button>
                    <div>1</div>
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      +
                    </button>
                  </div>
                  <button className="text-sm sm:text-base font-semibold text-primary-01 scale-animation">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 border-b border-b-light-gray py-5 first:pt-0">
            <div>
              <div className="bg-gray-400 rounded-2xl min-w-[80px] h-24 sm:min-w-[128px] sm:h-32" />
            </div>
            <div className="w-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Rey Nylon Backpack</div>
                <Prices />
              </div>
              <div className="h-full flex flex-col justify-between">
                <div className="text-gray-03 text-sm font-medium">
                  <div>Час оренди:</div>
                  <div className="flex gap-2">
                    <div className="flex gap-1 items-center">
                      <SvgDateFinish /> 29.06.2023
                    </div>
                    <div className="font-medium">-</div>
                    <div className="flex gap-1 items-center">
                      <SvgDateStart /> 29.11.2023
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0 flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      -
                    </button>
                    <div>1</div>
                    <button className="flex justify-center items-center px-3 py-1 border hover:border-gray-03 scale-animation rounded-full">
                      +
                    </button>
                  </div>
                  <button className="text-sm sm:text-base font-semibold text-primary-01 scale-animation">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="py-2 flex justify-between text-sm">
              <div className="text-gray-03">Ціна товару</div>
              <div className="text-gray-01 font-semibold">299.00 грн</div>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <div className="text-gray-03">Доставка</div>
              <div className="text-gray-01 font-semibold">25.00 грн</div>
            </div>
            <div className="py-2 flex justify-between text-sm">
              <div className="text-gray-03">Податки</div>
              <div className="text-gray-01 font-semibold">75.00 грн</div>
            </div>
            <div className="py-2 flex justify-between text-gray-01 font-semibold text-base">
              <div>Загальна ціна</div>
              <div>399.00 грн</div>
            </div>
            <div className="mt-2 flex justify-center">
              <button type="submit" form="orderForm" className="btn-primary">
                Підтвердити замовлення
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
