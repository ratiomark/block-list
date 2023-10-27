import clsx from "clsx";
import Link, { LinkProps } from "next/link";


// С помощью parameters мы получаем типы параметров(того что возвращает typeof Link) и с помощью [0] мы полоучаем тип пропсов Link. По идее они = LinkProps
// type NextLinkProps = Parameters<typeof Link>[0]

export type UiLinkProps = {
	className?: string
	text: string
} & LinkProps

export function UiLink({ text, className, ...props }: UiLinkProps) {
	return <Link
		{...props}
		className={clsx(
			className,
			'px-1 text-teal-500 cursor-pointer hover:text-teal-600',
		)}
	>{text}</Link>

}