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

@NgModule({
  declarations: [
    AppComponent,
    ProductManagerComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    DictionaryComponent,
    DictionaryListComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
