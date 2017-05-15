var login = require('./login.js');
var employee = require('./employee.js');
var employeeAdd = require ('./employeeAdd.js');
var employeeEdit = require ('./employeeEdit.js');
var login = new login();
var employee = new employee();
var employeeAdd = new employeeAdd();
var employeeEdit = new employeeEdit();

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
        expect(element(by.id('greetings')).getText()).toBe('Hello Luke');
    });

    it('when i select a user and click on Edit it should update LastName', function(){
        var lastName = "name 1";

        employee.selectEmployee();
        employee.editEmployee();

        employeeEdit.setLastName(lastName);
        employeeEdit.clickOnUpdate();
        expect(element(by.id('greetings')).getText()).toBe('Hello Luke');
    });
});
