import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';
import {PageNotFoundComponent} from "./page-not-found";
import {WebsitesComponent} from "./websites"
import {NewWebsiteComponent} from "./new-website"
import {EditWebsiteComponent} from "./edit-website"
import { PagesComponent} from "./pages"


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  { path: 'websites', component: WebsitesComponent},
  { path: 'new-website', component: NewWebsiteComponent },
  { path: 'edit-website/:websiteId', component: EditWebsiteComponent },
  { path: 'pages/:developerId/:websiteId', component: PagesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class WAMRoutingModule { }
