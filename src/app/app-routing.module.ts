import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import {PageNotFoundComponent} from "./page-not-found";
import {ProfileComponent} from './profile';
import {EditProfileComponent} from "./edit-profile/edit-profile.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit/:developerId', component: EditProfileComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class WAMRoutingModule { }
