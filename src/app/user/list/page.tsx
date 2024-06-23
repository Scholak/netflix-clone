// Library Imports
import { redirect } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

// Type Imports
import { IList } from '@/types/listType'

// Component Imports
import Text from '@/components/Atoms/Text'
import MediaCard from '@/components/Organisms/MediaCard'

// Utility Imports
import { api } from '@/lib/api'
import { auth } from '@/lib/auth'

const ListPage = async () => {
	const session = await auth()
	const t = await getTranslations('Pages.ListPage')

	if (!session?.user) {
		redirect('/login')
	}

	if (!session?.user.profileId) {
		redirect('/browse')
	}

	const response = await api.get(`/list/${session.user.profileId}`)

	return (
		<div className='px-4 py-20 md:px-8 xl:px-16 bg-neutral-900'>
			<Text
				element='h5'
				size='3xl'
				weight='bold'
				className='flex flex-wrap items-end gap-2 mb-4 md:mb-8'
				dark
			>
				{t('title')}
			</Text>
			<div className='grid gap-4 md:gap-y-16 lg:gap-y-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
				{response.data.lists.map((list: IList) => (
					<MediaCard
						media={list}
						type={list.type}
						key={list.id}
					/>
				))}
			</div>
		</div>
	)
}

export default ListPage
