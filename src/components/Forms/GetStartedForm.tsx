'use client'

import { setEmail } from '@/redux/slices/signupReducer'
import { IGetStarted } from '@/types/forms/getStrartedType'
import { getStartedSchema } from '@/validations/getStartedSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaChevronRight } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const GetStartedForm = () => {
	const dispatch = useDispatch()
	const router = useRouter()

	const { register, handleSubmit, formState: { errors } } = useForm<IGetStarted>({
		resolver: zodResolver(getStartedSchema)
	})

	const onSubmit = (data: IGetStarted) => {
		dispatch(setEmail(data.email))
		router.push('/signup/registration')
	}

  return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-2 sm:flex-row'>
				<input
					{...register('email')}
					type='text'
					className='py-3 px-6 bg-transparent rounded border border-gray-300 placeholder:text-gray-200'
					placeholder='E-posta adresi'
				/>
				<button className='flex items-center gap-3 bg-red text-white rounded py-3 px-6 text-xl font-medium transition duration-300 hover:bg-redHover'>
					<span>Başlayın</span>
					<FaChevronRight />
				</button>
			</form>
			{errors.email && <p className='mt-1 text-center text-red text-sm'>{errors.email.message}</p>}
		</>
	)
}

export default GetStartedForm