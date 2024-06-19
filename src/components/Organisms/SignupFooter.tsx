// Component Imports
import Text from '@/components/Atoms/Text'
import SignupLanguageSwitcher from '@/components/Molecules/SignupLanguageSwitcher'

const SignupFooter = () => {
	return (
		<footer className='bg-neutral-50 text-neutral-700 border-t border-neutral-300 py-3 px-4 sm:py-6 sm:px-10 md:px-20 lg:px-32'>
			<Text className='mb-8'>
				Sorularınız mı var?{' '}
				<Text
					element='span'
					className='underline'
				>
					0850-390-7444
				</Text>{' '}
				numaralı telefonu arayın
			</Text>
			<ul className='my-4 text-sm columns-2 lg:columns-4 lg:w-1/2'>
				<li className='mb-2'>SSS</li>
				<li className='mb-2'>Yardım Merkezi</li>
				<li className='mb-2'>Netflix Shop</li>
				<li className='mb-2'>Kullanım Koşulları</li>
				<li className='mb-2'>Gizlilik</li>
				<li className='mb-2'>Çerez Tercihleri</li>
				<li className='mb-2'>Kurumsal Bilgiler</li>
			</ul>
			<SignupLanguageSwitcher />
		</footer>
	)
}

export default SignupFooter
