import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  config: any;
  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService, private router: Router) {
    this.facilityService.findAll().subscribe((data: Facility[]) => {
      this.facilities = data;
      console.log(this.facilities);
    });
  }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.facilities.length
    };
  }

  delModal(facility: Facility) {

  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }

}
