import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../server/facility.service';
import {ActivatedRoute} from '@angular/router';
import {Contract} from '../../model/contract';
import {ContractService} from '../../server/contract.service';

@Component({
  selector: 'app-cotnract-detail',
  templateUrl: './cotnract-detail.component.html',
  styleUrls: ['./cotnract-detail.component.css']
})
export class CotnractDetailComponent implements OnInit {
  contracts: Contract | null = {};

  constructor(private contractService: ContractService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +data.get('id');
      this.contractService.findById(id).subscribe(findById => {
        this.contracts = findById;
      });
    });
  }
  ngOnInit(): void {
  }

}
