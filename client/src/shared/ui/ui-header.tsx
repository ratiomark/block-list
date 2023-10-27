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
				'px-4 py-5 border-b border-b-slate-300 flex justify-between bg-white',
			)}>
			<UiLogo />
			{right}
		</header>
	)
}
