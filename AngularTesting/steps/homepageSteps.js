"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const homepageChecker = require("../pagechecks/homepageChecks");
cucumber_1.defineSupportCode(({ Given: given, Then: then }) => {
    given("I am on the homepage", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angular.io/");
    }));
    then("a get started button is present", () => {
        homepageChecker.checkStartButton();
    });
});
//# sourceMappingURL=homepageSteps.js.map