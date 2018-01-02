"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_tsflow_1 = require("cucumber-tsflow");
var protractor_1 = require("protractor");
var HomepageSteps = /** @class */ (function () {
    function HomepageSteps() {
    }
    HomepageSteps.prototype.goToHomepage = function () {
        protractor_1.browser.get("https://angular.io/");
    };
    HomepageSteps.prototype.getStartedButtonIsPresent = function () {
    };
    __decorate([
        cucumber_tsflow_1.given(/^I am on the homepage$/)
    ], HomepageSteps.prototype, "goToHomepage", null);
    __decorate([
        cucumber_tsflow_1.then(/^a get started button is present$/)
    ], HomepageSteps.prototype, "getStartedButtonIsPresent", null);
    HomepageSteps = __decorate([
        cucumber_tsflow_1.binding()
    ], HomepageSteps);
    return HomepageSteps;
}());
//# sourceMappingURL=homepageSteps.js.map