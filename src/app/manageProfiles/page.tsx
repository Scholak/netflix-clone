// Library Imports
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

// Component Imports
import AddProfileCard from '@/components/Molecules/AddProfileCard'
import Profiles from '@/components/Organisms/Profiles'

const ManageProfilesPage = async () => {
	const t = await getTranslations('Pages.ManageProfilesPage')

	return (
		<div className='min-h-[100dvh] mx-auto flex items-center justify-center bg-neutral-900'>
			<div className='flex flex-col items-center mx-auto'>
				<h1 className='mt-8 mb-12 text-white font-medium text-center text-4xl md:text-6xl md:mt-0'>{t('title')}</h1>
				<div className='flex flex-wrap justify-center gap-8'>
					<Profiles isEditingMode={true} />
					<AddProfileCard />
				</div>
				<Link
					href='/browse'
					className='inline-block mt-16 mb-8 px-8 py-3 text-xl font-medium text-neutral-500 border border-neutral-500 shadow rounded-sm hover:text-white hover:border-white md:mb-0'
				>
					{t('okay')}
				</Link>
			</div>
		</div>
	)
}

export default ManageProfilesPage
