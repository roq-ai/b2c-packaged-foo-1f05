import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  review_rating: yup.number().integer().nullable(),
  comment: yup.string().nullable(),
  review_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  vendor_id: yup.string().nullable().required(),
  product_id: yup.string().nullable().required(),
});
