import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../server/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.save(customer).subscribe(() => {
      this.router.navigateByUrl('customers');
      alert('Add new success.');
    }, e => {
      console.log(e);
    });
  }

}
