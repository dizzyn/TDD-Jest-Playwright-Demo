module.exports = {
  preset: "jest-playwright-preset",
  testMatch: ["**/*.steps.ts"],
  setupFiles: ["./jest-cucumber-config"],
  setupFilesAfterEnv: ["expect-playwright"],
};
