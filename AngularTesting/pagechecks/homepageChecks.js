"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var homepage_1 = require("../pageobjects/homepage");
var chai_1 = require("chai");
var HomePageChecks = /** @class */ (function () {
    function HomePageChecks() {
        this.homepage = new homepage_1.Homepage();
    }
    HomePageChecks.prototype.checkStartButton = function () {
        var buttonText = this.homepage.startButton.getText();
        chai_1.expect(buttonText).to.be.not.empty;
    };
    return HomePageChecks;
}());
exports.HomePageChecks = HomePageChecks;
//# sourceMappingURL=homepageChecks.js.map