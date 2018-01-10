"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var homepage = require("../pageobjects/homepage");
var chai_1 = require("chai");
function checkStartButton() {
    chai_1.expect(homepage.startButtonDisplayed).to.be.true;
}
exports.checkStartButton = checkStartButton;
//# sourceMappingURL=homepageChecks.js.map