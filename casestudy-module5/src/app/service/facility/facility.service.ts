import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  URL = 'http://localhost:3000/facilities';

  facilities: Facility[] = [];

  constructor(private http: HttpClient) { }
  findAll(): Observable<any> {
    return this.http.get(this.URL);
  }
}
