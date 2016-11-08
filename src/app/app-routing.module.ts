import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import {PageNotFoundComponent} from "./page-not-found";
import {WebsitesComponent} from "./websites"

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'websites', component: WebsitesComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class WAMRoutingModule { }
