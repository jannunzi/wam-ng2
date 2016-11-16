import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {forEach} from "@angular/router/src/utils/collection";
// Need to look for the ts files from "models" folder.

@Injectable()
export class ProfileService {
  constructor (public http : Http) { }

  getDeveloperList(developerId) : Observable<any>{
    // console.log(developerId);
    return this.http.get('/api/developer')
      .map(
        (responseData: Response) => {
          let developerList = responseData.json();
          let developerWithId = this.getDeveloperWithId(developerList, developerId);
          return developerWithId;
        }
      )
  }
  // Returns a single objet that matches with the Developer ID sent.
  private getDeveloperWithId(data, developerId){
    for(var i=0; i < data.length; i++){
      if(data[i]._id == developerId){
        return data[i]
      }
    }
  }
}
