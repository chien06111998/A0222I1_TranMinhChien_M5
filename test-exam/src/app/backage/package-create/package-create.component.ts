import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BackageService} from '../../service/backage.service';
import {Product} from '../../model/product';
import {Backage} from '../../model/backage';
import {ProductService} from '../../service/product.service';
import * as moment from 'moment';
import { checkDate } from '../validator';


@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrls: ['./package-create.component.css']
})
export class PackageCreateComponent implements OnInit {
  products: Product[] = [];
  newPackage: Backage = {};
  packageForm: FormGroup;

  // packageForm = new FormGroup({
  //   packageCode: new FormControl('', [Validators.required, Validators.pattern('^KH\\-[0-9]{2}')]),
  //   product: new FormControl('', [Validators.required]),
  //   quantity: new FormControl('', [Validators.required]),
  //   // valiDate: this.fb.group({
  //   //   exDate: new FormControl('', [Validators.required]),
  //   //   inDate: new FormControl('', [Validators.required]),
  //   //   outDate: new FormControl('', [Validators.required]),
  //   // }, {invalidDate: checkDate})
  //   exDate: new FormControl('', [Validators.required]),
  //   inDate: new FormControl('', [Validators.required]),
  //   outDate: new FormControl('', [Validators.required]),
  // });
  // tslint:disable-next-line:max-line-length
  constructor(private packageService: BackageService, private productService: ProductService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // this.getAllProducts();
    this.packageForm = this.fb.group({
      packageCode: ['', [Validators.required, Validators.pattern('^LH\\-[0-9]{4}')]],
      product: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      dateGroup: this.fb.group({
          inDate: ['', [Validators.required]],
          outDate: ['', [Validators.required]],
          expDate: ['', [Validators.required]]
        }, {validator: checkDate}
      )
    });
  }

  submit() {
    const customer = this.packageForm.value;
    this.packageService.save(customer).subscribe(() => {
      this.router.navigateByUrl('backages');
      alert('Add new success.');
    }, e => {
      console.log(e);
    });
  }

  private getAllProducts() {
    // @ts-ignore
    this.productService.findAllProduct().subscribe((product: Product[]) => {
      this.products = product;
    });
  }

  private checkDate(control: AbstractControl)  {
    // const exDate = moment(control.get('exDate').value);
    // const inDate = moment(control.get('inDate').value);
    // const outDate = moment(control.get('outDate').value);
    // if (moment.duration(outDate.diff(inDate)).asDays() < 0) {
    //   return {invalidDate: true};
    // }
    // if (moment.duration(inDate.diff(exDate)).asDays() < 0) {
    //   return {invalidDate1: true};
    // }
    return null;
  }
//     const check = control.value;
//     const outDate = new Date(check.outDate);
//     const inDate = new Date(check.inDate);
//     const expDate = new Date(check.expDate);
//     console.log(inDate);
//     console.log(expDate);
//     console.log(outDate);
//     // cho nay k lay duoc du lieu nay
//     // cai thu vien moment vao xai
// // do cai thu vien moment vao xai. xu li date de hon
//     // cai file do la valid du lieu do. copy ra xài theo loi thoi
//     return ((inDate < expDate) && (outDate < inDate)) ? {invalidDate: false} : {invalidDate: true};

}
