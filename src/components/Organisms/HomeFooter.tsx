// Component Imports
import Text from '@/components/Atoms/Text'
import HomeFooterLinks from '@/components/Molecules/HomeFooterLinks'
import LanguageSwitcher from '@/components/Molecules/LanguageSwitcher'

const HomeFooter = () => {
	return (
		<footer className='text-neutral-400 font-medium bg-black py-12 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>
			<Text
				size='lg'
				className='mb-8'
			>
				Sorularınız mı var?{' '}
				<Text
					element='span'
					className='underline'
				>
					0850-390-7444
				</Text>{' '}
				numaralı telefonu arayın
			</Text>
			<HomeFooterLinks />
			<LanguageSwitcher />
			<Text size='sm'>Netflix Türkiye</Text>
		</footer>
	)
}

export default HomeFooter
