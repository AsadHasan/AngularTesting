﻿import { Config } from "protractor";

export var config: Config = {
    multiCapabilities: [{ "browserName": "chrome" }, { "browserName": "firefox" }],
    SELENIUM_PROMISE_MANAGER: false,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["./features/*.feature"],
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ["./steps/*.ts"]
    },
    seleniumAddress: "http://localhost:4444/wd/hub"
};