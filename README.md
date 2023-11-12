# test-group

JavaScript module for organizing test code.

## NPM Installation

```
npm install git+https://github.com/JamesRobertHugginsNgo/test-group.git#1.2.0
```

## Function: testGroup(description, func)

Argument | Type | Description
-- | -- | --
`description` | `string` | Group description.
`func` | `function` | Group code. Return a `Promise` to have `testGroup` return a `Promise`.

Returns `undefined` or `Promise`. Returns `Promise` when the `func` argument returns a `Promise`

``` JavaScript
import { testGroup } from 'test-group';

// Simple
testGroup('Group Description A', function () {
  console.log('Code execution...');
});

// With Promise
testGroup('Group Description B', function () {
  return new Promise(function (resolve) {
    console.log('Code execution...');
    resolve();
  });
}).then(function () {
  console.log('Code execution completed');
});
```

## Function: test(description, func)

Argument | Type | Description
-- | -- | --
`description` | `string` | Test description.
`func` | `function` | Test code. Return `true` for pass, `false` for fail, and any other value for unknown. Return a `Promise` to have `test` return a `Promise`.

Returns `undefined` or `Promise`. Returns `Promise` when the `func` argument returns a `Promise`.

``` JavaScript
import { test } from 'test-group';

// Simple
test('Pass Test Description A', function () {
  return true;
});
test('Failed Test Description A', function () {
  return false;
});
test('Other Test Description A', function () {
  return 'any';
});

// With Promise
test('Pass Test Description B', function () {
  return new Promise((resolve) => {
    resolve(true);
  });
}).then(function () {
  return test('Failed Test Description B', function () {
    return new Promise((resolve) => {
      resolve(false);
    });
  });
}).then(function () {
  return test('Other Test Description B', function () {
    return new Promise((resolve) => {
      resolve('any');
    });
  });
}).then(function () {
  console.log('Tests completed');
});
```

## Using Script Tag

The JavaScript library (found in the "dist" folder) can be used directly using an HTML script tag. The JavaScript module is exposed as a global `TestGroup` namespace.

``` HTML
<script src="node_modules/test-group/dist/test-group.js"></script>
<script>
  const { testGroup, test } = TestGroup;
</script>
```
