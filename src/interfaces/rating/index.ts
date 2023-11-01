import { GetQueryInterface } from 'interfaces';

export interface RatingInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface RatingGetQueryInterface extends GetQueryInterface {
  id?: string;
}
