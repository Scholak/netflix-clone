// Library Imports
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

// Component Imports
import Text from '@/components/Atoms/Text'
import Button from '@/components/Atoms/Button'
import SignupStepper from '@/components/Molecules/SignupStepper'

// Asset Imports
import stepImg from '@/assets/stepImg.png'

const RegistrationPage = async () => {
	const t = await getTranslations('Pages.SignupRegistrationPage')

	return (
		<div className='my-12 mx-4 flex flex-col items-center gap-2 text-neutral-900 sm:my-20 sm:w-72 sm:mx-auto md:my-32 md:w-80 lg:my-40 lg:w-96'>
			<Image
				unoptimized
				src={stepImg}
				alt='step image'
			/>
			<SignupStepper step='1' />
			<Text
				element='h1'
				align='center'
				size='2xl'
				weight='extrabold'
			>
				{t('title')}
			</Text>
			<Text align='center'>{t('description')}</Text>
			<Button
				variant='link'
				href='/signup/regform'
				size='lg'
			>
				{t('next')}
			</Button>
		</div>
	)
}

export default RegistrationPage
