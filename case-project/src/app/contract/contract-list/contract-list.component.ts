import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../server/contract.service';
import {Router} from '@angular/router';
import {Facility} from '../../model/facility';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[] = [];
  deleteContract: Contract = {};
  id: number;

  constructor(private contractService: ContractService, private router: Router) { }

  findAll() {
    this.contractService.findAll().subscribe((data: Contract[]) => {
      this.contracts = data;
      console.log(this.contracts);
    });
  }

  ngOnInit(): void {
    this.findAll();
  }

  detailFacility(id: number) {
    this.router.navigate(['/contracts/detail', id]);
  }

  delProduct(id: number) {
    this.contractService.delete(id).subscribe(data => {
      this.deleteContract = {};
      document.getElementById('delModal').click();
      this.ngOnInit();
    });
  }

  delModal(contract: Contract) {
    this.deleteContract = contract;
  }

}
