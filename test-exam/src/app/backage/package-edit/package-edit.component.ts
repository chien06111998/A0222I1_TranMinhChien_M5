import { Component, OnInit } from '@angular/core';
import {Backage} from '../../model/backage';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BackageService} from '../../service/backage.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-package-edit',
  templateUrl: './package-edit.component.html',
  styleUrls: ['./package-edit.component.css']
})
export class PackageEditComponent implements OnInit {

  packages: Backage[] = [];
  packageSelect: Backage = {};
  packageForm: FormGroup;
  products: Product[] = [];

  constructor(private backageService: BackageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.buildEditForm();
    this.backageService.findAll().subscribe(value => {
      this.packages = value;
    });
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +(data.get('id'));
      this.backageService.findById(id).subscribe(value => {
        this.packageSelect = value;
        this.buildEditForm();
        console.log(this.packageSelect);
      });
    });
    // this.getAllProducts();
  }
  updateForm() {
    const backage: Backage = this.packageForm.value;
    this.backageService.update(backage.id, backage).subscribe(() => {
      console.log(this.packageSelect);
      alert('Update success.');
      this.router.navigate(['backages']);
    });
  }
  private buildEditForm() {
    return this.packageForm = new FormGroup({
      // ID bắt buộc phải có
      id: new FormControl(this.packageSelect.id),
      packageCode: new FormControl(this.packageSelect.packageCode),
      // price: new FormControl(this.packageSelect.product.price),
      // unit: new FormControl(this.packageSelect.product.unit),
      quantity: new FormControl(this.packageSelect.quantity),
      expDate: new FormControl(this.packageSelect.expDate),
      inDate: new FormControl(this.packageSelect.inDate),
      outDate: new FormControl(this.packageSelect.outDate),
    });
  }
  // private getAllProducts() {
  //   // @ts-ignore
  //   this.backageService.findAllProduct().subscribe((product: Product[]) => {
  //     this.products = product;
  //   });
  // }

}
