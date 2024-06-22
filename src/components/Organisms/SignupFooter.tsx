// Library Imports
import { getTranslations } from 'next-intl/server'

// Component Imports
import Text from '@/components/Atoms/Text'
import SignupLanguageSwitcher from '@/components/Molecules/SignupLanguageSwitcher'

const SignupFooter = async () => {
	const t = await getTranslations('Organisms.SignupFooter')

	return (
		<footer className='bg-neutral-50 text-neutral-700 border-t border-neutral-300 py-3 px-4 sm:py-6 sm:px-10 md:px-20 lg:px-32'>
			<Text className='mb-8'>
				{t.rich('contactText', {
					underline: chunks => (
						<Text
							element='span'
							className='underline'
						>
							{chunks}
						</Text>
					),
				})}
			</Text>
			<ul className='grid my-4 text-sm grid-cols-2 lg:grid-cols-4'>
				<li className='mr-auto mb-2 cursor-pointer'>{t('link1')}</li>
				<li className='mr-auto mb-2 cursor-pointer'>{t('link2')}</li>
				<li className='mr-auto mb-2 cursor-pointer'>{t('link3')}</li>
				<li className='mr-auto mb-2 cursor-pointer'>{t('link4')}</li>
				<li className='mr-auto mb-2 cursor-pointer'>{t('link5')}</li>
				<li className='mr-auto mb-2 cursor-pointer'>{t('link6')}</li>
			</ul>
			<SignupLanguageSwitcher />
		</footer>
	)
}

export default SignupFooter
