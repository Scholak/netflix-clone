// Library Imports
import { getTranslations } from 'next-intl/server'

// Component Imports
import Feature from '@/components/Molecules/Feature'

// Asset Imports
import tvImg from '@/assets/tv.png'
import tv2Img from '@/assets/tv2.png'
import phoneImg from '@/assets/phone.png'
import childImg from '@/assets/child.png'

const Features = async () => {
	const t = await getTranslations('Organisms.Features')

	return (
		<div className='bg-black text-white py-8'>
			<Feature
				image={tvImg}
				title={t('featureOneTitle')}
				description={t('featureOneDescription')}
			/>
			<Feature
				image={phoneImg}
				title={t('featureTwoTitle')}
				description={t('featureTwoDescription')}
				reversed
			/>
			<Feature
				image={tv2Img}
				title={t('featureThreeTitle')}
				description={t('featureThreeDescription')}
			/>
			<Feature
				image={childImg}
				title={t('featureFourTitle')}
				description={t('featureFourDescription')}
				reversed
			/>
		</div>
	)
}

export default Features
