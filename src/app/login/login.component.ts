import {Component, OnInit, ElementRef, Inject} from '@angular/core';
import { AuthenticationService } from '../shared';
import { Router } from '@angular/router'

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
              @Inject(ElementRef) elementRef: ElementRef,
              private router: Router) {
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
          this.router.navigate(['profile']);
        },
        error => {
          console.log('Error while logging in at Login Component: ', error);
        }
      );
  }

}
