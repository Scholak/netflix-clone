// Library Imports
import Image from 'next/image'

// Component Imports
import Text from '@/components/Atoms/Text'
import GetStartedForm from '@/components/Molecules/GetStartedForm'
import Navbar from '@/components/Organisms/Navbar'

// Asset Imports
import homeBg from '@/assets/homeBg.jpg'

const Hero = () => {
	return (
		<div className='relative gradient-bg px-2 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-60'>
			<Image
				unoptimized
				src={homeBg}
				alt='home background image'
				fill
				className='object-cover -z-10'
			/>
			<Navbar />
			<div className='text-white text-center pt-32 pb-12 sm:pt-44 sm:pb-24 md:pt-52 md:pb-36 lg:pb-48'>
				<Text
					element='h1'
					size='4xl'
					weight='bold'
					align='center'
				>
					Âlâsı var!
				</Text>
				<Text
					element='h2'
					size='xl'
					align='center'
					className='mt-4'
				>
					En iyi dizi, film, belgesel ve çok daha fazlası burada.
				</Text>
				<Text
					size='xl'
					align='center'
					className='leading-6 my-6'
				>
					İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi
					girmek.
				</Text>
				<GetStartedForm />
			</div>
		</div>
	)
}

export default Hero
