import * as homepage from "../pageobjects/homepage";
import { defineSupportCode } from "cucumber";

defineSupportCode(({ When: when }) => {
    when(/^I search for (.*)$/, async (term: string) => { await homepage.searchFor(term); });
});

