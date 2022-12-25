import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../../server/facility.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contract} from '../../model/contract';
import {ContractService} from '../../server/contract.service';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  contracts: Contract[] = [];
  contractSelect: Contract = {};
  contractForm: FormGroup ;

  constructor(private contractService: ContractService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.buildEditForm();
    this.contractService.findAll().subscribe(value => this.contracts = value);
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +(data.get('id'));
      this.contractService.findById(id).subscribe(value => {
        this.contractSelect = value;
        this.buildEditForm();
        console.log(this.contractSelect);
      });
    });
  }

  updateForm() {
    const facility: Facility = this.contractForm.value;
    this.contractService.update(facility.id, facility).subscribe(() => {
      alert('Update success.');
      this.router.navigate(['/contracts']);
    });
  }

  private buildEditForm() {
    return this.contractForm = new FormGroup({
      id: new FormControl(this.contractSelect.id),
      customerId: new FormControl(this.contractSelect.customerId),
      facilityId: new FormControl(this.contractSelect.facilityId),
      startDate: new FormControl(this.contractSelect.startDate),
      endDate: new FormControl(this.contractSelect.endDate),
      deposit: new FormControl(this.contractSelect.deposit),
    });
  }

}
