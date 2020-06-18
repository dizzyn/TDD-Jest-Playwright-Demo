# TDD Jest Playwright Demo

Test case of mixing the best of the three words together:

- _Playwright_ - as the most advanced end-to-end browser automation
- _Jest_ - the bellowed test runner
- _BDD_ - principles of testing that helps you to look at the code from the right side

So there we are. We want to mix them together with goals:

1. To run that together with minimal configuration
2. To test advanced Gherkin features like `outline data`, `tags`
3. To try if it can run in parallel mode

# The result

It works fine. Lets overview the goals:

1. We have a simple web service with single API and one page. It is written in typescript and includes some small configurations for `Babel`, `Jest`, `Cucumber` (BDD runner) and `Typescript`. There is also a `page model` - a simple abstraction over pagess that allows us to make _step definitions_ more straight forward.
2. The feature file syntax called `Gherkin` is fully supported. I have configured single tag `@excluded` to skip some features/steps and tried _outline data tables_. There are three packages that helps us to integrate `Jest` with `Cucumber` (the BDD Runner) - the famous one [jest-cucumber](https://github.com/bencompton/jest-cucumber) (261 stars for now:grin:), [gherkin-jest](https://github.com/sjmeverett/gherkin-jest) (34:star:) and [jest-cucumber-fusion](https://github.com/b-yond-infinite-network/jest-cucumber-fusion) with 3 :star: (one from me). The last one looked most simple. It allows to use _feature files_ with minimal effort. So I have used that without any trouble at all.
3. Yes, it works in parallell according _Jest settings_. It can't of course split `outline feature files` loops into threads or the `scenarios` from a `single feature file` (pitty).

Have nice testing

Tom
