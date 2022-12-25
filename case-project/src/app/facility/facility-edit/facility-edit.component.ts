import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../../server/facility.service';
import {ActivatedRoute, Router} from '@angular/router';
import get = Reflect.get;
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilities: Facility[] = [];
  facilitySelect: Facility = {};
  facilityForm: FormGroup ;

  constructor(private facilityService: FacilityService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.buildEditForm();
    this.facilityService.findAll().subscribe(value => this.facilities = value);
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +(data.get('id'));
      this.facilityService.findById(id).subscribe(value => {
        this.facilitySelect = value;
        this.buildEditForm();
        console.log(this.facilitySelect);
      });
    });
  }

  updateForm() {
    // console.log(this.facilityForm);
    // return;
    const facility: Facility = this.facilityForm.value;
    this.facilityService.update(facility.id, facility).subscribe(() => {
      alert('Update success.');
      this.router.navigate(['/facilities']);
    });
  }

  private buildEditForm() {
    return this.facilityForm = new FormGroup({
      id: new FormControl(this.facilitySelect.id),
      facilityName: new FormControl(this.facilitySelect.facilityName),
      area: new FormControl(this.facilitySelect.area),
      cost: new FormControl(this.facilitySelect.cost),
      maxPeople: new FormControl(this.facilitySelect.maxPeople),
      standardRoom: new FormControl(this.facilitySelect.standardRoom),
      description: new FormControl(this.facilitySelect.description),
      poolArea: new FormControl(this.facilitySelect.poolArea),
      numberOfFloors: new FormControl(this.facilitySelect.numberOfFloors),
      rentType: new FormControl(this.facilitySelect.rentType),
      facilityType: new FormControl(this.facilitySelect.facilityType),
    });
  }
}
