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
  styleUrls: ['./edit-website.component.css']
})
export class EditWebsiteComponent implements OnInit {

  constructor(private websitesService : WebsitesService,
              private router:Router,
              private _routeParams: ActivatedRoute ) { }

  /*
  * TODO : Get the developer Id from User authentication/local storage.
  */
  developerId = "581a77f42931271322fe3121";

  website : Website;
  websiteID : string;

  ngOnInit() {
      this.getRouteWebsiteId();
      this.findWebsiteById();
  }

  updateWebsite() : void{

  }

  deleteWebsite() : void{

  }

  findWebsiteById() : void{
    this.websitesService.findWebsiteById(this.websiteID)
      .subscribe(
        website => this.website = website
      )
  }

  getRouteWebsiteId() : void{
    this._routeParams.params.subscribe(params => {
        this.websiteID = params['websiteId'];
    });
  }

}
