import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // URL = 'http://localhost:3000/customers';
  URL = 'http://localhost:8080/term';


  constructor(private http: HttpClient) { }
  findAll(): Observable<any> {
    return this.http.get(this.URL);
  }
  delete(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }
  search(ten: string, id: number): Observable<any> {
    return this.http.get<any[]>(`${this.URL}?ten_like=${ten.trim()}&id_like=${id}`);
  }
  findByID(id: number) {
    return this.http.get(this.URL + '/' + id);
  }
  update(id: number, value: any): Observable<any> {
    return this.http.put(this.URL + '/' + id, value);
  }
}
