// Library Imports
import Image from 'next/image'

// Component Imports
import Text from '@/components/Atoms/Text'
import Button from '@/components/Atoms/Button'
import SignupStepper from '@/components/Molecules/SignupStepper'

// Asset Imports
import stepImg from '@/assets/stepImg.png'

const RegistrationPage = () => {
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
				Hesabınızı oluşturalım
			</Text>
			<Text align='center'>
				Netflix sizin için kişiselleştirilir. İstediğiniz zaman, istediğiniz cihazda izlemek için bir parola oluşturun.
			</Text>
			<Button
				variant='link'
				href='/signup/regform'
				size='lg'
			>
				İleri
			</Button>
		</div>
	)
}

export default RegistrationPage
