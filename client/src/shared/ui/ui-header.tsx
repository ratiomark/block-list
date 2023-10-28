import clsx from 'clsx'
import { UiLogo } from './ui-logo'

type UiHeaderProps = {}

export function UiHeader({
	className,
	right,
}: {
	className?: string
	right?: React.ReactNode
}) {
	return (
		<header
			className={clsx(
				className,
				'flex justify-between border-b border-b-slate-300 bg-white px-4 py-5',
			)}>
			<UiLogo />
			{right}
		</header>
	)
}
