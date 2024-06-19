'use client'

// Library Imports
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

// Component Imports
import Text from '@/components/Atoms/Text'
import Button from '@/components/Atoms/Button'

// Store Imports
import { setPlanId as setPlanIdAction } from '@/redux/slices/signupReducer'

// Asset Imports
import tick from '@/assets/tick.png'
import tickGray from '@/assets/tickGray.png'

const PlanForm = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const [planId, setPlanId] = useState<number>(0)

	const handleNextStep = () => {
		dispatch(setPlanIdAction(planId as 0 | 1 | 2))
		router.push('/signup/paymentPicker')
	}

	return (
		<div>
			<div className='mb-8 text-neutral-500 md:mb-16'>
				<div className='mb-4 flex justify-between gap-2 md:justify-start md:gap-14 md:mb-8'>
					<div
						onClick={() => setPlanId(0)}
						className={`w-full h-32 flex items-center justify-center ${
							planId === 0 ? 'bg-red shadow-md' : 'bg-[#EF6B72]'
						} text-white rounded-sm cursor-pointer md:ml-auto md:w-32`}
					>
						Temel
					</div>
					<div
						onClick={() => setPlanId(1)}
						className={`w-full h-32 flex items-center justify-center ${
							planId === 1 ? 'bg-red shadow-md' : 'bg-[#EF6B72]'
						} text-white rounded-sm cursor-pointer md:w-32`}
					>
						Standard
					</div>
					<div
						onClick={() => setPlanId(2)}
						className={`w-full h-32 flex items-center justify-center ${
							planId === 2 ? 'bg-red shadow-md' : 'bg-[#EF6B72]'
						} text-white rounded-sm cursor-pointer md:w-32`}
					>
						Özel
					</div>
				</div>
				<div className='flex items-center justify-center py-4 border-b border-neutral-600 md:justify-between'>
					<Text
						element='span'
						size='sm'
						className='hidden text-neutral-700 md:w-1/2 md:block'
					>
						Aylık ücret
					</Text>
					<div className='w-full flex items-center justify-between md:justify-end md:gap-28'>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 0 && 'text-red'}`}
							onClick={() => setPlanId(0)}
						>
							99,99 TL
						</Text>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 1 && 'text-red'}`}
							onClick={() => setPlanId(1)}
						>
							149,99 TL
						</Text>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 2 && 'text-red'}`}
							onClick={() => setPlanId(2)}
						>
							199,99 TL
						</Text>
					</div>
				</div>
				<div className='flex items-center justify-center py-4 border-b border-neutral-600 md:justify-between'>
					<Text
						element='span'
						size='sm'
						className='hidden text-neutral-700 md:w-1/2 md:block'
					>
						Video kalitesi
					</Text>
					<div className='w-full flex items-center justify-between md:justify-end md:gap-28'>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 0 && 'text-red'}`}
							onClick={() => setPlanId(0)}
						>
							İyi
						</Text>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 1 && 'text-red'}`}
							onClick={() => setPlanId(1)}
						>
							Daha iyi
						</Text>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 2 && 'text-red'}`}
							onClick={() => setPlanId(2)}
						>
							En yüksek
						</Text>
					</div>
				</div>
				<div className='flex items-center justify-center py-4 border-b border-neutral-600 md:justify-between'>
					<Text
						element='span'
						size='sm'
						className='hidden text-neutral-700 md:w-1/2 md:block'
					>
						Çözünürlük
					</Text>
					<div className='w-full flex items-center justify-between md:justify-end md:gap-28'>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 0 && 'text-red'}`}
							onClick={() => setPlanId(0)}
						>
							720p
						</Text>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 1 && 'text-red'}`}
							onClick={() => setPlanId(1)}
						>
							1080p
						</Text>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 2 && 'text-red'}`}
							onClick={() => setPlanId(2)}
						>
							4K+HDR
						</Text>
					</div>
				</div>
				<div className='flex items-center justify-center py-2 border-b border-neutral-600 md:justify-between md:py-4'>
					<Text
						element='span'
						size='sm'
						className='hidden text-neutral-700 md:w-1/2 md:block'
					>
						Televizyon, bilgisayar, cep telefonu ve tabletinizde seyredin
					</Text>
					<div className='w-full flex items-center justify-between md:justify-end md:gap-28'>
						<div
							className='w-full flex justify-center items-center md:w-20'
							onClick={() => setPlanId(0)}
						>
							{planId === 0 ? (
								<Image
									unoptimized
									src={tick}
									alt='red tick'
								/>
							) : (
								<Image
									unoptimized
									src={tickGray}
									alt='gray tick'
								/>
							)}
						</div>
						<div
							className='w-full flex justify-center items-center md:w-20'
							onClick={() => setPlanId(1)}
						>
							{planId === 1 ? (
								<Image
									unoptimized
									src={tick}
									alt='red tick'
								/>
							) : (
								<Image
									unoptimized
									src={tickGray}
									alt='gray tick'
								/>
							)}
						</div>
						<div
							className='w-full flex justify-center items-center md:w-20'
							onClick={() => setPlanId(2)}
						>
							{planId === 2 ? (
								<Image
									unoptimized
									src={tick}
									alt='red tick'
								/>
							) : (
								<Image
									unoptimized
									src={tickGray}
									alt='gray tick'
								/>
							)}
						</div>
					</div>
				</div>
			</div>
			<Text
				size='xs'
				className='mb-1 text-neutral-600'
			>
				HD (720p), Tam HD (1080p), Ultra HD (4K) ve HDR kullanılabilirliği internet hizmetinize ve cihazınızın
				özelliklerine bağlıdır. Tüm içerikler bütün çözünürlüklerde mevcut olmayabilir. Ayrıntılar için{' '}
				<Text
					element='span'
					size='sm'
					className='text-sky-500'
				>
					Kullanım Koşulları
				</Text>{' '}
				sözleşmemize bakın.
			</Text>
			<Text
				size='xs'
				className='text-neutral-600'
			>
				Bu hesabı sadece sizinle birlikte yaşayanlar kullanabilir. Özel planda aynı anda 4 farklı cihazda içerik
				izleyin. Standart planda bu sayı 2, Temel planda ise 1&apos;dir.
			</Text>
			<Button
				onClick={handleNextStep}
				className='mt-4 py-4 w-full lg:w-min lg:px-48 lg:mx-auto lg:block'
			>
				İleri
			</Button>
		</div>
	)
}

export default PlanForm
