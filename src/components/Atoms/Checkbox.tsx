'use client'

// Library Imports
import { ChangeEventHandler, FocusEventHandler, forwardRef, useId } from 'react'

// Utility Imports
import { cn } from '@/utils/cn'

type ICheckboxProps = {
	/** Change Event handler */
	onChange: ChangeEventHandler<HTMLInputElement>
	/** Focus Event handler */
	onBlur: FocusEventHandler<HTMLInputElement>
	/** Input name */
	name: string
	/** Input placeholder */
	label?: string
	/** Additional classes */
	className?: string
}

const Checkbox = forwardRef(({ onChange, onBlur, name, label, className }: ICheckboxProps, ref: any) => {
	const id = useId()

	return (
		<div className='flex items-center gap-2'>
			<input
				ref={ref}
				type='checkbox'
				id={id}
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				className={cn('w-4 h-4', className)}
			/>
			{!!label && <label htmlFor={id}>{label}</label>}
		</div>
	)
})

export default Checkbox
