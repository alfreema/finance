<h1 align="center">
  <br>
  alfreema/finance
  <br>
</h1>

<h4 align="center">Financial calculations written in pure javascript</h4>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#how-to-install">How To Install</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#how-to-clone">How To Clone</a> •
  <a href="#how-to-run-tests">How To Run Tests</a> •
  <a href="#credits">Credits</a> •
  <a href="#support">Support</a> •
  <a href="#license">License</a>
</p>

## Introduction

This is a pure javascript library of financial calculations derived from: https://github.com/ebradyjobory/finance.js

The key difference between the package above and this package are two-fold:

1) All calculations are simple javascript functions that can be imported directly instead of through an object.
2) The calculations are broken out into individual modules with individual test files

## How To Install

To add these calculations to your node application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Install this repository
$ npm install alfreema/finance
```

## How To Use

In your node application, `require` the plugin and call the `calculate` function.

```javascript
const { payment } = require('finance');

const rate = 2;
const numberOfPayments = 36;
const loanPrincipal = -1000000;

const resultPMT = Number(payment(rate, numberOfPayments, loanPrincipal).toFixed(2));
console.log(`expected result=39232.85\nactual result=${resultPMT}`)
// ...
```

## How To Clone

If you would like a copy of the repository to review or run tests against you can clone the repository with:

```bash
# Clone the repository
$ git clone git@github.com:alfreema/finance

# Install dependencies
$ npm i
```

## How To Run Tests

All functions are tested using the [Jest](https://jestjs.io/) testing framework.  To run the tests:

```bash
# Run the tests
$ npm test
```

> **Note**
> If you get any errors, please report them!

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [jest](https://jestjs.io/)

## Support

<a href="https://www.buymeacoffee.com/alfreema" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## License

MIT

---

> [sendthisfile.com](https://sendthisfile.com) &nbsp;&middot;&nbsp;
> GitHub [@alfreema](https://github.com/alfreema)