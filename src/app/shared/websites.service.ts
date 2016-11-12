import { Injectable } from '@angular/core';
import { WebsitesComponent} from './../websites'
import {Website} from './models/website'
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class WebsitesService {

  constructor(public http : Http) {
  }

  getWebistesForUser(): Website[] {
      return [
              {
                "_id": "581a7f512931271322fe3122",
                "description": "Test Website",
                "_developer": "581a77f42931271322fe3121",
                "__v": 0,
                "pages": [],
                "dateModified": "2016-11-08T22:29:34.000Z",
                "dateCreated": "2016-11-03T00:05:37.522Z",
                "name": "Test Website"
              }
            ];
  }

  getWebSitesByDeveloperId() : Observable<Website[]> {
    return this.http.get('http://localhost:3000/api/developer/581a77f42931271322fe3121/website')
      .map(
        (responseData) => {
          return responseData.json();
        }
      )
  }

}
