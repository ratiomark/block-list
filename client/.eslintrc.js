module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		"next/core-web-vitals",
	],
	plugins: [
		'react',
		'@typescript-eslint',
		'react-hooks',
		'i18next',
		'custom-fsd-checker-plugin',
	],
	rules: {
		"@typescript-eslint/no-redeclare": "1",
		'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'multiline' }],

	}
}
