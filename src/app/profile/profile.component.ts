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

  //TODO: This is not required
  // developerId = "582a8f3725632b1e0067cb19";

  //TODO: This replaces hardcoded currentDeveloper
  // currentDeveloper : any = {};

  //TODO: hardcoded
  currentDeveloper = "abcde";

  constructor(private profileService : ProfileService,
              private router:Router) { }

  ngOnInit() : void{
    this.developer = {};
    //TODO: THis statement has to replace the hardcoded this.currentDeveloper
    // this.currentDeveloper = localStorage.getItem('currentUser');

    //TODO : This statement is not required
    // this.getDeveloperById(this.developerId);

    this.getCurrentDeveloper(this.currentDeveloper);

   }

  getCurrentDeveloper(currentDeveloper) : void{
    this.profileService.getDeveloperByUsername(currentDeveloper)
      .subscribe(
        developer =>
        {this.developer = developer},
        error =>
        {console.log('Error in Profile Component: ', error);}
      );
  }

  //TODO: This Method is not required
  // getDeveloperById(developerId): void{
  //   this.profileService.getDeveloperList(developerId)
  //     .subscribe(
  //       developer => this.developer = developer
  //     );
  // }

  editProfile(developer):void{
    this.router.navigate(['/edit-profile/' + developer.username]);
  }

  goToWebsites():void{
    console.log("TODO: Navigate to Websites Page");
  }

  logout(): void{
    //TODO: Need to implement clearing the session.
    this.router.navigate(['']);
  }
}

