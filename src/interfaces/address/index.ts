import { GetQueryInterface } from 'interfaces';

export interface AddressInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AddressGetQueryInterface extends GetQueryInterface {
  id?: string;
}
