import { Component, OnInit } from '@angular/core';
import { WebsitesService} from './../shared/websites.service';
import { Website } from './../shared/models/website';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { MaterialModule } from '@angular/material';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-website',
  templateUrl: './new-website.component.html',
  styleUrls: ['./new-website.component.css'],
  providers : [WebsitesService]
})
export class NewWebsiteComponent implements OnInit {

  newWebsite : any = {};

  constructor(private websitesService : WebsitesService, private router:Router) { }

  ngOnInit() {
  }

  createWebsite(){
    this.newWebsite._developer = this.getLoggedInUserId();
    this.websitesService.createWebsite(this.newWebsite, this.getLoggedInUserId())
      .subscribe(
          website => this.router.navigate(['/websites'])
        )
  }

  getLoggedInUserId() : string {
    if(!(localStorage.getItem('currentUser') === null)){
      var user :any = JSON.parse(localStorage.getItem('currentUser'));
    }

      return user._id;
  }


}
