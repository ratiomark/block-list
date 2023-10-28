import { AddBlockItemDtoType } from "@/shared/api/generated";
import { UiButton } from "@/shared/ui/ui-button";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useAddBlockItemForm } from "../model/use-add-block-item-form";



export function AddBlockItemForm() {
	const {
		handleSubmit, isLoading, register, type,
	} = useAddBlockItemForm()


	return (
		<form
			className="flex gap-2"
			onSubmit={handleSubmit}
		>
			<UiSelectField
				className="grow min-w-[200px]"
				options={[
					{ value: AddBlockItemDtoType.KeyWord, label: 'KeyWord' },
					{ value: AddBlockItemDtoType.Website, label: 'Website' },
				]}
				selectProps={{
					...register('type'),
					placeholder: 'Select type',
				}}
			/>
			<UiTextField
				className="grow"
				inputProps={{
					...register('data'),
					placeholder: type === 'KeyWord' ? 'Enter keyword' : 'Enter website',
				}}
			/>
			<UiButton type="submit">Add Block Item</UiButton>
		</form>
	)


}