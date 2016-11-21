import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ProfileService} from "../shared/profile.service";
import 'rxjs/add/operator/map';
import { MaterialModule } from '@angular/material';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers : [ProfileService]
})
export class ProfileComponent implements OnInit {

  developer : any = {};
  developerId = "582a8f3725632b1e0067cb19";
  error:boolean = false;

  constructor(private profileService : ProfileService,
              private router:Router) { }

  ngOnInit() : void{
    this.developer = {}
    this.getDeveloperById(this.developerId);
  }

  getDeveloperById(developerId): void{
    this.profileService.getDeveloperList(developerId)
      .subscribe(
        developer => this.developer = developer
      );
  }

  editProfile(developer):void{
    this.router.navigate(['/edit/' + developer._id]);
    // this.router.navigate(['/pages/' + website._developer + "/"+ website._id  ]);
  }

  goToWebsites():void{
    console.log("TODO: Navigate to Websites Page");
  }

  logout(): void{
    //TODO:: Need to implement clearing the session.
    this.router.navigate(['login']);
  }
}

