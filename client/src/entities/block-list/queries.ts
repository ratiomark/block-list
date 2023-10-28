import {
	blockListControllerAddBlockListItem,
	blockListControllerDeleteBlockItem,
	blockListControllerGetBlockList,
} from '@/shared/api/generated'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const QUERY_BLOCK_LIST_KEY = ['block-list']

export function useBlockListQuery(q?: string) {
	return useQuery({
		queryFn: () => blockListControllerGetBlockList({ q }),
		queryKey: QUERY_BLOCK_LIST_KEY.concat(q || ''),
	})
}
export function useAddBlockListMutation(q?: string) {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: blockListControllerAddBlockListItem,
		async onSettled() {
			await queryClient.invalidateQueries({ queryKey: QUERY_BLOCK_LIST_KEY })
		},
	})
}
export function useDeleteBlockListMutation(q?: string) {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: blockListControllerDeleteBlockItem,
		async onSettled() {
			await queryClient.invalidateQueries({ queryKey: QUERY_BLOCK_LIST_KEY })
		},
	})
}
