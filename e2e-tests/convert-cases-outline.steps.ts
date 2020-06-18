import { Given, When, Then, And, But, Fusion } from "jest-cucumber-fusion";
import createHomepageModel from "./Model";

let model: any;

Given("a web browser is at the home page", async () => {
  model = await createHomepageModel(page);
});

When(
  /^the user enters '(.*)' into the area and clicks to the button '(.*)'$/,
  async (text, btnLabel) => {
    await model.inputText(text);
    await model.clickButton(btnLabel);
  }
);

Then(/^the output '(.*)' is shown in the page$/, async (output) => {
  expect(await model.getOuput()).toEqual(output);
});

Fusion("convert-cases-outline.feature");
