import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BackageComponent } from './backage/backage.component';
import { BackageListComponent } from './backage/backage-list/backage-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgpSortModule} from 'ngp-sort-pipe';
import { PackageDetailComponent } from './backage/package-detail/package-detail.component';
import { PackageCreateComponent } from './backage/package-create/package-create.component';
import { PackageEditComponent } from './backage/package-edit/package-edit.component';
// import { Moment } from 'moment';
// import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    BackageComponent,
    BackageListComponent,
    PackageDetailComponent,
    PackageCreateComponent,
    PackageEditComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgpSortModule
    // Moment
    // MatMomentDateModule,
    // MomentDateAdapter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
