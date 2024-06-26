// Library Imports
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import axios from 'axios'

// Component Imports
import EditProfileForm from '@/components/Molecules/EditProfileForm'

type Params = {
	params: {
		id: number
	}
}

const EditProfilePage = async ({ params }: Params) => {
	const response = await axios.get(`${process.env.APP_URL}/api/profile/${params.id}`, {
		headers: { Cookie: headers().get('cookie') },
	})
	const t = await getTranslations('Pages.EditProfilePage')

	if (!response.data.profile) {
		redirect('/manageProfiles')
	}

	return (
		<div className='p-4 min-h-[100dvh] py-6 bg-neutral-900 sm:px-0 md:py-10 lg:py-16'>
			<div className='mx-auto md:w-1/2 lg:w-1/3'>
				<h1 className='text-6xl text-white text-center font-medium md:text-left'>{t('title')}</h1>
				<div className='h-px my-6 bg-neutral-600'></div>
				<EditProfileForm profile={response.data.profile} />
			</div>
		</div>
	)
}

export default EditProfilePage
