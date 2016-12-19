import {Component, OnInit} from '@angular/core';
import {WidgetsService} from './../shared/widgets.service';
import {WidgetImageService} from '../shared/widget-image.service';
import 'rxjs/add/operator/map';
import {Router, Routes, RouterModule, ActivatedRoute} from '@angular/router';
import {subscribeToResult} from "rxjs/util/subscribeToResult";

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css'],
  providers: [WidgetImageService, WidgetsService]
})
export class WidgetImageComponent implements OnInit {

  developerId:string;
  images:any = {};
  error:string;
  websiteId:string;
  pageId:string;
  widgetId:string;

  constructor(private router:Router,
              private _routeParams:ActivatedRoute,
              private imageService:WidgetImageService,
              private widgetsService:WidgetsService) {
  }

  ngOnInit() {

    this.getUrlParams();
    this.developerId = this.getLoggedInUserId();
    this.findUserImages();
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

  // Hack for angular 2
  // Current version of Angular 2 does not recognize a complex array of objects in HTML template
  // To make it recognize as an array, call this function from the HTML template
  hack(val) {
    return Array.from(val);
  }


  findUserImages() {
    this.imageService
      .findUserImages(this.developerId).subscribe(
      response => {
        this.images = response;
      }
    )
  }

  addImage():void {
    this.router.navigate(['/new-widget-image/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId]);
  }

  goBack():void {
    this.router.navigate(['/add-widget/website/' + this.websiteId + '/page/' + this.pageId]);
  }

  selectImage(image):void {
    let newWidget = {
      image: {
        image_Id: image._id,
        url: image.url,
        size: ""
      }
    };
    this.widgetsService
      .updateWidget(this.websiteId, this.pageId, this.widgetId, newWidget)
      .subscribe(
        response => {
          if (response) {
            this.router.navigate(["/widgets/website/" + this.websiteId + "/page/" + this.pageId]);
          }
        });
  }

  deleteImage(imageId) {
    this.imageService
      .deleteImage(imageId)
      .then(resp => {
        this.widgetsService.deleteUserImages(imageId)
          .then(() => {
            this.findUserImages();
          });
      });
  }

}
