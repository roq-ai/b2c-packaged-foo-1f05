import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
}
