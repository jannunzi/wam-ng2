import { Component, OnInit } from '@angular/core';
import { WebsitesService} from './../shared/websites.service';
import { Website } from './../shared/models/website';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css'],
  providers : [WebsitesService]
})

export class WebsitesComponent implements OnInit {

  websites : Website[];

  constructor(private websitesService : WebsitesService,
              private router:Router) { }

  ngOnInit() : void{
    this.getWebSitesByDeveloperId(this.getLoggedInUserId());
  }

  getWebSitesByDeveloperId(developerId) : void {
      this.websitesService.getWebSitesByDeveloperId(developerId)
      .subscribe(
          websites => this.websites = websites
        )
  }

  editWebsite(website) : void {
      this.router.navigate(['/edit-website/'+website._id]);
  }

  addWebsite() : void {
    this.router.navigate(['/new-website']);
  }

  openPages(website) : void {
    console.log("Open Pages");
    this.router.navigate(['/pages/' + website._developer + "/"+ website._id  ]);
  }

  getLoggedInUserId() : string {
    if(!(localStorage.getItem('currentUser') === null)){
      var user :any = JSON.parse(localStorage.getItem('currentUser'));
    }

      return user._id;
  }

}
