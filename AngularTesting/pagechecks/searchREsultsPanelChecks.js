"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const searchResultsPanel = require("../pageobjects/searchResultsPanel");
function checkOtherSearchResults(result) {
    searchResultsPanel.getOtherSearchResults().then(elements => {
        var results;
        for (var element of elements) {
            element.getText().then(text => {
                results.push(text);
            });
        }
        chai_1.expect(results).include(result);
    });
}
exports.checkOtherSearchResults = checkOtherSearchResults;
//# sourceMappingURL=searchREsultsPanelChecks.js.map