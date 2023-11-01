import { OrderDetailInterface } from 'interfaces/order-detail';
import { ReviewInterface } from 'interfaces/review';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  product_name: string;
  product_description?: string;
  quantity?: number;
  price?: number;
  vendor_id: string;
  inventory_category?: string;
  sub_category?: string;
  created_at?: any;
  updated_at?: any;
  order_detail?: OrderDetailInterface[];
  review?: ReviewInterface[];
  vendor?: VendorInterface;
  _count?: {
    order_detail?: number;
    review?: number;
  };
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_name?: string;
  product_description?: string;
  vendor_id?: string;
  inventory_category?: string;
  sub_category?: string;
}
