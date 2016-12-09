import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.css']
})
export class AddWidgetComponent implements OnInit {

  constructor(private _routeParams: ActivatedRoute,
              private router:Router) { }

  websiteId : string;
  pageId : string;

  ngOnInit() {
    this.getUrlParams();
  }

  addImage() : void {
    this.router.navigate(['/widget-image/website/' + this.websiteId + '/page/'+this.pageId]);
  }

  addHeader() : void {
    this.router.navigate(['/widget-header/website/' + this.websiteId + '/page/'+this.pageId]);
  }

  addYouTube() : void {
    this.router.navigate(['/widget-youtube/website/' + this.websiteId + '/page/'+this.pageId]);
  }


  getUrlParams() : void{
    this._routeParams.params.subscribe(params => {
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
    });
  }

}
