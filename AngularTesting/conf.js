"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    multiCapabilities: [{ "browserName": "chrome" }, { "browserName": "firefox" }, { "browserName": "internet explorer" }],
    SELENIUM_PROMISE_MANAGER: false,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["./features/*.feature"],
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ["./steps/*.ts"],
        format: "json:.tmp/results.json"
    },
    plugins: [{
            package: "protractor-multiple-cucumber-html-reporter-plugin",
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true
            }
        }],
    seleniumAddress: "http://localhost:4444/wd/hub"
};
//# sourceMappingURL=conf.js.map