import { OrderInterface } from 'interfaces/order';
import { InventoryInterface } from 'interfaces/inventory';
import { GetQueryInterface } from 'interfaces';

export interface OrderDetailInterface {
  id?: string;
  order_id: string;
  product_id: string;
  quantity?: number;
  price?: number;
  total_price?: number;
  status?: string;
  created_at?: any;
  updated_at?: any;

  order?: OrderInterface;
  inventory?: InventoryInterface;
  _count?: {};
}

export interface OrderDetailGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_id?: string;
  product_id?: string;
  status?: string;
}
