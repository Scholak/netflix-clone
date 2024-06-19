// Library Imports
import { FaAngleRight } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

// Component Imports
import Text from '@/components/Atoms/Text'
import SignupStepper from '@/components/Molecules/SignupStepper'

// Asset Imports
import lock from '@/assets/lock.png'
import netflix from '@/assets/netflix.png'
import payViaPhone from '@/assets/payViaPhone.png'
import paymentMethods from '@/assets/paymentMethods.png'

const PaymentPickerPage = () => {
	return (
		<div className='my-4 mx-4 flex flex-col items-center gap-2 text-neutral-800 sm:my-8 sm:w-96 sm:mx-auto md:my-16 lg:w-[540px]'>
			<Image
				unoptimized
				src={lock}
				alt='lock image'
				className='mb-4 lg:mb-8'
			/>
			<SignupStepper step='3' />
			<Text
				element='h1'
				size='3xl'
				weight='bold'
				align='center'
				className='mb-2'
			>
				Tercih ettiğiniz ödeme yöntemini seçin
			</Text>
			<Text
				align='center'
				weight='medium'
				className='mb-2 xl:max-w-[480px]'
			>
				Ödeme yönteminiz şifrelenerek korunur ve dilediğiniz zaman ödeme yönteminizi değiştirebilirsiniz.
			</Text>
			<Text
				align='center'
				className='text-neutral-800 font-bold xl:max-w-[480px]'
			>
				Endişelenmeyin, güvenlidir. İstediğiniz zaman internet üzerinden kolayca iptal edebilirsiniz.
			</Text>
			<div className='mt-4 grid gap-1'>
				<Link
					href='/signup/creditoption'
					className='w-full flex items-center gap-3 p-3 border-2 border-neutral-400 rounded cursor-pointer'
				>
					<Text
						element='span'
						size='sm'
					>
						Kredi Kartı veya Banka Kartı
					</Text>
					<Image
						unoptimized
						src={paymentMethods}
						alt='payment methods'
						className='translate-y-0.5'
					/>
					<FaAngleRight className='ml-auto text-2xl' />
				</Link>
				<Link
					href='/signup/dcboption'
					className='w-full flex items-center gap-3 p-3 border-2 border-neutral-400 rounded cursor-pointer'
				>
					<Text
						element='span'
						size='sm'
					>
						Cep telefonu faturasına ekle
					</Text>
					<Image
						unoptimized
						src={payViaPhone}
						alt='pay via phone'
						className='translate-y-0.5'
					/>
					<FaAngleRight className='ml-auto text-2xl' />
				</Link>
				<Link
					href='/signup/giftoption'
					className='w-full flex items-center gap-3 p-3 border-2 border-neutral-400 rounded cursor-pointer'
				>
					<Text
						element='span'
						size='sm'
					>
						Hediye Kartı
					</Text>
					<Image
						unoptimized
						src={netflix}
						alt='netflix'
						className='translate-y-0.5'
					/>
					<FaAngleRight className='ml-auto text-2xl' />
				</Link>
			</div>
		</div>
	)
}

export default PaymentPickerPage
