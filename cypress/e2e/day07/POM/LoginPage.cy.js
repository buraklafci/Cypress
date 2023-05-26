class LoginPage{
userName(){
    return cy.get('#UserName')
}
password(){
return cy.get('#Password')
}
loginButton(){
return  cy.get('#btnSubmit').click()
}
assert(){
return cy.get('.username')
}

}
export default LoginPage