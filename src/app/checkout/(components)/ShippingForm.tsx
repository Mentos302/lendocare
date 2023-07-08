"use client";

import Disclosure from "@/app/(components)/Disclosure";
import { Disclosure as HeadlessDisclosure } from "@headlessui/react";
import { Dropdown } from "@/app/(components)/Dropdown";
import { Field } from "@/app/(components)/Field";
import { novaPostBranches } from "@/app/(constants)/dropdownOptions";
import { SvgShipping } from "@/app/(svg)/AllSvg";
import { createDropdownOptions } from "@/utils/createDropdownOptions";
import { useYupValidationResolver } from "@/utils/useYupValidationResolver";
import classNames from "classnames";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useCheckoutStore } from "@/modules/cart/store";

type ShippingFormProps = {
  setFormStep: (val: number) => void;
};

export const ShippingForm: FC<ShippingFormProps> = (props) => {
  const { setFormStep } = props;
  const state = useCheckoutStore((state) => state);

  const [deliveryByCourier, setDeliveryByCourier] = useState(true);
  const [deliveryToBranch, setDeliveryToBranch] = useState(false);

  const options = createDropdownOptions(novaPostBranches);

  const schema = yup.object().shape({
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
    // checkbox: yup.array().min(1).of(yup.string().required()).required(),
    shipping: yup.string().required("Please select at least one option"),
  });

  const {
    register,
    handleSubmit,
    reset,
    unregister,
    control,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: useYupValidationResolver(schema),
    defaultValues: {
      shipping: "courier",
    },
  });

  const handleDeliveryByCourierChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue("shipping", e.target.value);
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
    setValue("shipping", e.target.value);
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
    if (deliveryByCourier) {
      if ("city" in data && data.city) {
        state.city = data.city;
      }
      if ("street" in data && data.street) {
        state.street = data.street;
      }
      if ("building" in data && data.building) {
        state.building = data.building;
      }
      if ("apartment" in data && data.apartment) {
        state.apartment = data.apartment;
      }
    }
    if (deliveryToBranch) {
      if ("branch" in data && data.branch) {
        state.branch = data.branch;
      }
    }
  };

  return (
    <form id="orderForm" onSubmit={handleSubmit(onSubmit)}>
      <Disclosure title="ДОСТАВКA" icon={SvgShipping}>
        <div className="flex my-4 gap-5 items-center">
          <div>
            <label
              className={classNames(
                "flex gap-3 items-center cursor-pointer text-gray-01 text-sm sm:text-base",
                {
                  "text-primary-01": deliveryByCourier,
                  "text-red-500": errors.shipping,
                }
              )}
            >
              Доставка кур&apos;єром
              <input
                className="h-4 w-4 text-sm sm:text-base cursor-pointer accent-primary-01 focus:ring-0 focus:ring-offset-0"
                type="radio"
                {...register("shipping")}
                value="courier"
                // checked={deliveryByCourier}
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
                  "text-red-500": errors.shipping,
                }
              )}
            >
              Доставка на відділення
              <input
                className="h-4 w-4 text-sm sm:text-base cursor-pointer accent-primary-01 focus:ring-0 focus:ring-offset-0"
                type="radio"
                {...register("shipping")}
                value="delivery"
                // checked={deliveryToBranch}
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
            <div className="w-full flex flex-col sm:flex-row gap-1 sm:gap-0 justify-between items-start">
              <Field
                id="building"
                {...register("building")}
                error={errors.building}
                labelError={Boolean(errors.building)}
                label="Ваш будинок"
                placeholder="Вкажіть ваш будинок"
                className="w-[240px]"
              />
              <Field
                id="apartment"
                {...register("apartment")}
                error={errors.apartment}
                labelError={Boolean(errors.apartment)}
                label="Номер квартири"
                placeholder="Вкажіть номер квартиру"
                className="w-[240px]"
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

        {errors.checkbox && (
          <div className="text-red-500">Оберіть спосіб доставки</div>
        )}

        {!isValid || !isDirty ? (
          <button className="w-fit mt-4 text-base py-3 btn-primary">
            Підтвердити адрес
          </button>
        ) : (
          <HeadlessDisclosure.Button
            type="submit"
            className="w-fit mt-4 text-base py-3 btn-primary"
          >
            <a onClick={() => setFormStep(2)} href="#confirmOrder">
              Підтвердити адрес
            </a>
          </HeadlessDisclosure.Button>
        )}
      </Disclosure>
    </form>
  );
};
