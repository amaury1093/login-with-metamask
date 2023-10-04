module.exports = {
	extends: [
		require.resolve('@vercel/style-guide/eslint/node'),
		require.resolve('@vercel/style-guide/eslint/typescript'),
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	// Vercel rules are too strict for this demo project. Turn some of them off.
	rules: {
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'no-alert': 'off',
		'no-console': 'off',
		'unicorn/filename-case': 'off',
	},
};
