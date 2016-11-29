import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { MaterialModule } from '@angular/material';
import { Router, Routes, RouterModule } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  websiteId : string;
  developerId : string;

  constructor(private _routeParams: ActivatedRoute) { }

  ngOnInit() {
    this.getRouteWebsiteId();
  }

  getRouteWebsiteId() : void{
    this._routeParams.params.subscribe(params => {
        this.websiteId = params['websiteId'];
        this.developerId = params['developerId'];
    });
  }



}
