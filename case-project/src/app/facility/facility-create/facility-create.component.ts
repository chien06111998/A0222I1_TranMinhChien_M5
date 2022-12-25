import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../server/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm: FormGroup = new FormGroup({
    // facilityId: new FormControl(),
    facilityName: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required]),
    numberOfFloors: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
  });

  constructor(private facilityService: FacilityService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(6);
    const facility = this.facilityForm.value;
    this.facilityService.save(facility).subscribe(() => {
      this.router.navigateByUrl('facilities');
      alert('Add new success.');
    }, e => {
      console.log(e);
    });
  }
}
