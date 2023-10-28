import { useAddBlockListMutation } from '@/entities/block-list'
import { AddBlockItemDtoType } from '@/shared/api/generated'
import { useForm } from 'react-hook-form'

export function useAddBlockItemForm() {
	const { handleSubmit, register, watch } = useForm<{
		type: AddBlockItemDtoType
		data: string
	}>()

	const addBlockItemMutation = useAddBlockListMutation()

	const type = watch('type')

	return {
		handleSubmit: handleSubmit((data) => addBlockItemMutation.mutate(data)),
		isLoading: addBlockItemMutation.isPending,
		register,
		type,
	}
}
