// Library Imports
import { getTranslations } from 'next-intl/server'

// Component Imports
import Text from '@/components/Atoms/Text'
import HomeFooterLinks from '@/components/Molecules/HomeFooterLinks'
import LanguageSwitcher from '@/components/Molecules/LanguageSwitcher'

const HomeFooter = async () => {
	const t = await getTranslations('Organisms.HomeFooter')

	return (
		<footer className='text-neutral-400 font-medium bg-black py-12 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>
			<Text
				size='lg'
				className='mb-8'
			>
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
			<HomeFooterLinks />
			<LanguageSwitcher />
			<Text
				size='sm'
				className='mt-4'
			>
				{t('nextflixText')}
			</Text>
		</footer>
	)
}

export default HomeFooter
