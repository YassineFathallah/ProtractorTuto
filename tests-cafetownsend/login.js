var login = function()
{
    this.goToUrl = function() {
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
    };

    this.setUserName = function() {
        element(by.model('user.name')).sendKeys('Luke');
    };

    this.setPassword = function() {
        element(by.model('user.password')).sendKeys('Skywalker');
    };

    this.clickOnLogin = function() {
        element(by.css('button.main-button')).click();
    };

    this.isAtLoginPage = function() {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.presenceOf(element(by.model('user.name')), 5000));
    }
};

module.exports = login;