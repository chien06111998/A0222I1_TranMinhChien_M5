import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility[] = [];
  config: any;

  constructor(private facilityService: FacilityService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.facilities.length
    };
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }

  getAll() {
    this.facilityService.getAll().subscribe((data: Facility[]) => {
      this.facilities = data;
      console.log(5);
    });
  }

  delModal(facility: Facility) {

  }
}
