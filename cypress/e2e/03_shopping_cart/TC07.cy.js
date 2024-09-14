describe('Dodavanje proizvoda u korpu sa stranice s inventarom', () => {
    it('Treba omogućiti dodavanje proizvoda u korpu', () => {
  
      // Posjećivanje stranice s inventarom
      cy.visit('https://www.saucedemo.com/')
      
      // Prijava s validnim korisničkim podacima
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
  
      // Provjera da je korisnik preusmjeren na inventar stranicu
      cy.url().should('include', '/inventory.html')
  
      // Dodavanje prvog proizvoda u korpu
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  
      // Provjera da se ikona korpe ažurira na 1
      cy.get('.shopping_cart_badge').should('have.text', '1')
  
      // Navigacija do stranice s korpom
      cy.get('.shopping_cart_link').click()
  
      // Provjera da je proizvod prisutan u korpi
      cy.get('.cart_item').should('have.length', 1)
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
    });
  });
  