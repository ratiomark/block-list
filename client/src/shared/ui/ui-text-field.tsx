import clsx from 'clsx'
import { InputHTMLAttributes, PropsWithRef, useId } from 'react'

export type UiTextFieldProps = {
	className?: string
	error?: string
	label?: string
	inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
}

export function UiTextField({
	className,
	label,
	error,
	inputProps,
}: UiTextFieldProps) {
	const id = useId()
	return (
		<div className={clsx(className, 'flex flex-col gap-1')}>
			{label && (
				<label htmlFor={id} className='block'>
					{label}
				</label>
			)}
			<input
				{...inputProps}
				id={id}
				className={clsx(
					inputProps?.className,
					'h-10 rounded border border-slate-300 px-2 outline-none focus:border-teal-600',
				)}
			/>
			{error && <div className='text-sm text-rose-400'>{error}</div>}
		</div>
	)
}
