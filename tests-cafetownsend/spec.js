var login = require('./login.js');
var employee = require('./employee.js');
var employeeAdd = require ('./employeeAdd.js');
var employeeEdit = require ('./employeeEdit.js');
var login = new login();
var employee = new employee();
var employeeAdd = new employeeAdd();
var employeeEdit = new employeeEdit();

describe('testSuite01', function(){
    it('login success test', function(){
        login.goToUrl();
        login.isAtLoginPage();

        login.setUserName();
        login.setPassword();
        login.clickOnLogin();
        expect(element(by.id('greetings')).getText()).toBe('Hello Luke');
    });

    it('add employee test', function(){
        employee.createEmployee();
        employeeAdd.setFirstName();
        employeeAdd.setLastName();
        employeeAdd.setStartDate();
        employeeAdd.setEmail();
        employeeAdd.clickOnLogin();
        expect(element(by.id('greetings')).getText()).toBe('Hello Luke');
    });

    it('update LastName test', function(){
        var lastName = "name 1";

        employee.selectEmployee();
        employee.editEmployee();

        employeeEdit.setLastName(lastName);
        employeeEdit.clickOnUpdate();
        expect(element(by.id('greetings')).getText()).toBe('Hello Luke');
    });

    it('delete employee test', function(){
        var countBefore = employee.numberOfEmployee();

        employee.selectEmployee();
        employee.deleteEmployee();

        var countAfter = employee.numberOfEmployee();
        
        expect(countBefore).toBeGreaterThan(countAfter);

    });
});
