import {element,by,WebElement} from "protractor";

export async function getOtherSearchResults(): Promise<WebElement[]> {
    return element.all(by.cssContainingText(".search-results>.search-area", "other"));
}
