var employeeAdd = function(){
    this.setFirstName = function() {
        element(by.model('selectedEmployee.firstName')).sendKeys('Yassine');
    };

    this.setLastName = function() {
        element(by.model('selectedEmployee.lastName')).sendKeys('Fath');
    };
    
    this.setStartDate = function() {
        element(by.model('selectedEmployee.startDate')).sendKeys('2017-05-12');
    };

    this.setEmail = function() {
        element(by.model('selectedEmployee.email')).sendKeys('test01+user@gmail.com');
    };

    this.clickOnLogin = function() {
        element(by.css('div.formFooter .main-button:nth-of-type(2)')).click();
    };

};
module.exports = employeeAdd;