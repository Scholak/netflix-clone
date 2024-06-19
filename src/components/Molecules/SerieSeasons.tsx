// Library Imports
import Image from 'next/image'

// Type Imports
import { ISerieSeason } from '@/types/serieType'

// Component Imports
import Text from '@/components/Atoms/Text'

interface ISerieSeasonsProps {
	seasons: ISerieSeason[]
}

const SerieSeasons = ({ seasons }: ISerieSeasonsProps) => {
	return (
		<div className='px-3 pb-3 md:px-6 md:pb-6 lg:px-12 lg:pb-12'>
			<Text
				element='h3'
				size='2xl'
				weight='bold'
				className='mb-6'
				dark
			>
				Sezonlar
			</Text>
			<div className='grid gap-2'>
				{seasons.map((season: ISerieSeason, idx: number) => (
					<div
						key={season.id}
						className='flex items-start gap-2 py-6 px-3 shadow overflow-hidden border-b border-neutral-500 text-neutral-300 cursor-pointer'
					>
						<Text
							size='2xl'
							weight='bold'
							className='mr-6 self-center'
						>
							{idx + 1}
						</Text>
						<div className='flex flex-col gap-2 md:flex-row'>
							<Image
								unoptimized
								src={season.poster}
								alt='related serie image'
								width={200}
								height={120}
								className='shrink-0 rounded aspect-video object-cover'
							/>
							<div className='flex-1'>
								<Text
									size='lg'
									weight='medium'
									className='mb-2'
								>
									{season.name}
								</Text>
								<Text size='sm'>{season.overview}</Text>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default SerieSeasons
