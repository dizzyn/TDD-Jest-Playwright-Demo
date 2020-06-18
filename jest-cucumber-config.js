import { setJestCucumberConfiguration } from "jest-cucumber";

setJestCucumberConfiguration({
  tagFilter: "not @excluded",
});
