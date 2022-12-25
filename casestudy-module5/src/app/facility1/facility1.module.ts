import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [
    FacilityListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
  ]
})
export class Facility1Module { }
