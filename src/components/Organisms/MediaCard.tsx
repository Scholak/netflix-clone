'use client'

// Library Imports
import { useState } from 'react'
import Image from 'next/image'

// Components Imports
import MovieDetailPopup from '@/components/Organisms/MovieDetailPopup'
import SerieDetailPopup from '@/components/Organisms/SerieDetailPopup'

type IMediaCardProps = {
	media: any
	type: 'movie' | 'serie'
}

const MediaCard = ({ media, type }: IMediaCardProps) => {
	const [selectedMovie, setSelectedMovie] = useState<number>(-1)
	const [selectedSerie, setSelectedSerie] = useState<number>(-1)

	const handleToggleDetail = () => {
		if (type === 'movie') {
			setSelectedMovie(media.id)
		} else {
			setSelectedSerie(media.id)
		}
	}

	return (
		<>
			<div
				onClick={handleToggleDetail}
				className='w-full cursor-pointer sm:h-20 md:h-28 lg:h-36'
			>
				<Image
					unoptimized
					src={media.image}
					alt='search result'
					width={300}
					height={300}
					className='w-full h-full object-cover rounded'
				/>
			</div>
			{selectedMovie !== -1 && (
				<MovieDetailPopup
					id={media.id}
					setSelectedMovie={setSelectedMovie}
				/>
			)}
			{selectedSerie !== -1 && (
				<SerieDetailPopup
					id={media.id}
					setSelectedSerie={setSelectedSerie}
				/>
			)}
		</>
	)
}

export default MediaCard
