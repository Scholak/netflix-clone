// Library Imports
import { getTranslations } from 'next-intl/server'

// Component Imports
import Text from '@/components/Atoms/Text'
import LanguageSwitcher from '@/components/Molecules/LanguageSwitcher'

const LoginFooter = async () => {
	const t = await getTranslations('Organisms.LoginFooter')

	return (
		<footer className='transparent-login-footer text-neutral-400 font-medium py-12 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>
			<Text className='mb-4'>
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
			<ul className='grid mb-4 text-sm grid-cols-2 lg:grid-cols-4'>
				<li className='mr-auto mb-2 underline cursor-pointer'>{t('link1')}</li>
				<li className='mr-auto mb-2 underline cursor-pointer'>{t('link2')}</li>
				<li className='mr-auto mb-2 underline cursor-pointer'>{t('link3')}</li>
				<li className='mr-auto mb-2 underline cursor-pointer'>{t('link4')}</li>
				<li className='mr-auto mb-2 underline cursor-pointer'>{t('link5')}</li>
				<li className='mr-auto mb-2 underline cursor-pointer'>{t('link6')}</li>
			</ul>
			<LanguageSwitcher />
		</footer>
	)
}

export default LoginFooter
