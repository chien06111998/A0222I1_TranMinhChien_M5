import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BankPassbookService} from '../service/bank-passbook.service';
import {BankPassbook} from '../model/bank-passbook';
import {Term} from '../model/term';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  passbooks: BankPassbook[] = [];
  term: Term[] = [];
  customer: Customer[] = [];
  passBookSelect: BankPassbook = {};
  customerForm: FormGroup;
  constructor(private bankPassbookService: BankPassbookService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.buildEditForm();
    this.bankPassbookService.findAll().subscribe(value => {
      this.passbooks = value;
    });
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +(data.get('id'));
      this.bankPassbookService.findByID(id).subscribe(value => {
        this.passBookSelect = value;
        this.buildEditForm();
      });
    });
  }

  updateForm() {
    const customer: Customer = this.customerForm.value;
    this.bankPassbookService.update(customer.id, customer).subscribe(() => {
      alert('Sua thong tin thanh cong.');
      this.router.navigate(['customers']);
    });
  }

  private buildEditForm() {
    return this.customerForm = new FormGroup({
      // id: new FormControl(this.passBookSelect.id),
      // idKhachHang: new FormControl(this.passBookSelect.idKhachHang),
      // ten: new FormControl(this.passBookSelect.ten, [Validators.required]),
      // ngayMoSo: new FormControl(this.passBookSelect.ngayMoSo, [Validators.required]),
      // ngayGui: new FormControl(this.passBookSelect.ngayGui, [Validators.required]),
      // kyHan: new FormControl(this.passBookSelect.kyHan, [Validators.required]),
      // soTien: new FormControl(this.passBookSelect.soTien, [Validators.required]),
      // laiSuat: new FormControl(this.passBookSelect.laiSuat, [Validators.required]),

      // id: new FormControl(this.customerSelect.id),
      // idKhachHang: new FormControl(this.customerSelect.idKhachHang),
      // ten: new FormControl(this.customerSelect.ten),
      // ngayMoSo: new FormControl(this.customerSelect.ngayMoSo),
      // ngayGui: new FormControl(this.customerSelect.ngayGui),
      // kyHan: new FormControl(this.customerSelect.kyHan),
      // soTien: new FormControl(this.customerSelect.soTien),
      // laiSuat: new FormControl(this.customerSelect.laiSuat),
    });
  }
}
