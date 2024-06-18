'use client'

// Library Imports
import { ChangeEventHandler, FocusEventHandler, forwardRef, HTMLInputTypeAttribute, useId } from 'react'

// Utility Imports
import { cn } from '@/utils/cn'

type IInputProps = {
	/** Change Event handler */
	onChange: ChangeEventHandler<HTMLInputElement>
	/** Focus Event handler */
	onBlur: FocusEventHandler<HTMLInputElement>
	/** Input name */
	name: string
	/** Input type */
	type?: HTMLInputTypeAttribute
	/** Input placeholder */
	placeholder?: string
	/** Input label */
	label?: string
	/** Input display style */
	variant?: 'transparent' | 'gray' | 'white'
	/** Additional classes */
	className?: string
}

const labelVariants = {
	transparent: 'py-3 px-6 bg-transparent rounded border border-gray-300 placeholder:text-gray-200',
	gray: 'mb-2 text-white font-medium',
	white: '',
}

const inputVariants = {
	transparent: 'py-3 px-6 bg-transparent rounded border border-gray-300 placeholder:text-gray-200',
	gray: 'w-full p-2 bg-neutral-700 text-white rounded outline-none border-none',
	white: '',
}

const Input = forwardRef(
	(
		{ onChange, onBlur, name, type = 'text', placeholder, label, variant = 'white', className }: IInputProps,
		ref: any,
	) => {
		const id = useId()

		return (
			<>
				{!!label && (
					<label
						htmlFor={id}
						className={labelVariants[variant]}
					>
						{label}
					</label>
				)}
				<input
					id={id}
					ref={ref}
					type={type}
					name={name}
					onChange={onChange}
					onBlur={onBlur}
					placeholder={placeholder}
					className={cn(inputVariants[variant], className)}
				></input>
			</>
		)
	},
)

export default Input
