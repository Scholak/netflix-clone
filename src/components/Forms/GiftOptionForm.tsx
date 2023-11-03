'use client'

import { RootState } from '@/redux/store'
import { IGiftOption } from '@/types/forms/giftOptionType'
import { giftOptionSchema } from '@/validations/giftOptionSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

const plans = [
	{ name: 'Temel', price: '99,99' },
	{ name: 'Standart', price: '149,99' },
	{ name: 'Özel', price: '199,99' },
]

const GiftOptionForm = () => {
  const planId = useSelector((state: RootState) => state.signup.planId)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IGiftOption>({
		resolver: zodResolver(giftOptionSchema),
	})

	const onSubmit = (data: IGiftOption) => {
		if (data.code !== '12345678910') {
      alert('geçersiz hediye kodu')
    }
	}

  return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type='text'
				{...register('code')}
				className='w-full mb-1 py-3 px-4 text-black rounded border border-neutral-600'
			/>
			{errors.code && <span className='text-red text-xs'>{errors.code.message}</span>}
			<div className='my-6 flex items-center justify-between bg-neutral-100 rounded p-3'>
				<div className='font-medium'>
					<p>{plans[planId].price} TL/ay</p>
					<p className='text-neutral-600 text-sm'>{plans[planId].name}</p>
				</div>
				<Link href='/signup/editplan' className='text-sky-600 font-medium'>
					Değiştir
				</Link>
			</div>
			<button
				type='submit'
				className='w-full mb-4 py-4 bg-red text-white text-center text-xl font-medium rounded shadow hover:bg-[#F6121D]'
			>
				Üyeliğinizi Başlatın
			</button>
		</form>
	)
}

export default GiftOptionForm