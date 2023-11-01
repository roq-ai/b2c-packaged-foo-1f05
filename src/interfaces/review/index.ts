import { UserInterface } from 'interfaces/user';
import { VendorInterface } from 'interfaces/vendor';
import { InventoryInterface } from 'interfaces/inventory';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  review_rating?: number;
  comment?: string;
  review_date?: any;
  user_id: string;
  vendor_id: string;
  product_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  vendor?: VendorInterface;
  inventory?: InventoryInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  user_id?: string;
  vendor_id?: string;
  product_id?: string;
}
