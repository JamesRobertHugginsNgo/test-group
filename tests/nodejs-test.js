/* global console setTimeout */

import { testGroup, test } from '../test-group.js';

testGroup('Group Description A', function () {
	console.log('Code execution...');

	test('Pass Test Description', function () {
		return true;
	});

	test('Failed Test Description', function () {
		return false;
	});

	test('Other Test Description', function () {
		return 'any';
	});

	testGroup('Sub Group Description', function () {
		console.log('Code execution...');

		test('Pass Test Description', function () {
			return true;
		});

		test('Failed Test Description', function () {
			return false;
		});

		test('Other Test Description', function () {
			return 'any';
		});
	});
});

testGroup('Group Description B', function () {
	console.log('Code execution...');

	return test('Pass Test Description', function () {
		return new Promise((resolve) => {
			resolve(true);
		});
	}).then(() => {
		return test('Failed Test Description', function () {
			return new Promise((resolve) => {
				resolve(false);
			});
		});
	}).then(() => {
		return test('Other Test Description', function () {
			return new Promise((resolve) => {
				resolve('any');
			});
		});
	}).then(() => {
		return testGroup('Sub Group Description', function () {
			console.log('Code execution...');

			return test('Pass Test Description', function () {
				return new Promise((resolve) => {
					setTimeout(function () { resolve(true); }, 500);
				});
			}).then(() => {
				return test('Failed Test Description', function () {
					return new Promise((resolve) => {
						setTimeout(function () { resolve(false); }, 500);
					});
				});
			}).then(() => {
				return test('Other Test Description', function () {
					return new Promise((resolve) => {
						setTimeout(function () { resolve('any'); }, 500);
					});
				});
			});
		});
	});
});
