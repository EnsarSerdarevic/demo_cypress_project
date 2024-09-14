describe('Prolazak kroz proces naplate sa proizvodima u korpi', () => {
    it('Treba omogućiti korisniku da nastavi do stranice za naplatu', () => {
  
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
  
      // Provjera da smo preusmjereni na Checkout stranicu
      cy.url().should('include', '/checkout-step-one.html')
  
      // Unos informacija o kupcu
      cy.get('[data-test="firstName"]').type('Test')
      cy.get('[data-test="lastName"]').type('User')
      cy.get('[data-test="postalCode"]').type('12345')
  
      // Klik na dugme za nastavljanje
      cy.get('[data-test="continue"]').click()
  
      // Provjera da smo preusmjereni na Checkout Overview stranicu
      cy.url().should('include', '/checkout-step-two.html')
  
      // Provjera da je proizvod i dalje u listi na stranici za pregled
      cy.get('.cart_item').should('have.length', 1)
    });
  });
  