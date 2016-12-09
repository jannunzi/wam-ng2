import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from "./page-not-found";
import { WebsitesComponent } from "./websites"
import { NewWebsiteComponent } from "./new-website"
import { EditWebsiteComponent } from "./edit-website"
import { PagesComponent } from "./pages"
import { NewPageComponent } from "./new-page"
import { EditPageComponent } from "./edit-page"
import { AddWidgetComponent } from "./add-widget"
import { WidgetsComponent } from "./widgets"
import { WidgetHeaderComponent } from "./widget-header"
import { WidgetYoutubeComponent } from "./widget-youtube"
import { WidgetImageComponent } from "./widget-image"


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  { path: 'websites', component: WebsitesComponent },
  { path: 'new-website', component: NewWebsiteComponent },
  { path: 'edit-website/:websiteId', component: EditWebsiteComponent },
  { path: 'pages/:developerId/:websiteId', component: PagesComponent },
  { path: 'new-page/website/:websiteId', component: NewPageComponent },
  { path: 'edit-page/website/:websiteId/page/:pageId', component: EditPageComponent },
  { path: 'add-widget/website/:websiteId/page/:pageId', component : AddWidgetComponent },
  { path: 'widgets/website/:websiteId/page/:pageId', component : WidgetsComponent },
  { path: 'widget-image/website/:websiteId/page/:pageId', component : WidgetImageComponent },
  { path: 'widget-header/website/:websiteId/page/:pageId/widget/:widgetId', component : WidgetHeaderComponent },
  { path: 'widget-youtube/website/:websiteId/page/:pageId', component : WidgetYoutubeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class WAMRoutingModule { }
