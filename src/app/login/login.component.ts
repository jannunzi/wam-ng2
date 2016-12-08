import {Component, OnInit, ElementRef, Inject} from '@angular/core';
import { AuthenticationService } from '../shared';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  developer: any = {};
  elmt: ElementRef;

  constructor(private authService: AuthenticationService,
              @Inject(ElementRef) elementRef: ElementRef) {
    this.elmt = elementRef;
  }

  ngOnInit() {
    $(this.elmt.nativeElement)
        .find('.moving-box')
        .draggable({containment:'#draggable-parent'});
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
