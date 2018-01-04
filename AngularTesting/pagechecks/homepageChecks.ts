import { Homepage } from "../pageobjects/homepage";
import { expect } from "chai";

export class HomePageChecks {
    homepage: Homepage = new Homepage();

    public checkStartButton() {
        var buttonText = this.homepage.startButton.getText();
        expect(buttonText).to.be.not.empty;
    }
}