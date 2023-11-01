import { RegisterForm } from '@/components'
import React from 'react'

const RegisterFormPage = () => {
  return (
		<div className='my-12 mx-4 flex flex-col gap-2 text-neutral-900 sm:my-20 sm:w-72 sm:mx-auto md:my-32 md:w-80 lg:my-40 lg:w-96'>
			<h2>
				ADIM <span className='font-bold'>1 / 3</span>
			</h2>
			<h1 className='text-2xl font-extrabold'>Üyeliğinizi başlatmak için bir parola oluşturun</h1>
			<p className='xl:max-w-[300px]'>
				Sadece birkaç adım daha kaldı, sonra bitiyor! Biz de formaliteyi hiç sevmiyoruz.
			</p>
			<RegisterForm />
		</div>
	)
}

export default RegisterFormPage