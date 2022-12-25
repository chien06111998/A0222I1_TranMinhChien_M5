import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../../model/facility';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  API_URL = 'http://localhost:3000/facilities';
  constructor(private  http: HttpClient) { }
  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.API_URL);
  }
  // saveCategory(facility): Observable<Facility> {
  //   return this.http.post<Facility>(this.API_URL);
  // }
  //
  // findById(id: number): Observable<Facility> {
  //   return this.http.get<Facility>(`${API_URL}/facility/${id}`);
  // }
  //
  // updateCategory(id: number, facility: Facility): Observable<Facility> {
  //   return this.http.put<Facility>(`${API_URL}/facility/${id}`, facility);
  // }
  //
  // deleteCategory(id: number): Observable<Facility> {
  //   return this.http.delete<Facility>(`${API_URL}/facility/${id}`);
  // }
}
