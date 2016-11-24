import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSemanticModule } from "ng-semantic";

///// DIRTY HACK //////
// Since Angular2 RC6 ng-content component is not working if as selector used element
// Issue: https://github.com/angular/angular/issues/11251
// Issue on ng-semantic site: https://github.com/vladotesanovic/ngSemantic/issues/78
// Another solution is to create CUSTOM_ELEMENTS_SCHEMA: http://plnkr.co/edit/ye5NGXW6ZnyY4E0q5hBK?p=info
import { Directive } from '@angular/core';
@Directive({selector: 'modal-content, modal-actions'})
export class NgContentHack {
  // No behavior, the only purpose is to "declare" the tag in Angular2 
}
////////////////////////////////////

import { AppComponent } from './app.component';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { AddRemoveFieldComponent } from './add-complaint/add-remove-field/add-remove-field.component';
import { CountryService } from './country.service/country.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComplaintComponent,
    AddRemoveFieldComponent,
    NgContentHack
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
