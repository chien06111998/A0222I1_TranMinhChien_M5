import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  deleteProduct: Product = {};
  config: any;

  constructor(private productService: ServiceService) { }

  ngOnInit(): void {
    this.getAll();
    this.config = {
      itemsPerPage: 4,
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
