// Library Imports
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

// Component Imports
import Text from '@/components/Atoms/Text'
import AddProfileCard from '@/components/Molecules/AddProfileCard'
import Profiles from '@/components/Organisms/Profiles'

const BrowsePage = async () => {
	const t = await getTranslations('Pages.BrowsePage')

	return (
		<div className='min-h-[100dvh] mx-auto flex items-center justify-center bg-neutral-900'>
			<div className='flex flex-col items-center mx-auto'>
				<Text
					element='h1'
					size='4xl'
					weight='medium'
					align='center'
					dark
					className='mt-8 mb-12 md:text-6xl md:mt-0'
				>
					{t('title')}
				</Text>
				<div className='flex flex-wrap justify-center gap-8'>
					<Profiles />
					<AddProfileCard />
				</div>
				<Link
					href='/manageProfiles'
					className='inline-block mt-16 mb-8 px-8 py-3 text-xl font-medium text-neutral-500 border border-neutral-500 shadow rounded-sm hover:text-white hover:border-white md:mb-0'
				>
					{t('profileManagement')}
				</Link>
			</div>
		</div>
	)
}

export default BrowsePage
