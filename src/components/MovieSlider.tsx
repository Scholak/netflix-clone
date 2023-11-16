'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { MovieDetailPopup } from '.'

interface IMovieSliderProps {
  title: string
  link: string
  items: any[]
}

const MovieSlider = ({ title, link, items }: IMovieSliderProps) => {
  const [selectedMovie, setSelectedMovie] = useState<number>(-1)

	return (
		<div className='select-none p-4 md:p-8 xl:p-16'>
			<Link href={link} className='group inline-flex items-center gap-1 mb-6 text-2xl text-white font-bold'>
				<h4>{title}</h4>
				<p className='text-sm text-sky-600 font-medium -translate-x-8 opacity-0 transition delay-100 duration-500 group-hover:opacity-100 group-hover:translate-x-0'>
					Tümüne Göz At
				</p>
				<FaAngleRight className='-translate-x-28 text-sky-600 transition delay-100 duration-500 z-[1] group-hover:translate-x-0' />
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
					className='text-white text-4xl'
				>
					{items.map((item: any) => (
						<SwiperSlide key={item.id} onClick={() => setSelectedMovie(item.id)} className='cursor-pointer'>
							<Image
								src={item.image}
								alt='movie image'
								width={400}
								height={300}
								className='w-full h-full object-cover rounded'
							/>
						</SwiperSlide>
					))}
				</Swiper>
				{selectedMovie !== -1 && <MovieDetailPopup id={selectedMovie} setSelectedMovie={setSelectedMovie} />}
			</div>
		</div>
	)
}

export default MovieSlider