import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WAMRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
//import { MaterializeModule } from "angular2-materialize";
//import { MaterialIcons } from "material-design-icons";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WebsitesComponent } from './websites/websites.component';
import { NewWebsiteComponent } from './new-website/new-website.component';
import { EditWebsiteComponent } from './edit-website/edit-website.component';
import { PagesComponent } from './pages/pages.component';
import { NewPageComponent } from './new-page/new-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    WebsitesComponent,
    NewWebsiteComponent,
    EditWebsiteComponent,
    PagesComponent,
    NewPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    WAMRoutingModule,
    MaterialModule.forRoot()
    //MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
