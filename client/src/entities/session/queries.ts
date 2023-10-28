import { authControllerGetSessionInfo } from '@/shared/api/generated'
import { useQuery, useQueryClient } from '@tanstack/react-query'

export const QUERY_SESSION_KEY = ['session']

export function useSessionQuery() {
	return useQuery({
		// дедупликация запроса. Все запросы с одинаковым queryKey будут считаться одним запросом и будут закешированы
		queryKey: QUERY_SESSION_KEY,
		queryFn: authControllerGetSessionInfo,
		retry: 0,
		staleTime: 1000 * 60 * 5,
	})
}

export function useResetSession() {
	const queryClient = useQueryClient()
	return () => queryClient.removeQueries()
	// return () => queryClient.removeQueries({ queryKey: QUERY_SESSION_KEY })
}
