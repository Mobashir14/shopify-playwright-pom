
class CatalogPage {
  constructor(page) {
    this.page = page;

    this.productsHeading = page.getByRole('heading', {
      name: 'Products'
    });

    this.blackHeels = page.getByText('Black heels');

    this.noirJacket = page.getByText('Noir jacket');
  }

  async open() {
    await this.page.goto(
      'https://sauce-demo.myshopify.com/collections/all'
    );
  }
}

module.exports = CatalogPage;
