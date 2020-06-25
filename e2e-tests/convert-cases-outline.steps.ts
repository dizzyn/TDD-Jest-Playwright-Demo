import { Given, When, Then, And, But, Fusion } from "jest-cucumber-fusion";
import createHomepageModel, { TModel } from "./Model";

let model: TModel;

Given("a web browser is at the home page", async () => {
  model = await createHomepageModel(page);
});

When(
  /^the user enters '(.*)' into the area and clicks to the button '(.*)'$/,
  async (text, btnLabel) => {
    await model.inputText(text as string);
    await model.clickButton(btnLabel as string);
  }
);

Then(/^the output '(.*)' is shown in the page$/, async (output) => {
  expect(await model.getOuput()).toEqual(output);
});

Fusion("convert-cases-outline.feature");
