import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityListComponent } from './facility1/facility-list/facility-list.component';
import {Facility1Module} from './facility1/facility1.module';
import { HomeComponent } from './home/home.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Test1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Facility1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
