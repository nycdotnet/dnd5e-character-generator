D&D 5th Edition Character Generator
===================================

This is an attempt to put together a D&D 5th Edition Character Generator.  Uses [Node](https://nodejs.org/), and [TypeScript](https://www.typescriptlang.org/), and is tested with [Jest](https://facebook.github.io/jest/) (via [ts-jest](https://github.com/kulshekhar/ts-jest)).  Assumes native ES6 support for build and test, but transpiled to ES5 for IE 11 support.

Future state will be a UI with [React](https://facebook.github.io/react/).

## Developing
To develop, run `npm install`, then run `npm run watch`.  While watch is running, editing TypeScript source files in your favorite editor will cause an incremental compilation.

## Testing
To test, first run `npm install`, then run `npm test`.