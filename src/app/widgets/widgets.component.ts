import { Component, OnInit } from '@angular/core';
import { WidgetsService} from './../shared/widgets.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Router, Routes, RouterModule, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css'],
  providers: [WidgetsService]
})
export class WidgetsComponent implements OnInit {

  constructor(private _routeParams: ActivatedRoute,
              private router:Router,
              private widgetsService : WidgetsService) { }

  websiteId : string;
  pageId : string;
  widgets : any[];

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

  findWidgetsForPage(){
    this.widgetsService.findWidgetForPage(this.websiteId, this.pageId)
      .subscribe(
        widgets => this.widgets = widgets
      )
  }

}
