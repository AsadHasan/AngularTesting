import { binding, given, when, then } from "cucumber-tsflow";
import { browser } from "protractor";
import * as homepageChecker from "../pagechecks/homepageChecks";

@binding()
class HomepageSteps{

    @given(/^I am on the homepage$/)
    async goToHomepage() {
        await browser.get("https://angular.io/");
    }

    @then(/^a get started button is present$/)
    getStartedButtonIsPresent() {
        homepageChecker.checkStartButton();
    }
}