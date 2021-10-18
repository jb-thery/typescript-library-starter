# Jean-Baptiste Thery Typescript library starter

A simple library starter for publish things to npm package

> 💡 Customise all project elements as you want

> 💡 Any improvements or pr is welcome

## I. Features

- **Rollup :** lib bundler
- **Typescript :** Strongly typed javascript
- **Jest :** Unit testing
- **Eslint :** Prevent js errors and normalized coding rules
- **Prettier :** Normalized coding style rules
- **Husky :** git hooks
- **Commitlint :** lint each commit message

## II. Project structure
> **.github ->** CI/CD scripts

> **.husky ->** Local git hooks

> **calculator ->** Bundled library (with Rollup)

> **examples ->** Script for test locally generated library

> **src ->** library source code


## III. Available scripts

> **build ->** build library

> **dev ->** watch source code and hot reload during development 

> **dev:lib ->** watch library source code

> **dev:local ->** watch example source code

> **lint ->** lint script with eslint

> **typecheck ->** check static type with typecript

> **style ->** reformat source code

> **version ->** auto generate the changelog file

> **test:coverage ->** run unit test and generate the code coverage

> **test ->** run all unit test and watch it


## VI. Requirements

This project requires the following tools installed locally:

- Node js >= 14
- npm >= 6
- Git >= 2

## V. Project installation

a) Setting up a repository

b) Check all TODO and follow the instructions

c) Install npm dependencies :
```
npm i 
```

## VI. Development

a) Launch the dev script :
```
npm run dev
```

## VII. Build your library

a) Launch the build script :
```
npm run build
```

## VII. Publish your library to npm registry

***see: [https://docs.npmjs.com/creating-and-publishing-scoped-public-packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)***

a) Launch npm publish script :
```
npm publish
```
or use the github workflow in ***github/workflows/publish_to_npm***

## VIII. Github actions
This project include stater CI/CD crafted with g
Github actions, all actions are in the ***.github/workflows*** directory

a) **CI** : On ```push``` or ```pull``` request to ```develop branch``` lint project and run all unit test

b) **Node.js Package** : On ```Create a new github release``` publish the library to npm registry


**_Crafted with ❤️ by Jean-Baptiste Thery | [www.flameapp.fr](www.flameapp.fr)_**
