import { binding, given, when, then } from "cucumber-tsflow";
import { browser } from "protractor";

@binding()
class HomepageSteps{
    @given(/^I am on the homepage$/)
    goToHomepage() {
        browser.get("https://angular.io/");
    }

    @then(/^a get started button is present$/)
    getStartedButtonIsPresent() {

    }
}