module.exports = {
	env: {
		node: true,
		'vue/setup-compiler-macros': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'prettier',
		'standard',
	],
	rules: {
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
		semi: ['error', 'always'],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],

		indent: 0,
		'comma-dangle': 0,
		'no-tabs': 0,
	},
};
