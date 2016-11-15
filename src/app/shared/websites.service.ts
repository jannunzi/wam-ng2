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

  /*
  * Returns the list of websites for a particular developer
  */
  getWebSitesByDeveloperId(developerId) : Observable<Website[]> {
    return this.http.get('http://localhost:3000/api/developer/'+developerId+'/website')
      .map(
        (responseData) => {
          return responseData.json();
        }
      )
  }


  /*
  * Creates a new website
  */
  createWebsite(website) : Observable<any>{
    return this.http.post('http://localhost:3000/api/developer/581a77f42931271322fe3121/website', website)
      .map(
        (responseData) => {
          return responseData;
        }
      )
  }

  /*
  * Find Website By ID
  */
  findWebsiteById(websiteID) : Observable<Website>{
  return this.http.get('http://localhost:3000/api/website/'+ websiteID)
    .map(
      (responseData) => {
        return responseData.json();
      }
    )
  }

  /*
  * Update Single Website
  */
  updateWebsite(website) : Observable<any> {
  return this.http.put('http://localhost:3000/api/website/'+ website._id, website)
    .map(
      (responseData) => {
        return responseData.json();
      }
    )
  }

  /*
  * Delete Single Website
  */

}
