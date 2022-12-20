import { Component, OnInit } from '@angular/core';
import {Product} from './model/product';
import {ServiceService} from './service.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products: Product[] = [];
  deleteProduct: Product = {};
  config: any;

  constructor(private productService: ServiceService) { }

  ngOnInit(): void {
    this.getAll();
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.products.length
    };
  }

  private getAll() {
    this.products = this.productService.getAll();
  }

  delModal(product: Product) {
    this.deleteProduct = product;
  }

  delProduct() {
    this.productService.deleteProduct(this.deleteProduct.id);
    console.log(this.deleteProduct.id);
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }

}
