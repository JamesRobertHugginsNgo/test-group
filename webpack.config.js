import Path from 'node:path';

export default {
	entry: './test-group.js',
	output: {
		path: Path.resolve('dist'),
		filename: 'test-group.js',
		globalObject: 'this',
		library: 'TestGroup'
	}
};
