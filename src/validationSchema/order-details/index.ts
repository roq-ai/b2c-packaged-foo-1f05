import * as yup from 'yup';

export const orderDetailValidationSchema = yup.object().shape({
  quantity: yup.number().integer().nullable(),
  price: yup.number().integer().nullable(),
  total_price: yup.number().integer().nullable(),
  status: yup.string().nullable(),
  order_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
