import { ISerieOverview } from '@/types/serieType'
import Image from 'next/image'
import React from 'react'

interface IBannerRelatedMoviesProps {
	series: ISerieOverview[]
}

const PopupRelatedMovies = ({ series }: IBannerRelatedMoviesProps) => {
	return (
		<div className='px-3 pb-3 md:px-6 md:pb-6 lg:px-12 lg:pb-12'>
			<h3 className='mb-6 text-2xl text-white font-bold'>Benzerleri</h3>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{series.map((serie: ISerieOverview) => (
					<div key={serie.id} className='shadow rounded overflow-hidden bg-neutral-800 text-neutral-300 cursor-pointer'>
						<Image
							unoptimized
							src={serie.image}
							alt='related serie image'
							width={300}
							height={200}
							className='w-full aspect-video object-cover'
						/>
						<p className='p-3 text-sm'>{serie.title}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default PopupRelatedMovies
