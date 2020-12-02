# About

React test utils with helpers for rendering components using enzyme.

# Getting started

1. `yarn install` - install the dependencies.
2. `yarn build:package` - build application.

# Why do we have that dev dependencies?

* `@eigenspace/codestyle` - includes lint rules, config for typescript.
* `@eigenspace/common-types` - includes common types.
* `@eigenspace/jest-screenshot-testing` - ui-screenshot testing library.
* `@eigenspace/commit-linter` - linter for commit messages.
* `@eigenspace/helper-scripts` - used to copy project files to build directory.
* `eslint-plugin-eigenspace-script` - includes set of script linting rules and configuration for them.
* `@types/*` - contains type definitions for specific library.
* `jest` - testing framework to write unit specs (including snapshots).
* `jest-styled-components` - a set of utilities for testing Styled Components with Jest.
* `enzyme` - api-helper for Jest testing. Added abilities to set state for components 
and get an instance (real class). 
* `enzyme-adapter-react-16` - adapter for React 16. The requirement of the Enzyme.
* `ts-jest` - it lets you use Jest to test projects written in TypeScript.
* `typescript` - is a superset of JavaScript that have static type-checking and ECMAScript features.
    We need 3.8.x+ version because of `Promise.allSettled`.
* `husky` - used for configure git hooks.
* `react` - a peer dependency for utils library.
* `react-dom` - it provides DOM-specific methods to step out from react-world
to DOM-world and is used on top level of application. It is peer dependency.
* `lint-staged` - used for configure linters against staged git files.
* `styled-components` - it is way to organize styles as isolated components
(in particular, elements of main component).
* `whatwg-fetch` - this project is a polyfill for `window.fetch`.
* `eslint` - it checks code for readability, maintainability, and functionality errors.
