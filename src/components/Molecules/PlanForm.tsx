'use client'

// Library Imports
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
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
	const t = useTranslations('Molecules.PlanForm')
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
						{t('planOneTitle')}
					</div>
					<div
						onClick={() => setPlanId(1)}
						className={`w-full h-32 flex items-center justify-center ${
							planId === 1 ? 'bg-red shadow-md' : 'bg-[#EF6B72]'
						} text-white rounded-sm cursor-pointer md:w-32`}
					>
						{t('planTwoTitle')}
					</div>
					<div
						onClick={() => setPlanId(2)}
						className={`w-full h-32 flex items-center justify-center ${
							planId === 2 ? 'bg-red shadow-md' : 'bg-[#EF6B72]'
						} text-white rounded-sm cursor-pointer md:w-32`}
					>
						{t('planThreeTitle')}
					</div>
				</div>
				<div className='flex items-center justify-center py-4 border-b border-neutral-600 md:justify-between'>
					<Text
						element='span'
						size='sm'
						className='hidden text-neutral-700 md:w-1/2 md:block'
					>
						{t('monthlyPrice')}
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
						{t('videoQuality')}
					</Text>
					<div className='w-full flex items-center justify-between md:justify-end md:gap-28'>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 0 && 'text-red'}`}
							onClick={() => setPlanId(0)}
						>
							{t('good')}
						</Text>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 1 && 'text-red'}`}
							onClick={() => setPlanId(1)}
						>
							{t('better')}
						</Text>
						<Text
							element='span'
							align='center'
							weight='bold'
							className={`w-full md:w-20 ${planId === 2 && 'text-red'}`}
							onClick={() => setPlanId(2)}
						>
							{t('highest')}
						</Text>
					</div>
				</div>
				<div className='flex items-center justify-center py-4 border-b border-neutral-600 md:justify-between'>
					<Text
						element='span'
						size='sm'
						className='hidden text-neutral-700 md:w-1/2 md:block'
					>
						{t('resolution')}
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
						{t('platforms')}
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
				{t.rich('descriptionTextOne', {
					link: chunks => (
						<Text
							element='span'
							size='sm'
							className='text-sky-500'
						>
							{chunks}
						</Text>
					),
				})}
			</Text>
			<Text
				size='xs'
				className='text-neutral-600'
			>
				{t('descriptionTextTwo')}
			</Text>
			<Button
				onClick={handleNextStep}
				className='mt-4 py-4 w-full lg:w-min lg:px-48 lg:mx-auto lg:block'
			>
				{t('next')}
			</Button>
		</div>
	)
}

export default PlanForm
