module.exports = {
	main: {
		input: 'src/shared/api/schema.yaml',
		output: {
			prettier: true,
			target: 'src/shared/api/generated.ts',
			// в поле override можно указать свои настройки для генерации. Mutator это как-раз функция для выполнения запросов
			override: {
				mutator: {
					path: './src/shared/api/api-instance.ts',
					name: 'createInstance',
				},
			},
		},
	},
}
