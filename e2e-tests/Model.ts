import { Page } from "playwright-core";

const createHomepageModel = async (page: Page) => {
  await page.goto("http://localhost:3000");
  expect(await page.title()).toBe("Case Converter");

  return {
    inputText: async (text: string) => {
      await page.type("#input", text);
    },
    clickButton: async (label: string) => {
      await page.click(`//button[contains(., '${label}')]`);
    },
    getOuput: async () => {
      return await page.textContent("#output");
    },
  };
};

export default createHomepageModel;
