import { Component, OnInit } from '@angular/core';
import {Backage} from '../../model/backage';
import {BackageService} from '../../service/backage.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit {
  package: Backage | null = {};
  constructor(private packgeService: BackageService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +data.get('id');
      this.packgeService.findById(id).subscribe(findById => {
        this.package = findById;
      });
    });
  }

  ngOnInit(): void {
  }

}
