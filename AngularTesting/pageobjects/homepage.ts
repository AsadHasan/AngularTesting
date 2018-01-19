import { $, promise } from "protractor";

export async function startButtonDisplayed(): Promise<boolean>{
    return await $(".button.hero-cta").isDisplayed();
}

export async function searchFor(term: string): Promise<void> {
    await $("[type=search]").sendKeys(term);
}



