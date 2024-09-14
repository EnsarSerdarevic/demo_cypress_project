describe('Odjava korisnika', () => {
    it('Treba omogućiti korisniku uspješnu odjavu', () => {
  
      // Posjećivanje stranice s inventarom
      cy.visit('https://www.saucedemo.com/')
      
      // Prijava s validnim korisničkim podacima
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
  
      // Provjera da je korisnik preusmjeren na inventar stranicu
      cy.url().should('include', '/inventory.html')
  
      // Otvaranje menija
      cy.get('#react-burger-menu-btn').click()
  
      // Klik na dugme Logout
      cy.get('#logout_sidebar_link').click()
  
      // Provjera da je korisnik preusmjeren na login stranicu nakon odjave
      cy.url().should('include', '/')
      
      // Provjera da je dugme za prijavu prisutno, što znači da je korisnik odjavljen
      cy.get('[data-test="login-button"]').should('be.visible')
    });
  });
  