"use client";

import Disclosure from "@/app/(components)/Disclosure";
import { Disclosure as HeadlessDisclosure } from "@headlessui/react";
import { Field } from "@/app/(components)/Field";
import { SvgPersonalInfo } from "@/app/(svg)/AllSvg";
import { useYupValidationResolver } from "@/utils/useYupValidationResolver";
import { contactInfoSchema } from "@/utils/validationSchemas";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

type ContactInfoFormProps = {
  formData: FormData;
  setFormStep: (val: number) => void;
};

const ContactInfoForm: FC<ContactInfoFormProps> = (props) => {
  const { formData, setFormStep } = props;

  const {
    register,
    handleSubmit,

    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: useYupValidationResolver(contactInfoSchema),
  });

  const onSubmit = async (data: any) => {
    if ("firstName" in data && data?.firstName)
      formData.append("first_name", data?.firstName);
    if ("lastName" in data && data?.lastName)
      formData.append("last_name", data?.lastName);
    if ("phoneNumber" in data && data?.phoneNumber)
      formData.append("phone_number", data?.phoneNumber);
    setFormStep(1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Disclosure
        //   error={personalInfoErrors}
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

        {!isValid || !isDirty ? (
          <button
            type="submit"
            className="w-fit mt-4 text-base py-3 btn-primary"
          >
            Підтвердити інформацію
          </button>
        ) : (
          <HeadlessDisclosure.Button
            type="submit"
            className="w-fit mt-4 text-base py-3 btn-primary"
          >
            Підтвердити інформацію
          </HeadlessDisclosure.Button>
        )}
      </Disclosure>
    </form>
  );
};

export default ContactInfoForm;
