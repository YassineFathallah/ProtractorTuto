var employee = function(){
    this.createEmployee = function() {
        element(by.id('bAdd')).click();
    };

    this.editEmployee = function() {
        element(by.id('bEdit')).click();
    };

    this.deleteEmployee = function() {
        element(by.id('bDelete')).click();
    };

    this.selectEmployee = function() {
        element.all(by.css('ul#employee-list>li')).get(0).click();
    };
};
module.exports = employee;