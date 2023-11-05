'use client'

import { api } from '@/lib/api'
import { setEmail, setPassword } from '@/redux/slices/signupReducer'
import { RootState } from '@/redux/store'
import { isExistingUser } from '@/services/userService'
import { IRegister } from '@/types/forms/registerType'
import { registerSchema } from '@/validations/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

const RegisterForm = () => {
  const router = useRouter()

	const isExistingUserMutation = useMutation({
		mutationFn: isExistingUser,
		onSuccess: (exists: string) => {
			if (!exists) {
				router.push('/signup')
			} else {
				dispatch(setEmail(''))
				dispatch(setPassword(''))
				alert('Kullanıcı zaten kayıtlı')
			}
		},
	})

  const email = useSelector((state: RootState) => state.signup.email)
  const dispatch = useDispatch()

  const { handleSubmit, register, formState: { errors } } = useForm<IRegister>({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data: IRegister) => {
		try {
			dispatch(setEmail(data.email))
			dispatch(setPassword(data.password))
			await isExistingUserMutation.mutateAsync(data)
		} catch (error: any) {
			// will be implemented...
		}
	}

  return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor='email' className='block text-sm mb-1'>
					E-posta
				</label>
				<input
					type='text'
					id='email'
					{...register('email')}
					className='w-full py-2 px-4 text-black rounded border border-neutral-600'
					defaultValue={email}
				/>
				{errors.email && <span className='text-red'>{errors.email.message}</span>}
			</div>
			<div className='my-2'>
				<label htmlFor='password' className='block text-sm mb-1'>
					Bir parola ekleyin
				</label>
				<input
					type='password'
					id='password'
					{...register('password')}
					className='w-full py-2 px-4 text-black rounded border border-neutral-600'
				/>
				{errors.password && <span className='text-red'>{errors.password.message}</span>}
			</div>
			<div className='flex items-center justify-between gap-4 mb-1'>
				<input type='checkbox' className='w-4 h-4 rounded' id='checkbox' />
				<label htmlFor='checkbox'>Netflix özel teklifleri e-posta ile gönderilmesin.</label>
			</div>
			<button
				type='submit'
				className='w-full mt-4 py-4 bg-red text-white text-center text-xl font-medium rounded shadow hover:bg-[#F6121D]'
			>
				İleri
			</button>
		</form>
	)
}

export default RegisterForm