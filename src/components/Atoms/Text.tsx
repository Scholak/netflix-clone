// Library Imports
import { ReactNode } from 'react'
// Utility Imports
import { cn } from '@/utils/cn'

type ITextProps = {
	/** Custom class  */
	className?: string
	/** It defines the font size of the text */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
	/** It defines the font weight of the text */
	weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold'
	/** It defines the alignment of the text */
	align?: 'left' | 'center' | 'right' | 'justify'
	/** It defines the text color of the text */
	dark?: boolean
	/** Any Html element can be passed. */
	element?: any
	/** Text content */
	children?: ReactNode
}

const sizes = {
	xs: 'text-sm',
	sm: 'text-md',
	md: 'text-lg',
	lg: 'text-xl',
	xl: 'text-2xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
}

const weights = {
	light: 'font-light',
	regular: 'font-normal',
	medium: 'font-medum',
	semibold: 'font-semibold',
	bold: 'font-bold',
}

const aligns = {
	left: 'text-left',
	center: 'text-center',
	right: 'text-right',
	justify: 'text-justify',
}

const Text = ({
	className,
	size = 'md',
	weight = 'regular',
	align = 'left',
	dark,
	element = 'p',
	children,
}: ITextProps) => {
	const Element = element

	return (
		<Element className={cn(dark && 'text-white', sizes[size], weights[weight], aligns[align], className)}>
			{children}
		</Element>
	)
}

export default Text
