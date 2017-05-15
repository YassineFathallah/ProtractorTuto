var employeeEdit = function(){
    this.setLastName = function(value) {
        element(by.model('selectedEmployee.lastName')).sendKeys('value');
    };

    this.clickOnUpdate = function() {
        element(by.css('div.formFooter .main-button:nth-of-type(1)')).click();
    };
};
module.exports = employeeEdit;
    