import React from 'react'
import lock from '@/assets/lock.png'
import paymentMethods from '@/assets/paymentMethods.png'
import payViaPhone from '@/assets/payViaPhone.png'
import netflix from '@/assets/netflix.png'
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa'
import Link from 'next/link'

const PaymentPickerPage = () => {
  return (
		<div className='my-4 mx-4 flex flex-col items-center gap-2 text-neutral-800 sm:my-8 sm:w-96 sm:mx-auto md:my-16 lg:w-[540px]'>
			<Image src={lock} alt='lock image' className='mb-4 lg:mb-8' />
			<h2 className='text-center'>
				ADIM <span className='font-bold'>3 / 3</span>
			</h2>
			<h1 className='mb-2 text-center text-3xl font-bold'>Tercih ettiğiniz ödeme yöntemini seçin</h1>
			<p className='text-center font-medium mb-2 xl:max-w-[480px]'>
				Ödeme yönteminiz şifrelenerek korunur ve dilediğiniz zaman ödeme yönteminizi değiştirebilirsiniz.
			</p>
			<p className='text-center text-neutral-800 font-bold xl:max-w-[480px]'>
				Endişelenmeyin, güvenlidir. İstediğiniz zaman internet üzerinden kolayca iptal edebilirsiniz.
			</p>
			<div className='mt-4 grid gap-1'>
				<Link
					href='/signup/creditoption'
					className='w-full flex items-center gap-3 p-3 border-2 border-neutral-400 rounded cursor-pointer'
				>
					<span>Kredi Kartı veya Banka Kartı</span>
					<Image src={paymentMethods} alt='payment methods' className='translate-y-0.5' />
					<FaAngleRight className='ml-auto text-2xl' />
				</Link>
				<Link
					href='/signup/dcboption'
					className='w-full flex items-center gap-3 p-3 border-2 border-neutral-400 rounded cursor-pointer'
				>
					<span>Cep telefonu faturasına ekle</span>
					<Image src={payViaPhone} alt='pay via phone' className='translate-y-0.5' />
					<FaAngleRight className='ml-auto text-2xl' />
				</Link>
				<Link
					href='/signup/giftoption'
					className='w-full flex items-center gap-3 p-3 border-2 border-neutral-400 rounded cursor-pointer'
				>
					<span>Hediye Kartı</span>
					<Image src={netflix} alt='netflix' className='translate-y-0.5' />
					<FaAngleRight className='ml-auto text-2xl' />
				</Link>
			</div>
		</div>
	)
}

export default PaymentPickerPage