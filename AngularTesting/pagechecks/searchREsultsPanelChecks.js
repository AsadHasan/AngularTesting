"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const searchResultsPanel = require("../pageobjects/searchResultsPanel");
function checkOtherSearchResults(result) {
    searchResultsPanel.getOtherSearchResults().then(elements => {
        for (var element of elements) {
            element.getText().then(text => {
                if (text === result) {
                    chai_1.expect(element.getText()).to.eventually.be.equal(result);
                }
            });
        }
    });
}
exports.checkOtherSearchResults = checkOtherSearchResults;
//# sourceMappingURL=searchREsultsPanelChecks.js.map