
   import { LoginPages } from "./pages/loginpage"
   const loginpage= new LoginPages()

   describe('All Login Tests', () => {
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('Login 1', () => {
    
        cy.wait(6000)
        loginpage.enterusername('Admin')
        loginpage.enterpassword('admin123')
        loginpage.clicklogin()
        cy.wait(5000)
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
     
      })
  
      it('Login 2', () => {
          cy.wait(6000)
          loginpage.enterusername('Admin')
          loginpage.enterpassword('admin123')
          loginpage.clicklogin()
          cy.wait(5000)
          cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
  
       
        })

   })
  