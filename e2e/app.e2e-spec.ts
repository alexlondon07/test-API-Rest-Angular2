import { TestAPIRestAngular2Page } from './app.po';

describe('test-api-rest-angular2 App', function() {
  let page: TestAPIRestAngular2Page;

  beforeEach(() => {
    page = new TestAPIRestAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
