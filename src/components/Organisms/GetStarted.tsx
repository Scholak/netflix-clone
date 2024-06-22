// Library Imports
import { getTranslations } from 'next-intl/server'

// Comonent Imports
import Text from '@/components/Atoms/Text'
import GetStartedForm from '@/components/Molecules/GetStartedForm'

const GetStarted = async () => {
	const t = await getTranslations('Organisms.GetStarted')
	return (
		<div className='bg-black pb-20 px-6 sm:px-10 md:px-20 lg:px-30 xl:px-60 2xl:px-96'>
			<Text
				dark
				weight='medium'
				size='xl'
				align='center'
				className='py-6'
			>
				{t('title')}
			</Text>
			<GetStartedForm />
		</div>
	)
}

export default GetStarted
