// Library Imports
import { MouseEventHandler, ReactNode } from 'react'

// Utility Imports
import { cn } from '@/utils/cn'

type IButtonProps = {
	/** Click event handler */
	onClick?: MouseEventHandler<HTMLButtonElement>
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
	lg: '',
}

const Button = ({ onClick = () => {}, size = 'md', outlined, className, children }: IButtonProps) => {
	const outlinedStyle = outlined ? 'bg-white border border-black' : 'bg-red text-white'

	return (
		<button
			onClick={onClick}
			className={cn(sizes[size], outlinedStyle, className)}
		>
			{children}
		</button>
	)
}

export default Button
