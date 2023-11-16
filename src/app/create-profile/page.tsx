import { CreateProfileForm } from '@/components'
import React from 'react'

const CreateProfilePage = () => {
  return (
		<div className='min-h-[100dvh] flex items-center justify-center px-2 bg-neutral-900 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-60'>
			<div className='flex flex-col md:w-1/2'>
				<h1 className='text-6xl text-white text-center font-medium md:text-left'>Profil Ekle</h1>
				<p className='my-6 text-2xl text-neutral-500 text-center font-medium md:text-left'>
					Netflix&apos;i izleyen başka bir kişi için profil ekleyin.
				</p>
				<div className='h-px mb-8 bg-neutral-600'></div>
				<CreateProfileForm />
			</div>
		</div>
	)
}

export default CreateProfilePage