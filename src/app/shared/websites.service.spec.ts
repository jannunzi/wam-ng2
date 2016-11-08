/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WebsitesService } from './websites.service';

describe('Service: Websites', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsitesService]
    });
  });

  it('should ...', inject([WebsitesService], (service: WebsitesService) => {
    expect(service).toBeTruthy();
  }));
});
