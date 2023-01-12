import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class BackageService {

  URL = 'http://localhost:3000/backages';

  constructor(private http: HttpClient) { }
  findAll(): Observable<any> {
    return this.http.get(this.URL);
  }
  save(value: any): Observable<any> {
    return this.http.post(this.URL, value);
  }

  findById(id: number) {
    return this.http.get(this.URL + '/' + id);
  }
  update(id: number, value: any): Observable<any> {
    return this.http.put(this.URL + '/' + id, value);
  }
  delete(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }

  search(packageCode: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}?packageCode_like=${packageCode.trim()}`);
  }
  // search(packageCode: string, price: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.URL}?_sort=name,area&_order=asc,desc&name_like=${packageCode}&standard_room_like=${price}`);
  // }
}
