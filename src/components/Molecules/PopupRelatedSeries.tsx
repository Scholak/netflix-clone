'use client'

// Library Imports
import Image from 'next/image'
import { useTranslations } from 'next-intl'

// Type Imports
import { ISerieOverview } from '@/types/serieType'

// Component Imports
import Text from '@/components/Atoms/Text'

type IBannerRelatedMoviesProps= {
	series: ISerieOverview[]
}

const PopupRelatedMovies = ({ series }: IBannerRelatedMoviesProps) => {
	const t = useTranslations('Molecules.PopupRelatedMovies')

	return (
		<div className='px-3 pb-3 md:px-6 md:pb-6 lg:px-12 lg:pb-12'>
			<Text
				element='h3'
				size='2xl'
				weight='bold'
				className='mb-6'
				dark
			>
				{t('related')}
			</Text>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{series.map((serie: ISerieOverview) => (
					<div
						key={serie.id}
						className='shadow rounded overflow-hidden bg-neutral-800 text-neutral-300 cursor-pointer'
					>
						<Image
							unoptimized
							src={serie.image}
							alt='related serie image'
							width={300}
							height={200}
							className='w-full aspect-video object-cover'
						/>
						<Text
							size='sm'
							className='p-3'
						>
							{serie.title}
						</Text>
					</div>
				))}
			</div>
		</div>
	)
}

export default PopupRelatedMovies
