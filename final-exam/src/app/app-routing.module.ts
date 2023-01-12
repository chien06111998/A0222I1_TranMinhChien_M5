import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';


const routes: Routes = [
  {path: '' , redirectTo: '/bank/list' , pathMatch: 'full'},
  {path: 'bank/list' , component: CustomerListComponent},
  // {path: 'backages/detail/:id' , component: PackageDetailComponent},
  // {path: 'backages/create' , component: PackageCreateComponent},
  {path: 'bank/edit/:id' , component: CustomerEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
