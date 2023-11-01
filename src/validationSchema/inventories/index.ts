import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  product_name: yup.string().required(),
  product_description: yup.string().nullable(),
  quantity: yup.number().integer().nullable(),
  price: yup.number().integer().nullable(),
  inventory_category: yup.string().nullable(),
  sub_category: yup.string().nullable(),
  vendor_id: yup.string().nullable().required(),
});
