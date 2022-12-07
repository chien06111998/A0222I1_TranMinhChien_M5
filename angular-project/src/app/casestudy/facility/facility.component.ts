import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  showFormAdd: boolean;
  facilities: any;

  constructor() {
    this.showFormAdd = false;
  }

  ngOnInit(): void {
  }

  showForm() {
    console.log(123);
    this.showFormAdd = true;
  }
}
