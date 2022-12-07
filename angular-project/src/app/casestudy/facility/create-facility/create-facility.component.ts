import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityForm: any;

  constructor() { }

  ngOnInit(): void {
  }

}
