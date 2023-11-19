'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { MovieDetailPopup, SerieDetailPopup } from '.'

interface ISearchCardProps {
	media: any
	type: 'movie' | 'serie'
}

const SearchCard = ({ media, type }: ISearchCardProps) => {
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
			<div onClick={handleToggleDetail} className='w-full cursor-pointer sm:h-20 md:h-28 lg:h-36'>
				<Image
					src={media.image}
					alt='search result'
					width={300}
					height={300}
					className='w-full h-full object-cover rounded'
				/>
			</div>
			{selectedMovie !== -1 && <MovieDetailPopup id={media.id} setSelectedMovie={setSelectedMovie} />}
			{selectedSerie !== -1 && <SerieDetailPopup id={media.id} setSelectedSerie={setSelectedSerie} />}
		</>
	)
}

export default SearchCard