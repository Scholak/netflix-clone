import { EditProfileForm } from '@/components'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

interface Params {
	params: {
		id: number
	}
}

const EditProfilePage = async ({ params }: Params) => {
	const response = await axios.get(`${process.env.APP_URL}/api/profile/${params.id}`)

	if (!response.data.profile) {
		redirect('/manageProfiles')
	}

  return (
		<div className='min-h-[100dvh] py-6 bg-neutral-900 md:py-10 lg:py-16'>
			<div className='mx-auto md:w-1/2 lg:w-1/3'>
				<h1 className='text-6xl text-white text-center font-medium md:text-left'>Profili Düzenle</h1>
				<div className='h-px my-6 bg-neutral-600'></div>
				<EditProfileForm profile={response.data.profile} />
			</div>
		</div>
	)
}

export default EditProfilePage