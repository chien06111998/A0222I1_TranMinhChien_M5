import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../model/customer';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {BankPassbook} from '../model/bank-passbook';
import {BankPassbookService} from '../service/bank-passbook.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  passbooks: BankPassbook [] = [];
  deletePassbook: BankPassbook = {};
  config: any;
  formSearch = new FormGroup({
    ten: new FormControl(''),
    id: new FormControl(''),
  });

  constructor(private bankPassbookService: BankPassbookService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.passbooks.length
    };
  }

  findAll() {
    this.bankPassbookService.findAll().subscribe((data: BankPassbook[]) => {
      // @ts-ignore
      this.passbooks = data.content;
      console.log(data);
    });
  }

  delModal(customer: BankPassbook) {
    this.deletePassbook = customer;
  }

  delPackage(id: number) {
    this.bankPassbookService.delete(id).subscribe(data => {
      this.deletePassbook = {};
      document.getElementById('delModal').click();
      this.ngOnInit();
    });
    alert('Xoa thanh cong.');
    this.router.navigate(['customers']);
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }

  searchByName() {
    this.bankPassbookService.search(this.formSearch.value.ten, this.formSearch.value.id).subscribe(value => {
      this.passbooks = value;
    });
  }
}
