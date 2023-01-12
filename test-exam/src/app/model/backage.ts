import {Product} from './product';

export interface Backage {
  id?: number;
  packageCode?: string;
  product?: Product;
  quantity?: number;
  inDate?: Date;
  outDate?: Date;
  expDate?: Date;
}
