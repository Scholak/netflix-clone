import Image from 'next/image'
import React from 'react'
import tick from '@/assets/tick.png'
import { PlanForm } from '@/components'

const PlanFormPage = () => {
  return (
		<div className='my-4 mx-4 flex flex-col gap-2 text-neutral-800 md:my-8 lg:mx-auto lg:w-2/3'>
			<h2>
				ADIM <span className='font-bold'>2 / 3</span>
			</h2>
			<h1 className='mb-4 text-3xl font-bold'>Kendinize uygun bir plan seçin</h1>
			<ul className='flex flex-col'>
				<li className='flex gap-1'>
					<Image src={tick} alt='tick' className='-translate-y-2 shrink-0' />
					Binlerce seçenek, sınırsız eğlence. Reklamsız.
				</li>
				<li className='flex gap-1'>
					<Image src={tick} alt='tick' className='-translate-y-2 shrink-0' />
					Sadece sizin için önerilen içerikler.
				</li>
				<li className='flex gap-1'>
					<Image src={tick} alt='tick' className='-translate-y-2 shrink-0' />
					Planınızı istediğiniz zaman değiştirebilir ya da iptal edebilirsiniz.
				</li>
			</ul>
			<PlanForm />
		</div>
	)
}

export default PlanFormPage