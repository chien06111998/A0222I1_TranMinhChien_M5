import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FacilityComponent } from './facility/facility.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FacilityDetailComponent } from './facility/facility-detail/facility-detail.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { ContractComponent } from './contract/contract.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FacilityComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityDetailComponent,
    FacilityEditComponent,
    ContractComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
