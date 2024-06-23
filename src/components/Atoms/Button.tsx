// Library Imports
import { MouseEventHandler, ReactNode } from 'react'
import Link from 'next/link'

// Utility Imports
import { cn } from '@/utils/cn'

type IButtonProps = {
	/** Button variant */
	variant?: 'button' | 'link'
	/** Click event handler */
	onClick?: MouseEventHandler<HTMLButtonElement>
	/** Link href */
	href?: string
	/** Button size */
	size?: 'sm' | 'md' | 'lg'
	/** Button display type */
	outlined?: boolean
	/** Additional classes */
	className?: string
	/** Button content */
	children: ReactNode
}

const sizes = {
	sm: 'py-1.5 px-4 rounded-md text-sm font-bold',
	md: 'rounded py-3 px-6 text-xl font-medium',
	lg: 'w-full mt-8 py-4 text-center text-xl font-medium rounded shadow hover:bg-[#F6121D]',
}

const Button = ({
	variant = 'button',
	onClick = () => {},
	href,
	size = 'md',
	outlined,
	className,
	children,
}: IButtonProps) => {
	const outlinedStyle = outlined ? 'bg-white border border-black' : 'bg-red text-white'

	if (variant === 'button')
		return (
			<button
				onClick={onClick}
				className={cn(sizes[size], outlinedStyle, className)}
			>
				{children}
			</button>
		)

	if (!href) throw new Error('href attribue is required for link variant!')

	return (
		<Link
			href={href}
			className={cn(sizes[size], outlinedStyle, 'text-center hover:bg-[#F6121D]', className)}
		>
			{children}
		</Link>
	)
}

export default Button
