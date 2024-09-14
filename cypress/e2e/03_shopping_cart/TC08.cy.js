describe('Uklanjanje proizvoda iz korpe', () => {
    it('Treba omogućiti uklanjanje proizvoda iz korpe', () => {
  
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
  
      // Uklanjanje proizvoda iz korpe
      cy.get('[data-test="remove-sauce-labs-backpack"]').click()
  
      // Provjera da je korpa prazna
      cy.get('.cart_item').should('not.exist')
      cy.get('.shopping_cart_badge').should('not.exist') // Ikona korpe bi trebala nestati
    });
  });
  