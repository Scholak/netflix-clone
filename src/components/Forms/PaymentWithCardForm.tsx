'use client'

import { api } from '@/lib/api'
import { RootState } from '@/redux/store'
import { IPayWithCard } from '@/types/forms/payWithCardType'
import { payWithCardSchema } from '@/validations/payWithCardSchema'
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

const PaymentWithCardForm = () => {
	const { email, password, planId } = useSelector((state: RootState) => state.signup)

  const { register, handleSubmit, formState: { errors } } = useForm<IPayWithCard>({
    resolver: zodResolver(payWithCardSchema)
  })

  const onSubmit = async (data: IPayWithCard) => {
		if (data.confirm) {
			try {
				const response = await api.post('/signup', {
					email,
					password,
					planId,
					cardNumber: `**** **** **** ${data.cardNumber.slice(Number(data.cardNumber) - 4)}`,
				})

				console.log(response.data)
			} catch (error: any) {
				alert('bir hata oluştu')
			}
		} else {
			alert('Lütfen onaylayın!')
		}
  }

  return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='mb-2'>
				<label htmlFor='cardNumber' className='mb-1 font-bold text-sm text-neutral-500'>
					Kart numarası
				</label>
				<input
					type='number'
					id='cardNumber'
					pattern='/^([0-9]{4}( |\-)){3}[0-4]{4}$/'
					{...register('cardNumber')}
					className='w-full py-3 px-4 text-black rounded border border-neutral-600'
				/>
				{errors.cardNumber && <span className='text-red text-xs'>{errors.cardNumber.message}</span>}
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<div className='mb-2'>
					<label htmlFor='expiryDate' className='mb-1 font-bold text-sm text-neutral-500'>
						Son kullanma tarihi
					</label>
					<input
						type='month'
						id='expiryDate'
						{...register('expiryDate')}
						className='w-full py-3 p-4 text-black rounded border border-neutral-600'
					/>
					{errors.expiryDate && <span className='text-red text-xs'>{errors.expiryDate.message}</span>}
				</div>
				<div className='mb-2'>
					<label htmlFor='cvv' className='mb-1 font-bold text-sm text-neutral-500'>
						CVV
					</label>
					<input
						type='number'
						id='cvv'
						{...register('cvv')}
						className='w-full py-3 px-4 text-black rounded border border-neutral-600'
					/>
					{errors.cvv && <span className='text-red text-xs'>{errors.cvv.message}</span>}
				</div>
			</div>
			<div className='mb-2'>
				<label htmlFor='cardHolder' className='mb-1 font-bold text-sm text-neutral-500'>
					Kart üzerindeki ad
				</label>
				<input
					type='text'
					id='cardHolder'
					{...register('cardHolder')}
					className='w-full py-3 px-4 text-black rounded border border-neutral-600'
				/>
				{errors.cardHolder && <span className='text-red text-xs'>{errors.cardHolder.message}</span>}
			</div>
			<div className='flex items-center justify-between bg-neutral-100 rounded p-3'>
				<div className='font-medium'>
					<p>{plans[planId].price} TL/ay</p>
					<p className='text-neutral-600 text-sm'>{plans[planId].name}</p>
				</div>
				<Link href='/signup/editplan' className='text-sky-600 font-medium'>
					Değiştir
				</Link>
			</div>
			<p className='mb-4 text-xs text-neutral-500'>
				Ödemeleriniz uluslararası olarak işlenecektir. İlave banka ücretleri uygulanabilir.
			</p>
			<p className='text-xs text-neutral-500'>
				Aşağıdaki onay kutusunu işaretleyerek{' '}
				<span className='text-sky-400 cursor-pointer hover:underline'>Kullanım Koşullarımızı, </span>
				<span className='text-sky-400 cursor-pointer hover:underline'>Gizlilik Bildirimimizi</span> ve 18 yaşından büyük
				olduğunuzu kabul edersiniz. Netflix, üyeliğinizi otomatik olarak devam ettirecek ve siz iptal edene kadar üyelik
				ücretini (şu anda aylık 99,99 TL) ödeme yönteminizden tahsil edecektir. Gelecekte ücret alınmasını
				istemiyorsanız üyeliğinizi istediğiniz zaman iptal edebilirsiniz.
			</p>
			<div className='my-4 flex items-center gap-3'>
				<input type='checkbox' id='confirm' {...register('confirm')} className='w-6 h-6 border border-neutral-500' />
				<label htmlFor='confirm' className='text-neutral-500 text-lg'>
					Kabul ediyorum
				</label>
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

export default PaymentWithCardForm