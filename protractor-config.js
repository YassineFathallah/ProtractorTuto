let SpeReporter  = require('./node_modules/jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        cafetownsend: './tests-cafetownsend/spec.js'
    },
    capabilities: {
        'browserName': 'chrome'
    },
    maxSessions: 1,
    onPrepare: function()
    {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {

            }
        }));
    },

    jasmineNodeOpts: {
        showColors: true,
        print: function() {}
    },
};
