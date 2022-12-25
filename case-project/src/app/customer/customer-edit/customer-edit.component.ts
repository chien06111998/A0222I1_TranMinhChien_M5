import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../server/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customers: Customer[] = [];
  customerSelect: Customer = {};
  customerForm: FormGroup;

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.buildEditForm();
    this.customerService.findAll().subscribe(value => {
      this.customers = value;
    });
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +(data.get('id'));
      this.customerService.findById(id).subscribe(value => {
        this.customerSelect = value;
        this.buildEditForm();
        console.log(this.customerSelect);
      });
    });
  }
  updateForm() {
    const customer: Customer = this.customerForm.value;
    this.customerService.update(customer.id, customer).subscribe(() => {
      alert('Update success.');
      this.router.navigate(['customers']);
    });
  }
  private buildEditForm() {
    return this.customerForm = new FormGroup({
      id: new FormControl(this.customerSelect.id),
      name: new FormControl(this.customerSelect.name),
      customerType: new FormControl(this.customerSelect.customerType),
      gender: new FormControl(this.customerSelect.gender),
      birthday: new FormControl(this.customerSelect.birthday),
      idCard: new FormControl(this.customerSelect.idCard),
      email: new FormControl(this.customerSelect.email),
      phone: new FormControl(this.customerSelect.phone),
      address: new FormControl(this.customerSelect.address),
    });
  }

}
