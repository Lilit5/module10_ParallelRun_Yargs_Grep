const PageFactory = require("../utils/page_objects/pageFactory");

const BasePage = PageFactory.getPage();
const LoginPage = PageFactory.getPage("Login");

describe('magento login-logout', function() {

    it('should login successfully #login #all', async function() {
        await LoginPage.loginAsAdmin('admin', 'lilit1234');
        expect(LoginPage.getCurrentUrl()).toEqual(LoginPage.loggedInUrl);
      });

    it('should logout successfully #logout #all', async function(){
        await BasePage.logOut();
        expect(BasePage.getCurrentUrl()).toEqual("http://magento.loc/admin/admin/");
   });
});
