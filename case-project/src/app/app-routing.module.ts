import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility/facility-create/facility-create.component';
import {FacilityDetailComponent} from './facility/facility-detail/facility-detail.component';
import {FacilityEditComponent} from './facility/facility-edit/facility-edit.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {CotnractDetailComponent} from './contract/contract-detail/cotnract-detail.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {ContractEditComponent} from './contract/contract-edit/contract-edit.component';


const routes: Routes = [
  // facility
  {path: 'facilities' , component: FacilityListComponent},
  {path: 'facilities/create' , component: FacilityCreateComponent},
  {path: 'facilities/detail/:id' , component: FacilityDetailComponent},
  {path: 'facilities/edit/:id' , component: FacilityEditComponent},
  // customer
  {path: 'customers' , component: CustomerListComponent},
  {path: 'customers/detail/:id' , component: CustomerDetailComponent},
  {path: 'customers/create' , component: CustomerCreateComponent},
  {path: 'customers/edit/:id' , component: CustomerEditComponent},
  // contract
  {path: 'contracts' , component: ContractListComponent},
  {path: 'contracts/detail/:id' , component: CotnractDetailComponent},
  {path: 'contracts/create' , component: ContractCreateComponent},
  {path: 'contracts/edit/:id' , component: ContractEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
