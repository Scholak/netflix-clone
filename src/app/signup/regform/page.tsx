// Library Imports
import { getTranslations } from 'next-intl/server'

// Component Imports
import Text from '@/components/Atoms/Text'
import RegisterForm from '@/components/Molecules/RegisterForm'
import SignupStepper from '@/components/Molecules/SignupStepper'

const RegisterFormPage = async () => {
	const t = await getTranslations('Pages.SignupRegisterFormPage')

	return (
		<div className='my-12 mx-4 flex flex-col gap-2 text-neutral-900 sm:my-20 sm:w-72 sm:mx-auto md:my-32 md:w-80 lg:my-40 lg:w-96'>
			<SignupStepper step='1' />
			<Text
				element='h1'
				size='2xl'
				weight='extrabold'
				align='center'
			>
				{t('title')}
			</Text>
			<Text align='center'>{t('description')}</Text>
			<RegisterForm />
		</div>
	)
}

export default RegisterFormPage
