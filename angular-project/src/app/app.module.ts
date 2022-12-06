import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPicketComponent } from './color-picket/color-picket.component';
import { Ss4AngularComponentTemplateComponent } from './ss4-angular-component-template/ss4-angular-component-template.component';
import { ThHackernewsComponent } from './ss4-angular-component-template/th-hackernews/th-hackernews.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPicketComponent,
    Ss4AngularComponentTemplateComponent,
    ThHackernewsComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
