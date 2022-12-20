import { Injectable } from '@angular/core';
import {Product} from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() { }

  getAll() {
    return this.products;
  }
  saveProduct(product) {
    this.products.push(product);
  }
  updateById(id, updatedProduct) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = updatedProduct;
      }
    }
  }
  findById(id) {
    return this.products.find(item => item.id === id);
  }

  deleteProduct(id) {
    this.products.splice(this.products.findIndex(item => item.id === id), 1);
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
      }
    }
    // this.products = this.products.filter(x => !x.id === id);
  }
}