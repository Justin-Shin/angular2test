import { Ang2LibraryPage } from './app.po';

describe('ang2-library App', function() {
  let page: Ang2LibraryPage;

  beforeEach(() => {
    page = new Ang2LibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
