// Library Imports
import { getTranslations } from 'next-intl/server'

// Component Imports
import Text from '@/components/Atoms/Text'
import GiftOptionForm from '@/components/Molecules/GiftOptionForm'

const GiftOptionPage = async () => {
	const t = await getTranslations('Pages.GiftOptionPage')

	return (
		<div className='my-4 mx-4 flex flex-col gap-2 text-neutral-800 sm:my-8 sm:w-80 sm:mx-auto md:my-16 lg:w-96'>
			<Text
				element='h2'
				size='sm'
			>
				{t('step')}
			</Text>
			<Text
				element='h1'
				size='3xl'
				weight='bold'
				className='mb-2 -translate-y-1'
			>
				{t('title')}
			</Text>
			<GiftOptionForm />
			<Text
				size='sm'
				className='text-neutral-600'
			>
				{t.rich('description', {
					link: chunks => (
						<Text
							element='span'
							size='sm'
							className='text-sky-400'
						>
							{chunks}
						</Text>
					),
				})}
			</Text>
		</div>
	)
}

export default GiftOptionPage
