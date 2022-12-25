import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../server/facility.service';
import {Router} from '@angular/router';
import {ContractService} from '../../server/contract.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup = new FormGroup({
    customerId: new FormControl('', [Validators.required]),
    facilityId: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required]),
  });

  constructor(private contractService: ContractService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(6);
    const contract = this.contractForm.value;
    this.contractService.save(contract).subscribe(() => {
      this.router.navigateByUrl('contracts');
      alert('Add new success.');
    }, e => {
      console.log(e);
    });
  }

}
