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
};
module.exports = employee;