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

    this.selectRandomEmployee = function() {
        element(by.id('bAdd')).click();
    };
};
module.exports = employee;