import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../shared/profile.service";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import {isUndefined} from "util";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers : [ProfileService]
})
export class EditProfileComponent implements OnInit {

  developer : any = {};
  updatedDeveloper : any = {};

  error:boolean = false;

  constructor(private profileService : ProfileService,
              private router:Router,
              private _routeParams: ActivatedRoute) { }


  ngOnInit() {
    this.getRouteDeveloper();
  }


  // Gets the developer from the _routeParams of 'edit/:developerId' and sends it to the
  // profileService's getDeveloperByUsername method and assigns the result to this.developer to manipulate
  // Edit-Profile View.
  getRouteDeveloper() : void{
    this._routeParams.params.subscribe(params => {
      // console.log(params['developerId']);
      this.profileService.getDeveloperByUsername(params['developerId'])
        .subscribe(developer => {
          this.developer = developer;
        })
    });
  }

  updateProfile() : void{
    // console.log("I am in Update Profile");
    if(Object.keys(this.updatedDeveloper).length != 0){
      // console.log('The developer has updated to: ',this.updatedDeveloper)
      // IF the "username" field exists in the updatedDeveloper Object, THEN
      if(this.updatedDeveloper.username){
        // IF the "username" field in updatedDeveloper Object is not UNDEFINED, that is, if the field is edited THEN
        if(this.updatedDeveloper.username != 'undefined'){
          // IF the entered username is same as the current logged in user THEN
          if(this.updatedDeveloper.username == this.developer.username){
            this.developer.username = this.updatedDeveloper.username;
          }else{
            console.log("The entered username is not same as the current user logged in.")
            // TODO: This is just a temperory arrangement. Need to do appropriate action
            this.router.navigate(['profile'])
          }
        }
      }
      this.developer.email = this.updatedDeveloper.email;
      this.developer.firstName = this.updatedDeveloper.firstName;
      this.developer.lastName = this.updatedDeveloper.lastName;
      this.profileService.updateDeveloper(this.developer)
        .subscribe(
          developer => this.router.navigate(['profile'])
        )
    }else{
      // console.log('The developer is not updated. It is: ', this.updatedDeveloper)
      this.profileService.updateDeveloper(this.developer)
        .subscribe(
          developer => this.router.navigate(['profile'])
        )
    }


  }

}
