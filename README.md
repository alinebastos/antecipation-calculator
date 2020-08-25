# Antecipation Calculator

Today our customers need to know how much it costs to anticipate a transaction, and for that, we developed an advance calculator so that they can know what amounts they will receive if they choose to anticipate receipt.

## Decisions regarding the development

Since, for now, it is a small application, I decided to maintain as simple as possible, with pure HTML, CSS, and JavaScript.

- It's easier to maintain, with few files and small components;
- It's easy to change the code and files if the application goes bigger or we decide to use a framework instead;
- Although it is a small application, with pure HTML, CSS, and JavaScript the website performs better;
- It's super easy for anyone to understand the code :)

For the testing, I chose to use [Cypress](https://www.cypress.io/) because I wanted to use it in an application for a while and it is wonderful, so easy to configure, and it is a lot like Jest and other test suites I worked with.

For the compilation, cache, bundle and live reload I use [Parcel](https://parceljs.org/).

The deploy was made with [Netlify](https://www.netlify.com/) and the application URL is [Antecipation Calculator](https://blissful-blackwell-b15dde.netlify.app/).

## Installation

Follow the steps below to run the application:

- Clone the repository: `$ git clone git@github.com:alinebastos/antecipation-calculator.git`;
- Enter the root of the project: `$ cd anticepation-calculator`;
- Install the dependencies. If you use NPM, run the command `$ npm install`, if you use yarn, run `$ yarn`;

The application has some scripts that can be executed using `npm run` or `yarn`.

Available scripts:

- `start`: Starts the application with live reloading;
- `build-prod`: Build the project to production;
- `cypress`: Run the tests with Cypress.
