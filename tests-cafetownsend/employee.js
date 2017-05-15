var employee = function(){
    this.createEmployee = function() {
        element(by.id('bAdd')).click();
    };

    this.editEmployee = function() {
        element(by.id('bEdit')).click();
    };

    this.deleteEmployee = function() {
        element(by.id('bDelete')).click();
        browser.switchTo().alert().accept();
    };

    this.selectEmployee = function() {
        element.all(by.css('ul#employee-list>li')).get(0).click();
    };

    this.numberOfEmployee = function() {
        return element.all(by.css('ul#employee-list>li')).count();
    };
};
module.exports = employee;