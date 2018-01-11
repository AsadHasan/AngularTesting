"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
function startButtonDisplayed() {
    return protractor_1.$(".button.hero-cta").isDisplayed();
}
exports.startButtonDisplayed = startButtonDisplayed;
//# sourceMappingURL=homepage.js.map