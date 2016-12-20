import { Component, OnInit } from '@angular/core';
import { WidgetsService} from './../shared/widgets.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';
import any = jasmine.any;

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css'],
  providers: [WidgetsService]
})
export class WidgetYoutubeComponent implements OnInit {

  constructor(private router:Router,
              private _routeParams: ActivatedRoute,
              private widgetsService : WidgetsService) { }

  youtube : any = {};
  websiteId : string;
  pageId : string;
  widgetId : string;
  currentWidget : any;


  ngOnInit() {
    this.getUrlParams();
    this.getWidgetById();
  }

  addYoutube(youtube) : void{
    // console.log('Youtube Object is: ', youtube);
    console.log(this.currentWidget);
    this.currentWidget.youTube = {url : youtube.videoURL, width : youtube.size};
    console.log('About to send youtube obj as: ', this.currentWidget);
    this.widgetsService.updateWidget(this.websiteId, this.pageId, this.widgetId, this.currentWidget)
      .subscribe(
        widget => this.router.navigate(['/widgets/website/' + this.websiteId + '/page/' + this.pageId])
        // console.log('Updated Website received as: ',widget)
      )
  }

  getUrlParams() : void{
    this._routeParams.params.subscribe(params => {
      this.pageId = params['pageId'];
      this.websiteId = params['websiteId'];
      this.widgetId = params['widgetId'];
    });
  }

  getWidgetById() : void{
    this.widgetsService.findWidgetById(this.websiteId, this.pageId, this.widgetId)
      .subscribe(
        widget => this.currentWidget = widget
      )
  }

}
