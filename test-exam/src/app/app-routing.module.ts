import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BackageComponent} from './backage/backage.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {BackageListComponent} from './backage/backage-list/backage-list.component';
import {PackageDetailComponent} from './backage/package-detail/package-detail.component';
import {PackageCreateComponent} from './backage/package-create/package-create.component';
import {PackageEditComponent} from './backage/package-edit/package-edit.component';


const routes: Routes = [
  {path: '' , redirectTo: '/backages' , pathMatch: 'full'},
  {path: 'backages' , component: BackageListComponent},
  {path: 'backages/detail/:id' , component: PackageDetailComponent},
  {path: 'backages/create' , component: PackageCreateComponent},
  {path: 'backages/edit/:id' , component: PackageEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
