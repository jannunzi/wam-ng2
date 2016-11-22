import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthenticationService]
})

export class RegisterComponent implements OnInit {

  developer:any = {};

  error:boolean = false;

  registerForm:FormGroup;

  constructor(private authenticationService:AuthenticationService, private router:Router, fb:FormBuilder) {
    this.registerForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
      'password2': [null, Validators.compose([Validators.required])]
    }, {validator: this.passwordMatch('password', 'password2')});
  }

  ngOnInit() {
    this.developer = {}
  }

  passwordMatch(passwordKey:string, passwordConfirmationKey:string) {
    return (group:FormGroup) => {
      let passwordInput = group.controls[passwordKey];
      let passwordConfirmationInput = group.controls[passwordConfirmationKey];

      if (passwordConfirmationInput.value != '' && passwordInput.value !== passwordConfirmationInput.value) {
        return {match: true};
      }
      return null;
    }
  }

  register(developer) {
    delete developer.password2;
    this.authenticationService
      .register(developer)
      .then(
        function (response) {
          this.registerForm.setErrors({'dbError': false});
          if (response._body !== 'null') {
            this.registerForm.controls['username'].setErrors({'usernameExists': false});
            this.router.navigate(['/']);
          }
          else {
            this.registerForm.controls['username'].setErrors({'usernameExists': true});
          }
        }.bind(this),
        function (err) {
          this.registerForm.setErrors({'dbError': true});
          this.error = err;
        }.bind(this)
      );
  }

  goToLogin() {
    this.router.navigate(['/']);
  }
}
