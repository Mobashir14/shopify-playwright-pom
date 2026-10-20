
class CartPage {
  constructor(page) {
    this.page = page;

    this.cartHeading = page.getByRole('heading', {
      name: 'My Cart'
    });

    this.emptyCartMessage = page.getByText(
      'Your cart is empty!'
    );
  }

  async open() {
    await this.page.goto(
      'https://sauce-demo.myshopify.com/cart'
    );
  }
}

module.exports = CartPage;
