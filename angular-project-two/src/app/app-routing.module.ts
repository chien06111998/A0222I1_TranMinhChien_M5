import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-manager/product-list/product-list.component';
import {ProductCreateComponent} from './product-manager/product-create/product-create.component';
import {ProductEditComponent} from './product-manager/product-edit/product-edit.component';
import {DictionaryListComponent} from './dictionary/dictionary-list/dictionary-list.component';
import {DictionaryDetailComponent} from './dictionary/dictionary-detail/dictionary-detail.component';
import {CategoryListComponent} from './ss9-connect-backend/product-manager/category/category-list/category-list.component';
import {CategoryCreateComponent} from './ss9-connect-backend/product-manager/category/category-create/category-create.component';
import {CategoryEditComponent} from './ss9-connect-backend/product-manager/category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './ss9-connect-backend/product-manager/category/category-delete/category-delete.component';


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
  // {path: '', component: DictionaryListComponent},
  // {path: 'list', component: DictionaryListComponent},
  // {path: 'detail/:word', component: DictionaryDetailComponent}
  {
    path: 'category/list',
    component: CategoryListComponent
  },
  {
    path: 'category/create',
    component: CategoryCreateComponent
  },
  {
    path: 'category/edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'category/delete/:id',
    component: CategoryDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
