import { expect } from "chai";
import * as searchResultsPanel from "../pageobjects/searchResultsPanel";

export function checkOtherSearchResults(result: string) {
    searchResultsPanel.getOtherSearchResults().then(elements => {
        var results: string[];
        for (var element of elements) {
            element.getText().then(text => {
                results.push(text);
            })
        }
        expect(results).include(result);
    })
}