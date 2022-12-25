import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityDetailComponent} from './facility/facility-detail/facility-detail.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';


const routes: Routes = [
  {path: 'facilities' , component: FacilityListComponent},
  {path: 'facilities/create' , component: FacilityCreateComponent},
  {path: 'facilities/detail/:id' , component: FacilityDetailComponent},
  {path: 'facilities/edit/:id' , component: FacilityEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
