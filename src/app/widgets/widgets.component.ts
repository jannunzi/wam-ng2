import { Component, OnInit } from '@angular/core';
import { WidgetsService} from './../shared/widgets.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule, ActivatedRoute} from '@angular/router';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  providers: [WidgetsService]
})
export class WidgetsComponent implements OnInit {

  constructor(private _routeParams: ActivatedRoute,
              private router:Router,
              private widgetsService : WidgetsService,
              private sanitizer : DomSanitizer) { }

  websiteId : string;
  pageId : string;
  widgets : any[];
  youtubeURL: string;

  ngOnInit() {
   this.getUrlParams();
   this.findWidgetsForPage();
  }

  addNewWidget() : void {
    this.router.navigate(['/add-widget/website/' + this.websiteId + '/page/'+this.pageId]);
  }

  getUrlParams() : void{
    this._routeParams.params.subscribe(params => {
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
    });
  }

  findWidgetsForPage() : void{
    this.widgetsService.findWidgetForPage(this.websiteId, this.pageId)
      .subscribe(
        widgets => this.widgets = widgets
      )
  }

  editWidget(widget) : void{
    console.log('Edit Widget object: ', typeof(widget.widgetType));
    if(widget.widgetType === "YOUTUBE"){
      this.router.navigate(['/youtube-edit/website/' + this.websiteId + '/page/'+this.pageId + '/widget/' + widget._id]);
    }
    // this.router.navigate(['/widget-edit/website/' + this.websiteId + '/page/'+this.pageId + '/widget/' + widget._id]);
  }




  // public safeYouTubeUrl(widget) : string{
  //   console.log("Before If");
  //   if(widget && widget.youTube) {
  //     let urlParts = widget.youTube.url.split("/");
  //     console.log('URL parts: ', urlParts);
  //     let youTubeId = urlParts[urlParts.length-1];
  //     console.log(youTubeId);
  //     return "https://www.youtube.com/embed/"+youTubeId;
  //   }
  //   return "";
  // }


}
