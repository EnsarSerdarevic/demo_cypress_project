describe('Login funkcionalnost - Valid Credentials', () => {
  it('Treba uspješno prijaviti korisnika sa validnim kredencijalima', () => {
    
    // Posjećivanje login stranice
    cy.visit('/')
    
    // Korištenje custom login komande s fixtures podacima
    cy.login('standard_user') 
    
    // Provjera da li je korisnik preusmjeren na inventar stranicu
    cy.url().should('include', '/inventory.html')
  })
})