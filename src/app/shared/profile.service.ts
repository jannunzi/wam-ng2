import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class ProfileService {
  constructor (public http : Http) { }
  developer : any

  //TODO: Currently not conneccted to the view. Working from end to end.
  getDeveloperByUsername(username) : Observable<any>{
    console.log('Profile Service :',username);
    return this.http.get('/api/developer/'+ username)
      .map(
        (responseData: Response) => {
          return responseData.json();
        }
      )
  }

  getDeveloperList(developerId) : Observable<any>{
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

  updateDeveloper(updatedDeveloper) : Observable<any>{
    console.log("I am in Profile Service");
    console.log(updatedDeveloper);
    return this.http.put('/api/developer/'+updatedDeveloper.username, updatedDeveloper)
      .map(
        (responseData: Response) => {
          console.log(responseData);
        }
      )
  }
}
