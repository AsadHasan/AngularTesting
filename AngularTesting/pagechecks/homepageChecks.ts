import { Homepage } from "../pageobjects/homepage";

export class HomePageChecks {
    homepage: Homepage = new Homepage();

    public checkStartButton() {
        var buttonText = this.homepage.startButton.getText();
    }
}