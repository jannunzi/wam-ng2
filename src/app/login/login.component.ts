import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  developer: any = {};

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login () {
    console.log('Login Component, Username: ', this.developer.username, ' Password: ',this.developer.password);
    this.authService
      .login(this.developer.username, this.developer.password)
      .subscribe(
        data => {
          console.log('ToDo: Navigate to User Profile / Home');
        },
        error => {
          console.log('Error while logging in at Login Component: ', error);
        }
      );
  }

}
