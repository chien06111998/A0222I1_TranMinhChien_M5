import { Component, OnInit } from '@angular/core';
import {FacilityService} from '../../server/facility.service';
import {Facility} from '../../model/facility';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility[] = [];
  deleteFacility: Facility = {};
  id: number;

  constructor(private facilityService: FacilityService, private router: Router) {
  }
  findAll() {
    this.facilityService.findAll().subscribe((data: Facility[]) => {
      this.facilities = data;
      console.log(this.facilities);
    });
  }

  ngOnInit(): void {
    this.findAll();
  }

  detailFacility(id: number) {
    this.router.navigate(['/facilities/detail', id]);
  }

  delProduct(id: number) {
    this.facilityService.delete(id).subscribe(data => {
      this.deleteFacility = {};
      document.getElementById('delModal').click();
      this.ngOnInit();
    });
  }

  delModal(facility: Facility) {
    this.deleteFacility = facility;
  }
}
