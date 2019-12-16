import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { StudentForm2Component } from './student-form2/student-form2.component';
import { ValidemailDirective } from './directives/validemail.directive';
import { LongueurmaxDirective } from './directives/longueurmax.directive';
import { FarmComponent } from './farm/farm.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { SubPageComponent } from './sub-page/sub-page.component';
import { SubPage2Component } from './sub-page2/sub-page2.component';
import { SubPage404Component } from './sub-page404/sub-page404.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentFormComponent,
    StudentListComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    StudentForm2Component,
    ValidemailDirective,
    LongueurmaxDirective,
    FarmComponent,
    MainNavigationComponent,
    SubPageComponent,
    SubPage2Component,
    SubPage404Component,
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'subpage', component:SubPageComponent},
      { path:'subpage2/:id', component:SubPage2Component},
      { path:'', redirectTo:'/subpage', pathMatch:'full'},
      { path:'**', component:SubPage404Component}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainNavigationComponent]
})
export class AppModule { 


  
}
