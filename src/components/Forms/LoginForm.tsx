'use client'

import { ILogin } from '@/types/forms/loginType'
import { loginSchema } from '@/validations/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
	const router = useRouter()

	const [authError, setAuthError] = useState<string>('')

  const { register, handleSubmit, formState: { errors } } = useForm<ILogin>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: ILogin) => {
		const status = await signIn('credentials', { email: data.email, password: data.password, redirect: false })
		
		if (!status?.ok && status?.error) {
			setAuthError(status.error)
		} else {
			router.push('/browse')
		}
  }

  return (
		<div className='w-full py-12 transparent-bg'>
			<div className='transparent-bg p-6 rounded-lg w-full sm:p-8 md:p-12 md:w-1/2 md:mx-auto lg:p-16 xl:w-1/4'>
				<h1 className='mb-6 text-white text-3xl font-bold'>Oturum Aç</h1>
				{authError && <p className='mb-2 p-3 rounded bg-orange-500 text-white font-medium'>{authError}</p>}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mb-4'>
						<label htmlFor='email' className='mb-2 text-white font-medium'>
							E Posta Adresi
						</label>
						<input
							type='text'
							{...register('email')}
							className='w-full p-2 bg-neutral-700 text-white rounded outline-none border-none'
						/>
						{errors.email && <span className='text-red text-sm'>{errors.email.message}</span>}
					</div>
					<div className='mb-2'>
						<label htmlFor='password' className='mb-2 text-white font-medium'>
							Parola
						</label>
						<input
							type='password'
							{...register('password')}
							className='w-full p-2 bg-neutral-700 text-white rounded outline-none border-none'
						/>
						{errors.password && <span className='text-red text-sm'>{errors.password.message}</span>}
					</div>
					<button
						type='submit'
						className='w-full mt-8 mb-2 py-2 bg-red text-white text-center text-xl font-medium rounded shadow hover:bg-[#F6121D]'
					>
						Oturum Aç
					</button>
					<div className='flex flex-col gap-2 text-neutral-400 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-0'>
						<div className='flex items-center gap-2'>
							<input type='checkbox' id='remember' className='w-4 h-4' />
							<label htmlFor='remember'>Beni Hatırla</label>
						</div>
						<p className='hover:underline cursor-pointer'>Yardım ister misiniz?</p>
					</div>
					<p className='my-4 text-neutral-400'>
						Netflix&apos;e katılmak ister misiniz?{' '}
						<Link href='/' className='text-white'>
							Şimdi kaydolun.
						</Link>
					</p>
					<p className='text-xs text-neutral-500'>
						Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor.
					</p>
					<p className='text-xs text-sky-400 cursor-pointer hover:underline'>Daha fazlasını öğrenin.</p>
				</form>
			</div>
		</div>
	)
}

export default LoginForm