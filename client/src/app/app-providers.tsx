import { queryClient } from '@/shared/api/query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

export function AppProvider({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider
			// будет хранить кеши всех запросов
			client={queryClient}>
			{children}
		</QueryClientProvider>
	)
}
