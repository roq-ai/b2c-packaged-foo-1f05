import { GetQueryInterface } from 'interfaces';

export interface CategoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
