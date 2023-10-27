import { UiSpinner } from "./ui-spinner";

export function UiPageSpinner({ className }: { className?: string }) {
	return (
		<div className="fixed inset-0 flex justify-center items-center bg-slate-100">
			<UiSpinner className="text-teal-600 w-24 h-24" />
		</div >
	)
}

