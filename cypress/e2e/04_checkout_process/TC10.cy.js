describe('Provjera stranice za potvrdu narudžbe - proizvodi i cijene', () => {
    it('Treba prikazati tačne proizvode i cijene prije završetka kupovine', () => {
  
      // Posjećivanje stranice s inventarom
      cy.visit('https://www.saucedemo.com/')
      
      // Prijava s validnim korisničkim podacima
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
  
      // Provjera da je korisnik preusmjeren na inventar stranicu
      cy.url().should('include', '/inventory.html')
  
      // Dodavanje proizvoda u korpu
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  
      // Navigacija do stranice s korpom
      cy.get('.shopping_cart_link').click()
  
      // Provjera da je proizvod prisutan u korpi
      cy.get('.cart_item').should('have.length', 1)
  
      // Klik na dugme za Checkout
      cy.get('[data-test="checkout"]').click()
  
      // Unos informacija o kupcu
      cy.get('[data-test="firstName"]').type('Test')
      cy.get('[data-test="lastName"]').type('User')
      cy.get('[data-test="postalCode"]').type('12345')
  
      // Klik na dugme za nastavljanje
      cy.get('[data-test="continue"]').click()
  
      // Provjera da smo preusmjereni na Checkout Overview stranicu
      cy.url().should('include', '/checkout-step-two.html')
  
      // Provjera proizvoda na stranici za pregled
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
  
      // Provjera da li je cijena tačna
      cy.get('.inventory_item_price').should('contain', '$29.99')
  
      // Klik na dugme "Finish" za završetak kupovine
      cy.get('[data-test="finish"]').click()
  
      // Provjera da je korisnik preusmjeren na stranicu za potvrdu narudžbe
      cy.url().should('include', '/checkout-complete.html')
  
      // Provjera poruke o uspješnoj narudžbi
      cy.get('.complete-header').should('contain', 'Thank you for your order!')
    });
  });
  