import { expect } from "chai";
import * as searchResultsPanel from "../pageobjects/searchResultsPanel";

export function checkOtherSearchResults(result: string) {
    searchResultsPanel.getOtherSearchResults().then(elements => {
        for (var element of elements) {
            element.getText().then(text => {
                if (text === result) {
                    expect(element.getText()).to.eventually.be.equal(result);
                }
            })
        }
    })
}