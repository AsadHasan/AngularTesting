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
const searchCheck = require("../pagechecks/searchREsultsPanelChecks");
const cucumber_1 = require("cucumber");
cucumber_1.defineSupportCode(({ When: when, Then: then }) => {
    when(/^I search for (.*)$/, (term) => __awaiter(this, void 0, void 0, function* () { yield homepage.searchFor(term); }));
    then(/^I should see (.*)$/, (result) => __awaiter(this, void 0, void 0, function* () { yield searchCheck.checkOtherSearchResults(result); }));
});
//# sourceMappingURL=searchSteps.js.map