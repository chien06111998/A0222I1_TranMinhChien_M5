import { Component, OnInit } from '@angular/core';
import {Backage} from '../../model/backage';
import {BackageService} from '../../service/backage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-backage-list',
  templateUrl: './backage-list.component.html',
  styleUrls: ['./backage-list.component.css']
})
export class BackageListComponent implements OnInit {
  backages: Backage[] = [];
  products: Product[] = [];
  deleteBackage: Backage = {};
  searchText: any;
  index: any;
  formSearch = new FormGroup({
    packageCode: new FormControl('')
  });
  // tslint:disable-next-line:max-line-length
  constructor(private backageService: BackageService, private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
    // this.showDetail();
  }
  findAll() {
    this.backageService.findAll().subscribe((data: Backage[]) => {
      this.backages = data;
      console.log(this.backages);
    });
  }
  findAllProduct() {
    // @ts-ignore
    this.productService.findAllProduct().subscribe((data: Product[]) => {
      this.backages = data;
      console.log(this.products);
    });
  }

  pageChanged(event: number) {
    this.index.currentPage = event;
  }

  ngOnInit(): void {
    // this.findAllProduct();
    this.index = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.backages.length
    };
    this.findAll();
  }

  delModal(pck: Backage) {
    this.deleteBackage = pck;
  }
  delPackage(id: number) {
    this.backageService.delete(id).subscribe(data => {
      this.deleteBackage = {};
      document.getElementById('delModal').click();
      this.ngOnInit();
    });
    alert('Delete success.');
    this.router.navigate(['backages']);
  }
  detailFacility(id: number) {
    this.router.navigate(['/detail', id]);
  }
  searchByName() {
    this.backageService.search(this.formSearch.value.packageCode).subscribe(value => {
      this.backages = value;
    });
  }
}

