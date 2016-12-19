import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {WidgetsService} from './../shared/widgets.service';
import {WidgetImageService} from '../shared/widget-image.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Router, Routes, RouterModule, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-widget-image',
  templateUrl: './new-widget-image.component.html',
  styleUrls: ['./new-widget-image.component.css'],
  providers: [WidgetImageService, WidgetsService]
})
export class NewWidgetImageComponent implements OnInit {

  developerId:string;
  image:any = {};
  websiteId:string;
  pageId:string;
  widgetId:string;
  currentWidget:any;

  constructor(private router:Router,
              private _routeParams:ActivatedRoute,
              private imageService:WidgetImageService,
              private widgetsService:WidgetsService) {
  }

  ngOnInit() {

    this.getUrlParams();
    this.getWidgetById();
    this.developerId = this.getLoggedInUserId();
  }

  getLoggedInUserId():string {
    if (!(localStorage.getItem('currentUser') === null)) {
      var user:any = JSON.parse(localStorage.getItem('currentUser'));
    }

    return user._id;
  }

  getUrlParams():void {
    this._routeParams.params.subscribe(params => {
      this.pageId = params['pageId'];
      this.websiteId = params['websiteId'];
      this.widgetId = params['widgetId'];
    });
  }

  getWidgetById():void {
    this.widgetsService.findWidgetById(this.websiteId, this.pageId, this.widgetId)
      .subscribe(
        widget => this.currentWidget = widget
      )
  }

  addImageURL(image) {
    this.imageService.addImageURL(this.developerId, image)
      .subscribe(
        resp => this.router.navigate(['/search-widget-image/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId])
      )
  }

  imageChanged(event) {
    if (event.srcElement.files[0]) {
      this.image.myFile = event.srcElement.files[0];
    }
  }

  uploadImage(image) {

    image.widgetId = this.widgetId;
    image.developerId = this.developerId;
    image.pageId = this.pageId;
    image.userId = this.developerId;
    image.websiteId = this.websiteId;

    this.imageService.uploadImage(image)
      .then(
        resp => {
          this.router.navigate(['/search-widget-image/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId])
        }
      )
  }


  goBack():void {
    this.router.navigate(['/search-widget-image/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId])
  }

}
