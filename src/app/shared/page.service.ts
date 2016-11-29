import { Injectable } from '@angular/core';
import {Page} from './models/page'
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class PageService {

  constructor(public http : Http) { }


  /*
  * Find all pages for a given website ID
  */
  findPagesForWebsite(websiteId) : Observable<Page[]> {
  return this.http.get('http://localhost:3000/api/website/'+websiteId+'/page')
    .map(
      (responseData) => {
        return responseData.json();
      }
    )
  }

  /*
  * Create a new page
  */
  createPage(page , websiteId) : Observable<any>{
    return this.http.post('http://localhost:3000/api/website/' + websiteId +'/page', page)
      .map(
        (responseData) => {
          return responseData;
        }
      )
  }

}
