import { RestaurantWebsitePage } from './app.po';

describe('restaurant-website App', function() {
  let page: RestaurantWebsitePage;

  beforeEach(() => {
    page = new RestaurantWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
