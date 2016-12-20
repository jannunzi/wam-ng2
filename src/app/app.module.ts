import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WAMRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
//import { MaterializeModule } from "angular2-materialize";
//import { MaterialIcons } from "material-design-icons";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ProfileComponent} from './profile';
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WebsitesComponent } from './websites/websites.component';
import { NewWebsiteComponent } from './new-website/new-website.component';
import { EditWebsiteComponent } from './edit-website/edit-website.component';
import { PagesComponent } from './pages/pages.component';
import { NewPageComponent } from './new-page/new-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { JgaSortableDirective } from './directives/jga-sortable.directive';
import { AddWidgetComponent } from './add-widget/add-widget.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetHeaderComponent } from './widget-header/widget-header.component';
import { WidgetYoutubeComponent } from './widget-youtube/widget-youtube.component';
import { WidgetImageComponent } from './widget-image/widget-image.component';
import { NgComponent } from './ng/ng.component';
import { WidgetEditComponent } from './widget-edit/widget-edit.component';
import { JgaDraggableDirective } from './directives/jga-draggable.directive';
import { YoutubeEditComponent } from './youtube-edit/youtube-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditProfileComponent,
    PageNotFoundComponent,
    WebsitesComponent,
    NewWebsiteComponent,
    EditWebsiteComponent,
    PagesComponent,
    NewPageComponent,
    EditPageComponent,
    JgaSortableDirective,
    AddWidgetComponent,
    WidgetsComponent,
    WidgetHeaderComponent,
    WidgetYoutubeComponent,
    WidgetImageComponent,
    NgComponent,
    WidgetEditComponent,
    JgaDraggableDirective,
    YoutubeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    WAMRoutingModule,
    MaterialModule.forRoot()
    //MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
