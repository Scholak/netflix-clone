import React from 'react'
import stepImg from '@/assets/stepImg.png'
import Image from 'next/image'
import Link from 'next/link'

const RegistrationPage = () => {
  return (
		<div className='my-12 mx-4 flex flex-col items-center gap-2 text-neutral-900 sm:my-20 sm:w-72 sm:mx-auto md:my-32 md:w-80 lg:my-40 lg:w-96'>
			<Image src={stepImg} alt='step image' />
			<h2 className='text-center'>
				ADIM <span className='font-bold'>1 / 3</span>
			</h2>
			<h1 className='text-center text-2xl font-extrabold'>Hesabınızı oluşturalım</h1>
			<p className='text-center xl:max-w-[300px]'>
				Netflix sizin için kişiselleştirilir. İstediğiniz zaman, istediğiniz cihazda izlemek için bir parola oluşturun.
			</p>
			<Link
				href='/signup/regform'
				className='w-full mt-4 py-4 bg-red text-white text-center text-xl font-medium rounded shadow hover:bg-[#F6121D]'
			>
				İleri
			</Link>
		</div>
	)
}

export default RegistrationPage