import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Facility1Module} from './facility1/facility1.module';
import {HomeComponent} from './home/home.component';
import {Test1Component} from './test1/test1.component';
import {Facility1RoutingModule} from './facility1/facility1-routing.module';


const routes: Routes = [
  // {path: 'home' , component: HomeComponent},
  // {path: 'test' , component: Test1Component},
  {path: '' , redirectTo: '/list' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), Facility1RoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
