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
const homepage = require("../pageobjects/homepage");
const chai_1 = require("chai");
function checkStartButton() {
    return __awaiter(this, void 0, void 0, function* () {
        yield chai_1.expect(homepage.startButtonDisplayed).to.be.true;
    });
}
exports.checkStartButton = checkStartButton;
//# sourceMappingURL=homepageChecks.js.map