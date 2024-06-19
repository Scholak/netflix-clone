// Component Imports
import Text from '@/components/Atoms/Text'
import GiftOptionForm from '@/components/Molecules/GiftOptionForm'

const GiftOptionPage = () => {
	return (
		<div className='my-4 mx-4 flex flex-col gap-2 text-neutral-800 sm:my-8 sm:w-80 sm:mx-auto md:my-16 lg:w-96'>
			<Text
				element='h2'
				size='sm'
			>
				ADIM 3 / 3
			</Text>
			<Text
				element='h1'
				size='3xl'
				weight='bold'
				className='mb-2 -translate-y-1'
			>
				Hediye kodunuzu girin
			</Text>
			<GiftOptionForm />
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

export default GiftOptionPage
