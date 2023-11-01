import { GetQueryInterface } from 'interfaces';

export interface CartInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CartGetQueryInterface extends GetQueryInterface {
  id?: string;
}
