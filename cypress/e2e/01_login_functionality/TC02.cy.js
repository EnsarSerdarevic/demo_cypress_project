describe('Login funkcionalnost - Invalid Credentials', () => {
    it('Treba prikazati poruku o grešci kada se unesu neispravni podaci za prijavu', () => {
      
      // Posjećivanje login stranice
    cy.visit('/')
    
    // Korištenje custom login komande s fixtures podacima
    cy.login('invalid_user') 
      
      // Provjera da se prikazuje poruka o grešci
      cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Epic sadface: Username and password do not match any user in this service')
    })
  })
  