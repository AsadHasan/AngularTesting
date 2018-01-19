import * as homepage from '../pageobjects/homepage';
import { expect } from "chai";

export async function checkStartButton() {
    await expect(await homepage.startButtonDisplayed()).to.be.true;
}
