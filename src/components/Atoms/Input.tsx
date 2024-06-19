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
	/** Input initial value */
	defaultValue?: string | number
	/** Input type */
	type?: HTMLInputTypeAttribute
	/** Input placeholder */
	placeholder?: string
	/** Input label */
	label?: string
	/** Input display style */
	variant?: 'transparent' | 'gray' | 'outlined'
	/** Additional classes */
	className?: string
}

const labelVariants = {
	transparent: 'py-3 px-6 bg-transparent rounded border border-gray-300 placeholder:text-gray-200',
	gray: 'mb-2 text-white font-medium',
	outlined: 'block text-sm mb-1',
}

const inputVariants = {
	transparent: 'py-3 px-6 bg-transparent rounded border border-gray-300 placeholder:text-gray-200',
	gray: 'w-full p-2 bg-neutral-700 text-white rounded outline-none border-none',
	outlined: 'w-full py-2 px-4 text-black rounded border border-neutral-600',
}

const Input = (
	{
		onChange,
		onBlur,
		name,
		defaultValue,
		type = 'text',
		placeholder,
		label,
		variant = 'outlined',
		className,
	}: IInputProps,
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
				defaultValue={defaultValue}
				onChange={onChange}
				onBlur={onBlur}
				placeholder={placeholder}
				className={cn(inputVariants[variant], className)}
			></input>
		</>
	)
}

export default forwardRef(Input)
