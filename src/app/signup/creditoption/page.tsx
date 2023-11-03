import React from 'react'
import paymentMethods from '@/assets/paymentMethods.png'
import Image from 'next/image'
import { PaymentWithCardForm } from '@/components'

const PayWithCreditCardPage = () => {
  return (
		<div className='my-4 mx-4 flex flex-col gap-2 text-neutral-800 sm:my-8 sm:w-80 sm:mx-auto md:my-16 lg:w-96'>
			<h2 className='text-center'>
				ADIM <span className='font-bold'>3 / 3</span>
			</h2>
			<h1 className='mb-2 text-3xl font-bold'>Ödemenizi ayarlayın: Kredi Kartı/Banka Kartı</h1>
			<Image src={paymentMethods} alt='payment methods' className='translate-y-0.5' />
			<PaymentWithCardForm />
			<p className='text-sm text-neutral-600'>
				Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor.{' '}
				<span className='text-sky-400'>Daha fazlasını öğrenin.</span>
			</p>
		</div>
	)
}

export default PayWithCreditCardPage