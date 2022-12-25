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

@NgModule({
  declarations: [
    AppComponent,
    FacilityComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityDetailComponent,
    FacilityEditComponent
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
