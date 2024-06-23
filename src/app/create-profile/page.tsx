// Library Imports
import { getTranslations } from 'next-intl/server'

// Component Imports
import Text from '@/components/Atoms/Text'
import CreateProfileForm from '@/components/Molecules/CreateProfileForm'

const CreateProfilePage = async () => {
	const t = await getTranslations('Pages.CreateProfilePage')

	return (
		<div className='min-h-[100dvh] flex items-center justify-center p-4 bg-neutral-900 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-60'>
			<div className='flex flex-col md:w-1/2'>
				<Text
					element='h1'
					size='6xl'
					align='center'
					weight='medium'
					dark
					className='md:text-left'
				>
					{t('title')}
				</Text>
				<Text
					size='2xl'
					align='center'
					weight='medium'
					className='my-6 text-neutral-500 md:text-left'
				>
					{t('description')}
				</Text>
				<div className='h-px mb-8 bg-neutral-600'></div>
				<CreateProfileForm />
			</div>
		</div>
	)
}

export default CreateProfilePage
