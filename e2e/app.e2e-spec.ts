import { HcPortalPage } from './app.po';

describe('hc-portal App', function() {
  let page: HcPortalPage;

  beforeEach(() => {
    page = new HcPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
