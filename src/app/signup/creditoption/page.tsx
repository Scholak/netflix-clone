// Library Imports
import Image from 'next/image'

// Component Imports
import Text from '@/components/Atoms/Text'
import SignupStepper from '@/components/Molecules/SignupStepper'
import PaymentWithCardForm from '@/components/Molecules/PaymentWithCardForm'

// Asset Imports
import paymentMethods from '@/assets/paymentMethods.png'

const PayWithCreditCardPage = () => {
	return (
		<div className='my-4 mx-4 flex flex-col gap-2 text-neutral-800 sm:my-8 sm:w-80 sm:mx-auto md:my-16 lg:w-96'>
			<SignupStepper step='3' />
			<Text
				element='h1'
				size='3xl'
				weight='bold'
				className='mb-2'
			>
				Ödemenizi ayarlayın: Kredi Kartı/Banka Kartı
			</Text>
			<Image
				unoptimized
				src={paymentMethods}
				alt='payment methods'
				className='translate-y-0.5'
			/>
			<PaymentWithCardForm />
			<Text
				size='sm'
				className='text-neutral-600'
			>
				Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor.{' '}
				<Text
					element='span'
					size='sm'
					className='text-sky-400'
				>
					Daha fazlasını öğrenin.
				</Text>
			</Text>
		</div>
	)
}

export default PayWithCreditCardPage
