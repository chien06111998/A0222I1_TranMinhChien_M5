import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../server/facility.service';
import {ActivatedRoute} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../server/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customers: Customer | null = {};

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +data.get('id');
      this.customerService.findById(id).subscribe(findById => {
        this.customers = findById;
      });
    });
  }
  ngOnInit(): void {
  }

}
