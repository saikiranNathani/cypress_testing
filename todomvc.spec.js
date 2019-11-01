///<reference types="cypress"/>
it('should navigate todomvc app', () =>
    {
      cy.visit("https://facebook.com")
      cy.get('[data-testid=royal_email]').type("naathanisaikiran@gmail.com")
      cy.get('[data-testid=royal_pass]').type("xxxxxxxxxxxxx")
      cy.get('[data-testid=royal_login_button]').click()
    }
)