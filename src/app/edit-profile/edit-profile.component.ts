import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProfileService} from "../shared/profile.service";
import 'rxjs/add/operator/map';
import { MaterialModule } from '@angular/material';
import { Router, Routes, RouterModule } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers : [ProfileService]
})
export class EditProfileComponent implements OnInit {

  developer : any
  updatedDeveloper : any = {}

  error:boolean = false;

  constructor(private profileService : ProfileService,
              private router:Router,
              private _routeParams: ActivatedRoute) { }


  ngOnInit() {
    this.getRouteDeveloper();
  }


  // Gets the developer from the _routeParams of 'edit/:developerId' and sends it to the
  // profileService's getDeveloperList method and assigns the result to this.developer to manipulate
  // Edit Profile View.
  getRouteDeveloper() : void{
    this._routeParams.params.subscribe(params => {
      // console.log(params['developerId']);
      this.profileService.getDeveloperList(params['developerId'])
        .subscribe(developer => {
          this.developer = developer;
        })
    });
  }

  updateProfile() : void{
    console.log("I am in Update Profile");
    this.developer.username = this.updatedDeveloper.username;
    this.developer.email = this.updatedDeveloper.email;
    this.developer.firstName = this.updatedDeveloper.firstName;
    this.developer.lastName = this.updatedDeveloper.lastName;
    console.log(this.developer);
    this.profileService.updateDeveloper(this.developer)
      .subscribe(
        developer => this.router.navigate(['profile'])
      )
  }

}
