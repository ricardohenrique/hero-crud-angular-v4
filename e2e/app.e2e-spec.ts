import { CrudAngularV4Page } from './app.po';

describe('crud-angular-v4 App', () => {
  let page: CrudAngularV4Page;

  beforeEach(() => {
    page = new CrudAngularV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
