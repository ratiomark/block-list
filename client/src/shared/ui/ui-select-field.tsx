import clsx from 'clsx'
import { PropsWithRef, SelectHTMLAttributes, useId } from 'react'

export type UiSelectOption = {
	value: string
	label: string
}
export type UiSelectFieldProps = {
	className?: string
	error?: string
	label?: string
	selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>
	options?: UiSelectOption[]
}

export function UiSelectField({
	className,
	label,
	error,
	selectProps,
	options,
}: UiSelectFieldProps) {
	const id = useId()
	return (
		<div className={clsx(className, 'flex flex-col gap-1')}>
			{label && (
				<label htmlFor={id} className='block'>
					{label}
				</label>
			)}
			<select
				{...selectProps}
				id={id}
				className={clsx(
					selectProps?.className,
					'h-10 cursor-pointer rounded border border-slate-300 px-2 outline-none focus:border-teal-600',
				)}>
				{options?.map((option, i) => (
					<option key={i} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{error && <div className='text-sm text-rose-400'>{error}</div>}
		</div>
	)
}
