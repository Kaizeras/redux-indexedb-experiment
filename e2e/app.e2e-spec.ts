import { IndexeddbPrfPage } from './app.po';

describe('indexeddb-prf App', () => {
  let page: IndexeddbPrfPage;

  beforeEach(() => {
    page = new IndexeddbPrfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
