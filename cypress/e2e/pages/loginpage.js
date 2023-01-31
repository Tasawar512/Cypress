export class LoginPages{

username_textbox='input[name=username]'
password_textbox='input[name=password]'
login_button='.oxd-button'

enterusername(username){
    cy.get(this.username_textbox).type(username)
}

enterpassword(password){
    cy.get(this.password_textbox).type(password)
}

clicklogin(){
    cy.get(this.login_button).click()
}

}