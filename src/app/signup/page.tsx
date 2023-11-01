import Image from 'next/image'
import React from 'react'
import tickOutlined from '@/assets/tickOutlined.png'
import tick from '@/assets/tick.png'
import Link from 'next/link'

const SelectPlanPage = () => {
  return (
		<div className='my-12 mx-4 flex flex-col items-center gap-2 text-neutral-800 sm:my-20 sm:w-72 sm:mx-auto md:my-32 lg:my-40 lg:w-72'>
			<Image src={tickOutlined} alt='tick outlined' className='mb-4' />
			<h2 className='text-center'>
				ADIM <span className='font-bold'>2 / 3</span>
			</h2>
			<h1 className='mb-4 text-center text-3xl font-bold'>Planınızı seçin.</h1>
			<ul className='flex flex-col gap-4'>
				<li className='flex gap-1'>
					<Image src={tick} alt='tick' className='-translate-y-2 shrink-0' />
					Taahhüt yok, istediğiniz zaman iptal edin.
				</li>
				<li className='flex gap-1'>
					<Image src={tick} alt='tick' className='-translate-y-2 shrink-0' />
					Tek ve düşük bir ücretle, Netflix'teki her şey önünüzde.
				</li>
				<li className='flex gap-1'>
					<Image src={tick} alt='tick' className='-translate-y-2 shrink-0' />
					Tüm cihazlarınızda sınırsız izleme imkânı.
				</li>
			</ul>
			<Link
				href='/signup/planform'
				className='w-full mt-8 py-4 bg-red text-white text-center text-xl font-medium rounded shadow hover:bg-[#F6121D]'
			>
				İleri
			</Link>
		</div>
	)
}

export default SelectPlanPage