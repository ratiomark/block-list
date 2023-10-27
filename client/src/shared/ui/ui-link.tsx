import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";


// С помощью parameters мы получаем типы параметров(того что возвращает typeof Link) и с помощью [0] мы полоучаем тип пропсов Link. Все это нужно сделать т.к next не дает пропсы Link
type NextLinkProps = Parameters<typeof Link>[0]

export type UiLinkProps = {
	className?: string
} & NextLinkProps

export function UiLink({ className,  ...props }: UiLinkProps) {
	return <Link
		{...props}
		className={clsx(
			className,
			'px-1 text-teal-500 cursor-pointer hover:text-teal-600',
		)}
	/>

}