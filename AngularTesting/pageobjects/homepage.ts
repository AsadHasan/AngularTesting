import { $, promise } from "protractor";

export function startButtonDisplayed(): promise.Promise<boolean> {
    return $(".button.hero-cta").isDisplayed();
}



