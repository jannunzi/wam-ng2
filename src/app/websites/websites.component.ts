import { Component, OnInit } from '@angular/core';
import { WebsitesService} from './../shared/websites.service';
import { Website } from './../shared/models/website';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.css'],
  providers : [WebsitesService]
})

export class WebsitesComponent implements OnInit {

  websites : Website[];

  /*
  * TODO : Get the developer Id from User authentication/local storage.
  */
  developerId = "581a77f42931271322fe3121";

  constructor(private websitesService : WebsitesService) { }

  ngOnInit() : void{
    this.getWebSitesByDeveloperId(this.developerId);
  }

  getWebSitesByDeveloperId(developerId) : void {
      this.websitesService.getWebSitesByDeveloperId(developerId)
      .subscribe(
          websites => this.websites = websites
        )
  }

  editWebsite(website) : void {
      console.log("Edit Website ", website);
  }

}
