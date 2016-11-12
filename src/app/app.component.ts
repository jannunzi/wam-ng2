import { Component } from '@angular/core';
import { WebsitesService} from './shared/websites.service';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [WebsitesService]
})
export class AppComponent {
  title = 'app works!';
}
