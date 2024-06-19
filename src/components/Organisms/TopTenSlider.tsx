'use client'

// Library Imports
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

// Type Imports
import { ISerieOverview } from '@/types/serieType'
import { IMovieOverview } from '@/types/movieType'

// Component Imports
import Text from '@/components/Atoms/Text'
import SerieDetailPopup from '@/components/Organisms/SerieDetailPopup'
import MovieDetailPopup from '@/components/Organisms/MovieDetailPopup'

// Asset Imports
import 'swiper/css'
import 'swiper/css/navigation'

interface ITopTenSliderProps {
	title: string
	items: IMovieOverview[] | ISerieOverview[]
	type: 'movie' | 'serie'
}

const TopTenSlider = ({ title, items, type }: ITopTenSliderProps) => {
	const [selectedMovie, setSelectedMovie] = useState<number>(-1)
	const [selectedSerie, setSelectedSerie] = useState<number>(-1)

	const handleTogglePopup = (id: number) => {
		if (type === 'movie') {
			setSelectedMovie(id)
		} else {
			setSelectedSerie(id)
		}
	}

	return (
		<div className='select-none p-4 md:p-8 xl:px-16'>
			<Text
				element='h4'
				size='2xl'
				weight='bold'
				className='mb-3 md:mb-6'
				dark
			>
				{title}
			</Text>
			<div>
				<Swiper
					spaceBetween={10}
					slidesPerView={6}
					initialSlide={0}
					modules={[Navigation]}
					navigation
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						460: {
							slidesPerView: 2,
						},
						640: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 4,
						},
						1280: {
							slidesPerView: 5,
						},
						1536: {
							slidesPerView: 6,
						},
					}}
					className='top-ten-slider text-white text-4xl'
				>
					{items.map((item: any, idx: number) => (
						<SwiperSlide
							key={item.id}
							onClick={() => handleTogglePopup(item.id)}
							className='top-ten-slide relative items-center cursor-pointer h-full'
						>
							<Text
								className={
									idx === 9
										? 'top-ten-number absolute left-0 text-black font-bold tracking-tighter -translate-x-4 md:-translate-x-16'
										: 'top-ten-number absolute left-0 text-black font-bold md:-translate-x-4'
								}
							>
								{idx + 1}
							</Text>
							<Image
								unoptimized
								src={item.image}
								alt='media image'
								width={100}
								height={150}
								className={
									idx === 9
										? 'w-1/2 h-full mx-auto object-cover rounded z-10 translate-x-12 md:translate-x-0'
										: 'w-1/2 h-full mx-auto object-cover rounded z-10 translate-x-4 md:translate-x-0'
								}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				{selectedMovie !== -1 && (
					<MovieDetailPopup
						id={selectedMovie}
						setSelectedMovie={setSelectedMovie}
					/>
				)}
				{selectedSerie !== -1 && (
					<SerieDetailPopup
						id={selectedSerie}
						setSelectedSerie={setSelectedSerie}
					/>
				)}
			</div>
		</div>
	)
}

export default TopTenSlider
