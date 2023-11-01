import { OrderDetailInterface } from 'interfaces/order-detail';
import { UserInterface } from 'interfaces/user';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  order_date: any;
  delivery_date?: any;
  status?: string;
  total_amount?: number;
  user_id: string;
  vendor_id: string;
  payment_method?: string;
  created_at?: any;
  updated_at?: any;
  order_detail?: OrderDetailInterface[];
  user?: UserInterface;
  vendor?: VendorInterface;
  _count?: {
    order_detail?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  vendor_id?: string;
  payment_method?: string;
}
