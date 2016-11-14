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
  /*
  * TODO : Pick up developer Id from local storage/ authetication service.
  */
  developerId = "581a77f42931271322fe3121";

  constructor(private websitesService : WebsitesService, private router:Router) { }

  ngOnInit() {
  }

  createWebsite(){
    this.newWebsite._developer = this.developerId;
    this.websitesService.createWebsite(this.newWebsite)
      .subscribe(
          website => this.router.navigate(['/websites'])
        )
  }

}
