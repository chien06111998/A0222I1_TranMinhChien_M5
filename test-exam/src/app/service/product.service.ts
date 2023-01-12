import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL_PRODUCT = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }
  findAllProduct(): Observable<Product> {
    return this.http.get(this.URL_PRODUCT);
  }
}
