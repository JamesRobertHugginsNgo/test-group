/* global console */

export function testGroup(description, func) {
	console.group(description);

	const result = func();
	if (result instanceof Promise) {
		return result.then(() => void console.groupEnd());
	}

	console.groupEnd();
}

function testEnd(result) {
	console.log(
		typeof result !== 'boolean'
			? 'Unknown ?'
			: result
				? 'Pass ✔'
				: 'Fail ✘'
	);
}

export function test(description, func) {
	return testGroup(description, () => {
		const result = func();
		if (result instanceof Promise) {
			return result.then((result) => void testEnd(result));
		}
		testEnd(result);
	});
}
