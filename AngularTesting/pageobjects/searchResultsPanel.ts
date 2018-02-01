import {element,by,WebElement} from "protractor";

export async function getOtherSearchResults(): Promise<WebElement[]> {
    var results: WebElement[] = await element.all(by.cssContainingText(".search-results>.search-area", "other"));
    return results;
}
