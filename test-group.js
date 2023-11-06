/* global console */

/**
 * Groups code execution and testing.
 * @param {string} description
 * @param {function} func
 * @returns {undefined|Promise}
 */
export function testGroup(description, func) {
	console.group(description);

	const result = func();
	if (result instanceof Promise) {
		return result.then(() => void console.groupEnd());
	}

	console.groupEnd();
}

/**
 * Displays test result.
 * @param {boolean} result
 */
function testEnd(result) {
	console.log(
		typeof result !== 'boolean'
			? 'Unknown ?'
			: result
				? 'Pass ✔'
				: 'Fail ✘'
	);
}

/**
 * Logs test description and result.
 * @param {string} description
 * @param {function} func
 * @returns {undefined|Promise}
 */
export function test(description, func) {
	return testGroup(description, () => {
		const result = func();
		if (result instanceof Promise) {
			return result.then((result) => void testEnd(result));
		}
		testEnd(result);
	});
}
