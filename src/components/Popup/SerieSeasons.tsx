import Image from 'next/image'
import React from 'react'

interface ISerieSeasonsProps {
	seasons: any[]
}

const SerieSeasons = ({seasons}: ISerieSeasonsProps) => {
  return (
		<div className='px-3 pb-3 md:px-6 md:pb-6 lg:px-12 lg:pb-12'>
			<h3 className='mb-6 text-2xl text-white font-bold'>Sezonlar</h3>
			<div className='grid gap-2'>
				{seasons.map((season: any, idx: number) => (
					<div
						key={season.id}
						className='flex items-start gap-2 py-6 px-3 shadow overflow-hidden border-b border-neutral-500 text-neutral-300 cursor-pointer'
					>
						<p className='mr-6 self-center text-2xl font-bold'>{idx + 1}</p>
						<Image
							unoptimized
							src={season.poster}
							alt='related serie image'
							width={200}
							height={120}
							className='shrink-0 rounded aspect-video object-cover'
						/>
						<div className='flex-1'>
							<p className='mb-2 text-lg font-medium'>{season.name}</p>
							<p className='text-sm'>{season.overview}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default SerieSeasons