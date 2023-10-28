import {
	accountControllerGetAccount,
	accountControllerPatch,
} from '@/shared/api/generated'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const QUERY_ACCOUNT_KEY = ['account']

export function useAccountQuery() {
	return useQuery({
		queryFn: accountControllerGetAccount,
		queryKey: QUERY_ACCOUNT_KEY,
	})
}

export function useUpdateAccountMutation() {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: accountControllerPatch,
		// onSettled в отличии от onSuccess вызывается в любом случае, даже если запрос завершился с ошибкой
		// async/await нужны для того, чтобы запрос на обновление данных прошел до того, как мы обновим кэш, то есть без await мутация может перейти в isLoading = false, а кэш еще не обновится. А когда я ставлю await, то мутация не закончится пока не закочниться инвалидация
		async onSettled() {
			// async onSuccess() {
			await queryClient.invalidateQueries({ queryKey: QUERY_ACCOUNT_KEY })
		},
	})
}
