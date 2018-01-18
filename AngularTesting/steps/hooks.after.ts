import { defineSupportCode } from "cucumber";
import * as report from "protractor-multiple-cucumber-html-reporter-plugin";

defineSupportCode(({ After: after }) => {
    after(async () => await report.generate({
        jsonDir: '../.tmp',
        reportPath: '../report/'}))
});