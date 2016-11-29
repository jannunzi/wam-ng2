import { Component, OnInit } from '@angular/core';
import { PageService} from './../shared/page.service';
import { Page } from './../shared/models/page';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  providers : [PageService]
})
export class PagesComponent implements OnInit {

  websiteId : string;
  developerId : string;
  pages : Page[];

  constructor(private _routeParams: ActivatedRoute,
              private pageService : PageService,
              private router:Router) { }

  ngOnInit() {
    this.getUrlParams();
    this.getPagesByWebsiteId(this.websiteId);
  }

  getUrlParams() : void{
    this._routeParams.params.subscribe(params => {
        this.websiteId = params['websiteId'];
        this.developerId = params['developerId'];
    });
  }

  getPagesByWebsiteId(websiteId) : void {
      this.pageService.findPagesForWebsite(websiteId)
      .subscribe(
          pages => this.pages = pages
        )
  }

  addPage() : void {
    this.router.navigate(['/new-page/website/'+this.websiteId]);
  }



}
