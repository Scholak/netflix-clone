'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setPlanId as setPlanIdAction } from '@/redux/slices/signupReducer'
import tick from '@/assets/tick.png'
import tickGray from '@/assets/tickGray.png'
import Image from 'next/image'
import { RootState } from '@/redux/store'

const EditPlanForm = () => {
	const router = useRouter()
	const dispatch = useDispatch()
  const defaultPlanId = useSelector((state: RootState) => state.signup.planId)

  const [planId, setPlanId] = useState<number>(defaultPlanId)

	const handleNextStep = () => {
		dispatch(setPlanIdAction(planId as 0 | 1 | 2))
		router.back()
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
					<span className='hidden text-neutral-700 md:w-1/2 md:block'>Aylık ücret</span>
					<div className='w-full flex items-center justify-between md:justify-end md:gap-28'>
						<span
							className={`w-full text-center font-bold md:w-20 ${planId === 0 && 'text-red'}`}
							onClick={() => setPlanId(0)}
						>
							99,99 TL
						</span>
						<span
							className={`w-full text-center font-bold md:w-20 ${planId === 1 && 'text-red'}`}
							onClick={() => setPlanId(1)}
						>
							149,99 TL
						</span>
						<span
							className={`w-full text-center font-bold md:w-20 ${planId === 2 && 'text-red'}`}
							onClick={() => setPlanId(2)}
						>
							199,99 TL
						</span>
					</div>
				</div>
				<div className='flex items-center justify-center py-4 border-b border-neutral-600 md:justify-between'>
					<span className='hidden text-neutral-700 md:w-1/2 md:block'>Video kalitesi</span>
					<div className='w-full flex items-center justify-between md:justify-end md:gap-28'>
						<span
							className={`w-full text-center font-bold md:w-20 ${planId === 0 && 'text-red'}`}
							onClick={() => setPlanId(0)}
						>
							İyi
						</span>
						<span
							className={`w-full text-center font-bold md:w-20 ${planId === 1 && 'text-red'}`}
							onClick={() => setPlanId(1)}
						>
							Daha iyi
						</span>
						<span
							className={`w-full text-center font-bold md:w-20 ${planId === 2 && 'text-red'}`}
							onClick={() => setPlanId(2)}
						>
							En yüksek
						</span>
					</div>
				</div>
				<div className='flex items-center justify-center py-4 border-b border-neutral-600 md:justify-between'>
					<span className='hidden text-neutral-700 md:w-1/2 md:block'>Çözünürlük</span>
					<div className='w-full flex items-center justify-between md:justify-end md:gap-28'>
						<span
							className={`w-full text-center font-bold md:w-20 ${planId === 0 && 'text-red'}`}
							onClick={() => setPlanId(0)}
						>
							720p
						</span>
						<span
							className={`w-full text-center font-bold md:w-20 ${planId === 1 && 'text-red'}`}
							onClick={() => setPlanId(1)}
						>
							1080p
						</span>
						<span
							className={`w-full text-center font-bold md:w-20 ${planId === 2 && 'text-red'}`}
							onClick={() => setPlanId(2)}
						>
							4K+HDR
						</span>
					</div>
				</div>
				<div className='flex items-center justify-center py-2 border-b border-neutral-600 md:justify-between md:py-4'>
					<span className='hidden text-neutral-700 md:w-1/2 md:block'>
						Televizyon, bilgisayar, cep telefonu ve tabletinizde seyredin
					</span>
					<div className='w-full flex items-center justify-between md:justify-end md:gap-28'>
						<span className='w-full flex justify-center items-center md:w-20' onClick={() => setPlanId(0)}>
							{planId === 0 ? <Image src={tick} alt='red tick' /> : <Image src={tickGray} alt='gray tick' />}
						</span>
						<span className='w-full flex justify-center items-center md:w-20' onClick={() => setPlanId(1)}>
							{planId === 1 ? <Image src={tick} alt='red tick' /> : <Image src={tickGray} alt='gray tick' />}
						</span>
						<span className='w-full flex justify-center items-center md:w-20' onClick={() => setPlanId(2)}>
							{planId === 2 ? <Image src={tick} alt='red tick' /> : <Image src={tickGray} alt='gray tick' />}
						</span>
					</div>
				</div>
			</div>
			<p className='mb-1 text-xs text-neutral-600'>
				HD (720p), Tam HD (1080p), Ultra HD (4K) ve HDR kullanılabilirliği internet hizmetinize ve cihazınızın
				özelliklerine bağlıdır. Tüm içerikler bütün çözünürlüklerde mevcut olmayabilir. Ayrıntılar için{' '}
				<span className='text-sky-500'>Kullanım Koşulları</span> sözleşmemize bakın.
			</p>
			<p className='text-xs text-neutral-600'>
				Bu hesabı sadece sizinle birlikte yaşayanlar kullanabilir. Özel planda aynı anda 4 farklı cihazda içerik
				izleyin. Standart planda bu sayı 2, Temel planda ise 1&apos;dir.
			</p>
			<button
				className='mt-4 w-full py-4 bg-red text-white text-center text-xl font-medium rounded shadow lg:w-min lg:px-48 lg:mx-auto lg:block hover:bg-[#F6121D]'
				onClick={handleNextStep}
			>
				İleri
			</button>
		</div>
	)
}

export default EditPlanForm
