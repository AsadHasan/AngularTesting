import { expect } from "chai";
import * as searchResultsPanel from "../pageobjects/searchResultsPanel";

export async function checkOtherSearchResults(result: string) {
    expect(searchResultsPanel.getOtherSearchResults()).to.eventually.
}