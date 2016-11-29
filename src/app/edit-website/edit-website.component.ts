import { Component, OnInit } from '@angular/core';
import { WebsitesService} from './../shared/websites.service';
import { Website } from './../shared/models/website';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { MaterialModule } from '@angular/material';
import { Router, Routes, RouterModule } from '@angular/router';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-edit-website',
  templateUrl: './edit-website.component.html',
  styleUrls: ['./edit-website.component.css'],
  providers : [WebsitesService]
})
export class EditWebsiteComponent implements OnInit {

  constructor(private websitesService : WebsitesService,
              private router:Router,
              private _routeParams: ActivatedRoute ) { }

  w : Website;
  websiteID : string;
  updatedWebsite : any = {};

  ngOnInit() {
      this.getRouteWebsiteId();
      this.findWebsiteById();
  }

  updateWebsite() : void{
      this.w.name = this.updatedWebsite.name;
      this.w.description = this.updatedWebsite.description;
      //this.w.dateModified = Date.now();
      this.websitesService.updateWebsite(this.w)
        .subscribe(
          website => this.router.navigate(['/websites'])
        )
  }

  deleteWebsite() : void{
    this.websitesService.deleteWebsite(this.w._id)
      .subscribe(
        website => this.router.navigate(['/websites'])
      )
  }

  findWebsiteById() : void{
    this.websitesService.findWebsiteById(this.websiteID)
      .subscribe(
        website => this.w = website
      )
  }

  getRouteWebsiteId() : void{
    this._routeParams.params.subscribe(params => {
        this.websiteID = params['websiteId'];
    });
  }

  getLoggedInUserId() : string {
    if(!(localStorage.getItem('currentUser') === null)){
      var user :any = JSON.parse(localStorage.getItem('currentUser'));
    }

      return user._id;
  }


}
