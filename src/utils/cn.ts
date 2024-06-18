// Library Imports
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

/** Basic utility for tailwindcss */
export const cn = (...classNames: any) => {
	return twMerge(clsx(classNames))
}
