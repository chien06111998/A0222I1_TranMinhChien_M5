import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FacilityListComponent} from './facility-list/facility-list.component';

const routes: Routes = [
  {path: 'list', component: FacilityListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Facility1RoutingModule { }
