import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../shared/profile.service";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers : [ProfileService]
})

export class ProfileComponent implements OnInit {
  developer : any = {};


  currentDeveloper : any = {};

  // hardcoded
  // currentDeveloper = "abcde";

  constructor(private profileService : ProfileService,
              private router:Router) { }

  ngOnInit() : void{
    this.developer = {};

    this.currentDeveloper = JSON.parse(localStorage.getItem('currentUser'));

    this.getCurrentDeveloper(this.currentDeveloper);

   }

  getCurrentDeveloper(currentDeveloper) : void{
    // console.log('getCurrentDeveloper Method: Current Developer is: ', currentDeveloper);
    this.profileService.getDeveloperByUsername(currentDeveloper.username)
      .subscribe(
        developer =>
        {this.developer = developer},
        error =>
        {console.log('Error in Profile Component: ', error);}
      );
  }

  editProfile(developer):void{
    this.router.navigate(['edit-profile/' + developer.username]);
  }

  goToWebsites():void{
    this.router.navigate(['websites']);
    // console.log("TODO: Navigate to Websites Page");
  }

  logout(): void{
    //TODO: Need to implement clearing the session.
    this.router.navigate(['']);
  }
}

