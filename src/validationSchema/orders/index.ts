import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_date: yup.date().required(),
  delivery_date: yup.date().nullable(),
  status: yup.string().nullable(),
  total_amount: yup.number().integer().nullable(),
  payment_method: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  vendor_id: yup.string().nullable().required(),
});
