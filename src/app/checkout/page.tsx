"use client";

import { useForm } from "react-hook-form";
import { useCheckout } from "./(model)/useCheckout";

const CheckoutPage = () => {
  useCheckout();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <b>Контактна інформація</b>

        <input
          type="phone"
          placeholder="Ваше ім'я"
          {...register("name", { required: true })}
        />
        <input
          type="phone"
          placeholder="+380 93 810 52 39"
          {...register("phone", { required: true })}
        />
      </fieldset>
      <fieldset>
        <b>Інформація для доставки</b>

        <input
          type="radio"
          {...register("delivery_type", { required: true })}
        />

        <input
          type="phone"
          placeholder="Ваше ім'я"
          {...register("name", { required: true })}
        />
        <input
          type="phone"
          placeholder="+380 93 810 52 39"
          {...register("phone", { required: true })}
        />
      </fieldset>
    </form>
  );
};

export default CheckoutPage;
