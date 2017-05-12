var login = require('./login.js');
var employee = require('./employee.js');
var employeeAdd = require ('./employeeAdd.js');
var login = new login();
var employee = new employee();
var employeeAdd = new employeeAdd();

describe('when i enter valid username & password', function(){
    it('should log in successfully', function(){
        login.goToUrl();
        login.isAtLoginPage();

        login.setUserName();
        login.setPassword();
        login.clickOnLogin();
        expect(element(by.id('greetings')).getText()).toBe('Hello Luke');
    });

    it('when i click on add', function(){
        employee.createEmployee();
        employeeAdd.setFirstName();
        employeeAdd.setLastName();
        employeeAdd.setStartDate();
        employeeAdd.setEmail();
        employeeAdd.clickOnLogin();
    });
});
