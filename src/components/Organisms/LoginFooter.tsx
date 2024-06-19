// Component Imports
import Text from '@/components/Atoms/Text'
import LanguageSwitcher from '@/components/Molecules/LanguageSwitcher'

const LoginFooter = () => {
	return (
		<footer className='transparent-login-footer text-neutral-400 font-medium py-12 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>
			<Text className='mb-4'>
				Sorularınız mı var?{' '}
				<Text
					element='span'
					className='underline'
				>
					0850-390-7444
				</Text>{' '}
				numaralı telefonu arayın
			</Text>
			<ul className='mb-4 text-sm columns-2 lg:columns-4'>
				<li className='underline mb-2'>SSS</li>
				<li className='underline mb-2'>Yardım Merkezi</li>
				<li className='underline mb-2'>Kullanım Koşulları</li>
				<li className='underline mb-2'>Gizlilik</li>
				<li className='underline mb-2'>Çerez Tercihleri</li>
				<li className='underline mb-2'>Kurumsal Bilgiler</li>
			</ul>
			<LanguageSwitcher />
		</footer>
	)
}

export default LoginFooter
