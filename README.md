# test-group

JavaScript module for organizing test code.

## Installation

```
npm install git+https://github.com/JamesRobertHugginsNgo/test-group.git#1.2.0
```

## Usage

``` JavaScript
import { testGroup, test } from './test-group.js';

testGroup('Group Description A', function () {
  console.log('Code execution...');

  test('Pass Test Description', function () {
    return true;
  });

  test('Failed Test Description', function () {
    return false;
  });

  testGroup('Sub Group Description', function () {
    console.log('Code execution...');

    test('Pass Test Description', function () {
      return true;
    });

    test('Failed Test Description', function () {
      return false;
    });
  });
});

testGroup('Group Description B', function () {
  console.log('Code execution...');

  return test('Pass Test Description', function () {
    return Promise.resolve(true);
  }).then(() => {
    return test('Failed Test Description', function () {
      return Promise.resolve(false);
    });
  }).then(() => {
    return testGroup('Sub Group Description', function () {
      console.log('Code execution...');

      return test('Pass Test Description', function () {
        return new Promise((resolve) => {
          setTimeout(function() {
            resolve(true);
          }, 500);
        });
      }).then(() => {
        return test('Failed Test Description', function () {
          return new Promise((resolve) => {
            setTimeout(function() {
              resolve(false);
            }, 500);
          });
        });
      });
    });
  });
});
```
