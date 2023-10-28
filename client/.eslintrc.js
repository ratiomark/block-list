module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		// 'prettier',
		// 'plugin:prettier/recommended',
		'next/core-web-vitals',
	],
	plugins: [
		'react',
		'@typescript-eslint',
		'react-hooks',
		// 'i18next',
		// 'custom-fsd-checker-plugin',
	],
	rules: {
		// 'prettier/prettier': 0,
		'@typescript-eslint/no-redeclare': 1,
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/ban-ts-comment': 'warn',
		'@typescript-eslint/no-empty-function': 'warn',
		'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'multiline' }],
		'react/jsx-indent': [1, 'tab'],
		'react/jsx-indent-props': [1, 'tab'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/display-name': 'off',
		'no-shadow': 'off',
		'no-underscore-dangle': 'off',
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],
		'object-curly-spacing': ['warn', 'always'],
		'object-curly-newline': [
			'warn',
			{
				ObjectExpression: {
					multiline: true,
					minProperties: 4,
					// consistent: true,
				},
				ObjectPattern: {
					multiline: true,
					minProperties: 4,
					// consistent: true,

				},
				ImportDeclaration: { multiline: true, minProperties: 3 },
				ExportDeclaration: { multiline: true, minProperties: 3 },
			},
		],
		'max-len': [
			0,
			{
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
			},
		],
	},
}
