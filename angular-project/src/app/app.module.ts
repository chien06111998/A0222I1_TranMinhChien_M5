import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPicketComponent } from './color-picket/color-picket.component';
import { Ss4AngularComponentTemplateComponent } from './ss4-angular-component-template/ss4-angular-component-template.component';
import { ThHackernewsComponent } from './ss4-angular-component-template/th-hackernews/th-hackernews.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { FooterComponent } from './casestudy/footer/footer.component';
import { NavigationComponent } from './casestudy/navigation/navigation.component';
import { FacilityComponent } from './casestudy/facility/facility.component';
import { CreateFacilityComponent } from './casestudy/facility/create-facility/create-facility.component';
import { EditFacilityComponent } from './casestudy/facility/edit-facility/edit-facility.component';
import { CustomerComponent } from './casestudy/customer/customer.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { TodoComponent } from './angular-form/todo/todo.component';
import { FormCreateComponent } from './angular-form/form-create/form-create.component';
import { FormLoginComponent } from './angular-form/form-login/form-login.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPicketComponent,
    Ss4AngularComponentTemplateComponent,
    ThHackernewsComponent,
    CasestudyComponent,
    FooterComponent,
    NavigationComponent,
    FacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    CustomerComponent,
    AngularFormComponent,
    TodoComponent,
    FormCreateComponent,
    FormLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
