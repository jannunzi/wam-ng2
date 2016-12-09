import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class WidgetsService {

  constructor(public http : Http) {
  }

  /*
  * Creates a new widget
  */
  createWidget(websiteId, pageId, developerId, widgetType) : Observable<any>{
    return this.http.post('http://localhost:3000/api/website/'+websiteId +'/page/' + pageId + '/widget?widgetType=' + widgetType + '&developerId=' +developerId, {})
      .map(
        (responseData) => {
          return responseData.json();
        }
      )
  }


  /*
  * Get widget by widget Id
  */
  findWidgetById(websiteId, pageId, widgetId) : Observable<any>{
    return this.http.get('http://localhost:3000/api/website/'+websiteId +'/page/' + pageId + '/widget/' + widgetId)
      .map(
        (responseData) => {
          return responseData.json();
        }
      )
  }


  /*
  * Update Widget
  */
  updateWidget(websiteId, pageId, widgetId, widget) : Observable<any> {
   return this.http.put('http://localhost:3000/api/website/' + websiteId +'/page/' + pageId + '/widget/' + widgetId, widget)
   .map(
     (responseData) => {
       return responseData.json();
     }
   )
  }

  /*
  * Find Widget For A Page
  */
  findWidgetForPage(websiteId, pageId) : Observable<any> {
    return this.http.get('http://localhost:3000/api/website/' + websiteId +'/page/' + pageId + '/widget')
    .map(
      (responseData) => {
        return responseData.json();
      }
    )
  }


}
