import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductListComponent } from './product-manager/product-list/product-list.component';
import { ProductCreateComponent } from './product-manager/product-create/product-create.component';
import { ProductEditComponent } from './product-manager/product-edit/product-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryListComponent } from './dictionary/dictionary-list/dictionary-list.component';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ss9ConnectBackendComponent } from './ss9-connect-backend/ss9-connect-backend.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './ss9-connect-backend/product-manager/category/category-list/category-list.component';
import { CategoryCreateComponent } from './ss9-connect-backend/product-manager/category/category-create/category-create.component';
import { CategoryEditComponent } from './ss9-connect-backend/product-manager/category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './ss9-connect-backend/product-manager/category/category-delete/category-delete.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import {ContractCreateComponent} from './case-study/contract/contract-create/contract-create.component';
import {ContractListComponent} from './case-study/contract/contract-list/contract-list.component';
import {CreateCustomerComponent} from './case-study/customer/create-customer/create-customer.component';
import {CreateNewFacilityComponent} from './case-study/facility/create-new-facility/create-new-facility.component';
import {CustomerListComponent} from './case-study/customer/customer-list/customer-list.component';
import {CustomerUseFacilityComponent} from './case-study/customer/customer-use-facility/customer-use-facility.component';
import {EditCustomerComponent} from './case-study/customer/edit-customer/edit-customer.component';
import {EditFacilityComponent} from './case-study/facility/edit-facility/edit-facility.component';
import {FacilityComponent} from './case-study/facility/facility-list/facility.component';
import { CasestudyMd5Component } from './casestudy-md5/casestudy-md5.component';
import { NavBarComponent } from './ss9-connect-backend/product-manager/share/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductManagerComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    DictionaryComponent,
    DictionaryListComponent,
    DictionaryDetailComponent,
    Ss9ConnectBackendComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    CaseStudyComponent,
    ContractCreateComponent,
    ContractListComponent,
    CreateCustomerComponent,
    CreateNewFacilityComponent,
    CustomerListComponent,
    CustomerUseFacilityComponent,
    EditCustomerComponent,
    EditFacilityComponent,
    FacilityComponent,
    CasestudyMd5Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
