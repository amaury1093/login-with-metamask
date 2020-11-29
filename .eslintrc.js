module.exports = {
	...require('@amaurymartiny/eslintrc'),
	// FIXME Turn these rules on again.
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
	},
};