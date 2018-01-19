import { defineSupportCode } from "cucumber";
import { browser } from "protractor";
import * as homepageChecker from "../pagechecks/homepageChecks";

defineSupportCode(({ Given: given, Then: then}) => {
    given(/^I am on the homepage$/, async () => {
        await browser.get("https://angular.io/");
    });

    then(/^a get started button is present$/, async () => {
         await homepageChecker.checkStartButton();
    });
} );