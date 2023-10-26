import { testGroup, test } from "./test-group.js";

testGroup('Group Description', () => {
	test('Pass Test Description', () => {
		return true;
	});

	test('Failed Test Description', () => {
		return false;
	});

	testGroup('Sub Group Description', () => {
		test('Pass Test Description', () => {
			return true;
		});

		test('Failed Test Description', () => {
			return false;
		});
	});
});
