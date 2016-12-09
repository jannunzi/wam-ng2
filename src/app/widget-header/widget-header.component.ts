import { Component, OnInit } from '@angular/core';
import { WidgetsService} from './../shared/widgets.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css'],
  providers: [WidgetsService]
})
export class WidgetHeaderComponent implements OnInit {

  constructor(private router:Router,
              private _routeParams: ActivatedRoute,
              private widgetsService : WidgetsService) { }

  header : any = {};
  websiteId : string;
  pageId : string;
  widgetId : string;
  currentWidget : any;

  ngOnInit() {
   this.getUrlParams();
   this.getWidgetById();
  }

  addHeader(header) : void {
    console.log(this.currentWidget);
    this.currentWidget.name = header.name;
    this.currentWidget.text = header.text;
    this.currentWidget.header = {size : header.size};
    console.log(this.currentWidget);
    this.widgetsService.updateWidget(this.websiteId, this.pageId, this.widgetId, this.currentWidget)
      .subscribe(
        widget => this.router.navigate(['/widgets/website/' + this.websiteId + '/page/' + this.pageId])
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
