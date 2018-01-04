import { binding, given, when, then } from "cucumber-tsflow";
import { browser } from "protractor";
import { HomePageChecks } from "../pagechecks/homepageChecks";

@binding()
class HomepageSteps{

    homepageChecker: HomePageChecks = new HomePageChecks();

    @given(/^I am on the homepage$/)
    async goToHomepage() {
        await browser.get("https://angular.io/");
    }

    @then(/^a get started button is present$/)
    getStartedButtonIsPresent() {
        this.homepageChecker.checkStartButton();
    }
}