import { GiftOptionForm } from '@/components'
import React from 'react'

const GiftOptionPage = () => {
  return (
		<div className='my-4 mx-4 flex flex-col gap-2 text-neutral-800 sm:my-8 sm:w-80 sm:mx-auto md:my-16 lg:w-96'>
			<h2 className='text-sm'>ADIM 3 / 3</h2>
			<h1 className='mb-2 -translate-y-1 text-3xl font-bold'>Hediye kodunuzu girin</h1>
			<GiftOptionForm />
			<p className='text-sm text-neutral-600'>
				Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor.{' '}
				<span className='text-sky-400'>Daha fazlasını öğrenin.</span>
			</p>
		</div>
	)
}

export default GiftOptionPage