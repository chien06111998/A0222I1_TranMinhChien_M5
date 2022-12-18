import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-manager/product-list/product-list.component';
import {ProductCreateComponent} from './product-manager/product-create/product-create.component';
import {ProductEditComponent} from './product-manager/product-edit/product-edit.component';
import {DictionaryListComponent} from './dictionary/dictionary-list/dictionary-list.component';
import {DictionaryDetailComponent} from './dictionary/dictionary-detail/dictionary-detail.component';


const routes: Routes = [
  // {path: '', component: ProductListComponent},
  // {path: 'product/list', component: ProductListComponent},
  // {path: 'product/create', component: ProductCreateComponent},
  // {path: 'product/edit/:id', component: ProductEditComponent},
  {path: '', component: DictionaryListComponent},
  {path: 'list', component: DictionaryListComponent},
  {path: 'detail/:word', component: DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
