# Webpack ES6 boilerplate

## Requirements
1. [node v8.12.0 or later](https://nodejs.org/en/)
2. [yarn](https://yarnpkg.com/)

## Features

- [Webpack](https://webpack.js.org/guides) (v3.5.5)
    - [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) (v2.7.1)
    - [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement)
    - [Clean Webpack Plugin](https://github.com/johnagan/clean-webpack-plugin) (v0.1.16)
- [ECMAScript 6](http://es6-features.org)
- [Babel](https://babeljs.io/docs/setup/#installation) (v6.26.0)
- [ESLint](https://eslint.org/docs/user-guide/getting-started) (v4.5.0)
- [Jest](https://facebook.github.io/jest/docs/en/getting-started.html) (v20.0.4)
- [Sass](http://sass-lang.com/guide)

## Getting started

Two simple steps to start:

1. Install the required libraries.
    ```shell
    yarn start
    ```
2. Install the dependencies if you don't already have them.

## Usage

### Start Dev Server
To develop using Webpack ES6 boilerplate, run:
```shell
yarn start
```

### Commands

- `yarn start` - start the dev server
- `yarn run build` - create build in `dist` folder (remember to run it before commit)
- `yarn run lint` - run an ESLint check
- `yarn run coverage` - run code coverage and generate report in the `coverage` folder
- `yarn test` - run all tests
- `yarn run test:watch` - run all tests in watch mode

## Licence

_webpack-es6-boilerplate_ is available under MIT.

[npm]: https://img.shields.io/badge/npm-5.3.0-blue.svg
[npm-url]: https://npmjs.com/

[node]: https://img.shields.io/node/v/webpack-es6-boilerplate.svg
[node-url]: https://nodejs.org

[tests]: http://img.shields.io/travis/jluccisano/webpack-es6-boilerplate.svg
[tests-url]: https://travis-ci.org/jluccisano/webpack-es6-boilerplate

[cover]: https://codecov.io/gh/jluccisano/webpack-es6-boilerplate/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/jluccisano/webpack-es6-boilerplate