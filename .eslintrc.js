module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parserOptions: {
		project: './tsconfig.json',
	},
	// FIXME: fix all instances of these rules in code.
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
	},
};
