import { NgcRepoPage } from './app.po';

describe('ngc-repo App', function() {
  let page: NgcRepoPage;

  beforeEach(() => {
    page = new NgcRepoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
