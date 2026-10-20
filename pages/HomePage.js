
class HomePage {
  constructor(page) {
    this.page = page;
  }
}
class HomePage {
  constructor(page) {
    this.page = page;

    // Locators
    this.demoMessage = page.getByText(
      'Just a demo site showing off what Sauce can do.'
    );

    this.greyJacket = page.getByRole('link', {
      name: /Grey jacket/i
    });

    this.noirJacket = page.getByRole('link', {
      name: /Noir jacket/i
    });

    this.stripedTop = page.getByRole('link', {
      name: /Striped top/i
    });

    this.catalogLink = page.getByRole('link', {
      name: 'Catalog'
    });

    this.signupLink = page.getByRole('link', {
      name: 'Sign up'
    });
  }

  async open() {
    await this.page.goto('https://sauce-demo.myshopify.com/');
  }
}

module.exports = HomePage;
