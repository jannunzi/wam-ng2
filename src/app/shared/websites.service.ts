import { Injectable } from '@angular/core';
import { WebsitesComponent} from './../websites'
import {Website} from './models/website'

@Injectable()
export class WebsitesService {

  constructor() { }

  getWebistesForUser(): Website[] {
      return [{id: 11, name: 'Apple'},
              {id: 22, name: 'Google'},
              {id: 33, name: 'Facebook'},
              {id: 44, name: 'CNN'},
              {id: 55, name: 'Twitter'},
              {id: 66, name: 'GitHub'}];
  }

}
