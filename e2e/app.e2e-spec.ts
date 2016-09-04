import { FirePadelPage } from './app.po';

describe('fire-padel App', function() {
  let page: FirePadelPage;

  beforeEach(() => {
    page = new FirePadelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
