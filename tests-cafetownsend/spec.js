var login = require('./login.js');
var login = new login();

describe('when i enter valid username & password', function(){
    it('should log in successfully', function(){
        login.goToUrl();
        login.isAtLoginPage();

        login.setUserName();
        login.setPassword();
        login.clickOnLogin();
        expect(element(by.id('greetings')).getText()).toBe('Hello Luke');
    });
});