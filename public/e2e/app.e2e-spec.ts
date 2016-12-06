import { ZhalobaPage } from './app.po';

describe('zhaloba App', function() {
  let page: ZhalobaPage;

  beforeEach(() => {
    page = new ZhalobaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
