import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useBlockItems } from "../model/use-block-items";
import { BlockItem } from "./block-item";

export function BlockList({ className }: { className?: string }) {
	const {
		isLoading, items, setQ, q,
	} = useBlockItems()

	const isLoader = isLoading
	const isEmptyText = !isLoading && items.length === 0
	const isItems = items.length > 0


	return (
		<div className={className}>
			<UiTextField
				className="mb-2"
				label="Search..."
				inputProps={{
					value: q,
					onChange: e => setQ(e.target.value),
				}}
			/>
			<div className="flex flex-col gap-5 px-10 py-6 rounder-xl bg-slate-100/50">
				{isLoader && <UiSpinner />}
				{isEmptyText &&
					<div className="py-1 text-xl text-center">
						You don&apos;t have any blocked page
					</div>
				}
				{isItems && items.map(item => <BlockItem key={item.id} {...item} />)}
			</div>
		</div>
	)

}