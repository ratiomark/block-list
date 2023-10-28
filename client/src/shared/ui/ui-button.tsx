import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type UiButtonVariant = 'primary' | 'secondary' | 'outlined'

export type UiButtonProps = {
	variant?: UiButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export function UiButton({
	className,
	variant = 'primary',
	...props
}: UiButtonProps) {
	return (
		<button
			{...props}
			className={clsx(
				className,
				// общие стили
				'flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2',
				{
					primary:
						'bg-teal-500 text-white shadow shadow-teal-500/30 hover:bg-teal-600 disabled:opacity-50',
					secondary:
						'bg-rose-500 text-white shadow shadow-teal-500/30 hover:bg-rose-600 disabled:opacity-50',
					outlined:
						'border border-slate-300 hover:bg-slate-500 disabled:opacity-50',
				}[variant],
			)}
		/>
	)
}
