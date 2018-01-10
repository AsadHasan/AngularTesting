import * as homepage from '../pageobjects/homepage';
import { expect } from "chai";

export function checkStartButton() {
        expect(homepage.startButtonDisplayed).to.be.true;
    }
