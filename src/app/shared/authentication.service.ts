import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AuthenticationService {
  constructor (private http: Http) { }

  login (username, password) {
    let developer = {
      username: username,
      password: password
    };
    console.log('Login in Auth Service');
    return this.http
      .post('/api/login', developer)
      .map((res: Response) => {
        let user = res.json();
        console.log('User in Auth Service: ', user);
        if (user) {
          // Store user details
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  register(user):any {
    return this.http.post("/api/register", user).toPromise();
  }
}
