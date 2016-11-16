import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private http: Http) {
    console.log('User Service initialized');
  }

  // getFoo(): Observable<string> {
  //   console.log('Getting response from /api/foo ...');
  //   return this.http
  //     .get('/api/foo')
  //     .map(res => res.json());
  // }
}
