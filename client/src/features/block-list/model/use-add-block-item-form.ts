import { useAddBlockListMutation } from '@/entities/block-list'
import { AddBlockItemDtoType } from '@/shared/api/generated'
import { useForm } from 'react-hook-form'

export function useAddBlockItemForm() {
	const {
		handleSubmit, register, watch, reset,
	} = useForm<{
		type: AddBlockItemDtoType
		data: string
	}>({ defaultValues: { type: AddBlockItemDtoType.Website } })

	const addBlockItemMutation = useAddBlockListMutation()

	const type = watch('type')

	return {
		handleSubmit: handleSubmit((data) => {
			addBlockItemMutation.mutate(data, {
				onSuccess() {
					reset()
				},
			})
		}),
		isLoading: addBlockItemMutation.isPending,
		register,
		type,
	}
}
