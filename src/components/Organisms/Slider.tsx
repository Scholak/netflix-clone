'use client'

// Library Imports
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { FaAngleRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

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

type ISliderProps = {
	title: string
	link: string
	items: IMovieOverview[] | ISerieOverview[]
	type: 'movie' | 'serie'
}

const Slider = ({ title, link, items, type }: ISliderProps) => {
	const locale = useLocale()
	const t = useTranslations('Organisms.Slider')

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
			<Link
				href={link}
				className='group inline-flex items-center gap-1 mb-3 text-2xl text-white font-bold md:mb-6'
			>
				<Text element='h4'>{title}</Text>
				<Text
					size='sm'
					className='text-sky-600 font-medium -translate-x-8 opacity-0 transition delay-100 duration-500 group-hover:opacity-100 group-hover:translate-x-0'
				>
					{t('seeAll')}
				</Text>
				<FaAngleRight
					className={`${
						locale === 'tr' ? '-translate-x-44' : '-translate-x-20'
					} text-sky-600 transition delay-100 duration-500 z-[1] group-hover:translate-x-0`}
				/>
			</Link>
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
					id='swiper'
					className='text-white text-4xl'
				>
					{items?.map((item: any) => (
						<SwiperSlide
							key={item.id}
							onClick={() => handleTogglePopup(item.id)}
							className='cursor-pointer h-full'
						>
							<Image
								unoptimized
								src={item.image}
								alt='media image'
								width={200}
								height={150}
								className='w-full h-full object-cover rounded'
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

export default Slider
