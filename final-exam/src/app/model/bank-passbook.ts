import {Term} from './term';
import {Customer} from './customer';

export interface BankPassbook {
  id?: number;
  customer?: Customer;
  dateCreate?: Date;
  depositDate?: Date;
  term?: Term;
  money?: number;
  interestRate?: number;
}
