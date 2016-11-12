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

  constructor(private websitesService : WebsitesService) { }

  ngOnInit() : void{
    this.getWebistesForUser();
  }

  getWebistesForUser() : void {
      this.websitesService.getWebSitesByDeveloperId().
        subscribe(
          websites => this.websites = websites
        )
  }

}
