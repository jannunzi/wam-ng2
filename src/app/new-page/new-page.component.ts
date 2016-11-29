import { Component, OnInit } from '@angular/core';
import { PageService} from './../shared/page.service';
import { Page } from './../shared/models/page';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css'],
  providers : [PageService]
})
export class NewPageComponent implements OnInit {

  constructor(private _routeParams: ActivatedRoute,
              private pageService : PageService,
              private router:Router) { }

  newPage : any = {};
  websiteId : string;

  ngOnInit() {
    this.getUrlParams();
  }

  createPage(){
    this.newPage._website = this.websiteId;
    this.pageService.createPage(this.newPage, this.websiteId)
      .subscribe(
          page => this.router.navigate(['/pages/'+this.getLoggedInUserId() + '/' + this.websiteId])
        )
  }

  getUrlParams() : void{
    this._routeParams.params.subscribe(params => {
        this.websiteId = params['websiteId'];
    });
  }

  getLoggedInUserId() : string {
    if(!(localStorage.getItem('currentUser') === null)){
      var user :any = JSON.parse(localStorage.getItem('currentUser'));
    }

      return user._id;
  }

}
