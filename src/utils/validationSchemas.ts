import * as yup from 'yup';

export const contactInfoSchema = yup.object({
   firstName: yup.string().required("Введіть ваше ім'я"),
    lastName: yup.string().required("Введіть ваше прізвище"),
    phoneNumber: yup.string().required("Введіть ваш номер телефону"),
  
 });