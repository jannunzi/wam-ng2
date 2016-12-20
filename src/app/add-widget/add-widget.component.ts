import { Component, OnInit } from '@angular/core';
import { WidgetsService} from './../shared/widgets.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.css'],
  providers: [WidgetsService]
})
export class AddWidgetComponent implements OnInit {

  constructor(private _routeParams: ActivatedRoute,
              private router:Router,
              private widgetsService : WidgetsService) { }

  websiteId : string;
  pageId : string;

  ngOnInit() {
    this.getUrlParams();
  }

  addImage() : void {
    this.router.navigate(['/widget-image/website/' + this.websiteId + '/page/'+this.pageId]);
  }

  addHeader() : void {
    this.addWidget("HEADER");
  }

  addYouTube() : void {
    //TODO: Create the widgwt here, that is, call createWidget here
    this.widgetsService.createWidget(this.websiteId, this.pageId, this.getLoggedInUserId(), "YOUTUBE")
      .subscribe(
        widget => this.router.navigate(['/widget-youtube/website/' + this.websiteId + '/page/'+this.pageId + '/widget/' + widget._id])
      )
    // this.router.navigate(['/widget-youtube/website/' + this.websiteId + '/page/'+this.pageId]);
  }


  getUrlParams() : void{
    this._routeParams.params.subscribe(params => {
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
    });
  }

  getLoggedInUserId() : string {
    if(!(localStorage.getItem('currentUser') === null)){
      var user :any = JSON.parse(localStorage.getItem('currentUser'));
    }

      return user._id;
  }

  addWidget(widgetType) : void {
    this.widgetsService.createWidget(this.websiteId, this.pageId, this.getLoggedInUserId(), widgetType)
    .subscribe(
        widget => this.router.navigate(['/widget-header/website/' + this.websiteId + '/page/'+this.pageId + '/widget/' + widget._id])
      )
  }

}
