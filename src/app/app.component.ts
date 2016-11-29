import { Component } from '@angular/core';
import { UserService } from "./shared/user.service";
import { AuthenticationService } from "./shared/authentication.service";
import { WebsitesService} from './shared/websites.service';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService, AuthenticationService, WebsitesService ]
})
export class AppComponent {
  title = 'app works!';
}
