import * as homepage from "../pageobjects/homepage";
import * as searchCheck from "../pagechecks/searchREsultsPanelChecks";
import { defineSupportCode } from "cucumber";

defineSupportCode(({ When: when, Then: then }) => {
    when(/^I search for (.*)$/, async (term: string) => { await homepage.searchFor(term); });
    then(/^I should see (.*)$/, async (result: string) => { await searchCheck.checkOtherSearchResults(result); });
});

