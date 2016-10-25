import { WamNg2Page } from './app.po';

describe('wam-ng2 App', function() {
  let page: WamNg2Page;

  beforeEach(() => {
    page = new WamNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
