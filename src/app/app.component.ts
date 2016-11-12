import { Component } from '@angular/core';
import { UserService } from "./shared/user.service";
import { AuthenticationService } from "./shared/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService, AuthenticationService ]
})
export class AppComponent {
  title = 'app works!';
}
