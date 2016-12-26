import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { NgSemanticModule } from "ng-semantic";
import { RestangularModule } from 'ng2-restangular';
import { environment } from '../environments/environment';

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
import { AddComplaintComponent } from './add-complaint.component/add-complaint.component';
import { AddComplaintButtonComponent } from './add-complaint-button.component/add-complaint-button.component';
import { AddComplaintServiceComponent } from './add-complaint-service.component/add-complaint-service.component';
import { AddComplaintProductComponent } from './add-complaint-product.component/add-complaint-product.component';
import { AddRemoveFieldComponent } from './add-complaint.component/add-remove-field.component/add-remove-field.component';
import { CountryService } from './country.service/country.service';
import { AddComplaintService } from './add-complaint.service/add-complaint.service';
import { LastAddedComplaintsComponent } from './last-added-complaints.component/last-added-complaints.component';
import { HomeComponent } from './home.component/home.component';
import { PageNotFoundComponent } from './page-not-found.component/page-not-found.component';
import { ComplaintComponent } from './complaint.component/complaint.component';
import { ArticleComponent } from './article.component/article.component';


// TODO: move in seperate file
const appRoutes: Routes = [
  
  /*{ path: 'crisis-center', component: CrisisListComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: {
      title: 'Heroes List'
    }
  },*/
  {
    path: 'add-complaint',
    component: AddComplaintComponent,
    children: [
      {path: 'service', component: AddComplaintServiceComponent},
      {path: 'product', component: AddComplaintProductComponent}
    ]
  },
  {path: 'zhaloba/:id', component: ComplaintComponent},
  {path: 'chto-delat-esli-vas-obmanuli-v-internete', component: ArticleComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddComplaintComponent,
    AddComplaintButtonComponent,
    AddComplaintServiceComponent,
    AddComplaintProductComponent,
    AddRemoveFieldComponent,
    NgContentHack,
    LastAddedComplaintsComponent,
    HomeComponent,
    PageNotFoundComponent,
    ComplaintComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule,
    RouterModule.forRoot(appRoutes),
    RestangularModule.forRoot((RestangularProvider) => {
        if (!environment.production) {
          RestangularProvider.setBaseUrl('http://localhost:3000'); // TODO: use constant
        }
      }
    )
  ],
  providers: [
    AddComplaintService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
