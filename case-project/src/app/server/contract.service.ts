import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  URL = 'http://localhost:3000/contracts';

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
}
