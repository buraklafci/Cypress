class HomePage{
    homePage(){
        return cy.visit('https://www.hotelmycamp.com/')
    }
   login(){
    //return cy.get('#navLogon > .nav-link').click()
    return cy.contains('Log in').click()
   }
}
export default HomePage