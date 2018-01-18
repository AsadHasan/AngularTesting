"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    multiCapabilities: [{
            "browserName": "chrome",
            "loggingPrefs": {
                'driver': 'WARNING',
                'server': 'WARNING',
                'browser': 'INFO'
            }
        },
        {
            "browserName": "firefox",
            "loggingPrefs": {
                'driver': 'WARNING',
                'server': 'WARNING',
                'browser': 'INFO'
            }
        },
        {
            "browserName": "internet explorer",
            "loggingPrefs": {
                'driver': 'WARNING',
                'server': 'WARNING',
                'browser': 'INFO'
            }
        }],
    plugins: [{
            package: "protractor-multiple-cucumber-html-reporter-plugin",
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true
            }
        }],
    SELENIUM_PROMISE_MANAGER: false,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["./features/*.feature"],
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ["./steps/*.ts"],
        format: "josn:.tmp/results.json"
    },
    seleniumAddress: "http://localhost:4444/wd/hub"
};
//# sourceMappingURL=conf.js.map