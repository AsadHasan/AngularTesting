"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    capabilities: {
        browserName: "chrome"
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["./features/*.feature"],
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ["./steps/*.ts"]
    },
    seleniumAddress: "http://localhost:4444/wd/hub"
};
//# sourceMappingURL=conf.js.map