import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../server/facility.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {
  facilities: Facility | null = {};

  constructor(private facilityService: FacilityService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +data.get('id');
      this.facilityService.findById(id).subscribe(findById => {
        this.facilities = findById;
      });
    });
  }

  ngOnInit(): void {
  }

}
