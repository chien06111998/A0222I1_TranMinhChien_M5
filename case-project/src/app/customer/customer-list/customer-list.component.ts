import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {FacilityService} from '../../server/facility.service';
import {Router} from '@angular/router';
import {Facility} from '../../model/facility';
import {CustomerService} from '../../server/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  deleteCustomer: Customer = {};
  id: number;

  constructor(private customerSevice: CustomerService, private router: Router) { }
  findAll() {
    this.customerSevice.findAll().subscribe((data: Customer[]) => {
      this.customers = data;
      console.log(this.customers);
    });
  }

  ngOnInit(): void {
    this.findAll();
  }

  detailFacility(id: number) {
    this.router.navigate(['/customers/detail', id]);
  }

  delProduct(id: number) {
    this.customerSevice.delete(id).subscribe(data => {
      this.deleteCustomer = {};
      document.getElementById('delModal').click();
      this.ngOnInit();
    });
  }

  delModal(facility: Facility) {
    this.deleteCustomer = facility;
  }

}
