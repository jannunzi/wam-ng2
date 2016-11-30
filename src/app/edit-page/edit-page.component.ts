import { Component, OnInit } from '@angular/core';
import { PageService} from './../shared/page.service';
import { Page } from './../shared/models/page';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
  providers : [PageService]
})
export class EditPageComponent implements OnInit {

  constructor(private pageService : PageService,
              private router:Router,
              private _routeParams: ActivatedRoute) { }

  currentPage : Page;
  currentPageId : string;
  websiteId : string;
  updatePage : any = {};

  ngOnInit() {
    this.getUrlParams();
    this.findPageById();
  }

  getUrlParams() : void{
    this._routeParams.params.subscribe(params => {
        this.currentPageId = params['pageId'];
        this.websiteId = params['websiteId'];
    });
  }

  findPageById() : void{
    this.pageService.findPageById(this.currentPageId)
      .subscribe(
        page => this.currentPage = page
      )
  }

  updatePageById() : void{
      this.currentPage.name = this.updatePage.name;
      this.currentPage.title = this.updatePage.title;
      this.pageService.updatePage(this.currentPage)
        .subscribe(
          pages => this.router.navigate(['/pages/' + this.getLoggedInUserId + '/' + this.websiteId ])
        )
  }

  deletePage() : void{
    this.pageService.deletePage(this.currentPage._id)
      .subscribe(
        website => this.router.navigate(['/pages/' + this.getLoggedInUserId + '/' + this.websiteId])
      )
  }

  getLoggedInUserId() : string {
    if(!(localStorage.getItem('currentUser') === null)){
      var user :any = JSON.parse(localStorage.getItem('currentUser'));
    }

      return user._id;
  }



}
