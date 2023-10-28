import { useDeleteBlockListMutation } from "@/entities/block-list";
import { AddBlockItemDtoType } from "@/shared/api/generated";

export function BlockItem({
	id,
	type,
	data,
}: {
	id: number;
	type: AddBlockItemDtoType;
	data: string;
}) {
	const removeBlockListMutation = useDeleteBlockListMutation()
	const handleRemove = () => {
		removeBlockListMutation.mutate(id)
	}
	return (
		<div className="flex gap-2">
			<div className="">
				<div className="text-lg ">{data}</div>
				<div className="text-sm text-slate-500">{type}</div>
			</div>
			<button
				className="p-1 ml-auto text-rose-500 hover:text-red-600 disabled:opacity-50"
				disabled={removeBlockListMutation.isPending}
				onClick={handleRemove}
			>
				<TrashIcon className="w-5 h-5" />
			</button>
		</div>
	);
}

const TrashIcon = ({ className }: { className?: string }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
		/>
	</svg>
);
