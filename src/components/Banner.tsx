'use client'

import { getFeaturedMovie } from '@/services/movieService'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInfo, FaPlay } from 'react-icons/fa'

interface IBannerProps {
  mediaType: 'movie' | 'serie'
}

const Banner = ({ mediaType }: IBannerProps) => {
  const { data, isLoading } = useQuery({
		queryKey: mediaType === 'movie' ? ['featuredMovie'] : ['featuredSerie'],
		queryFn: mediaType === 'movie' ? getFeaturedMovie : getFeaturedMovie,
	})

  return (
		<>
			{!isLoading && (
				<div className='relative w-screen h-[90vh] flex items-center'>
					<div className='absolute inset-0 bg-black bg-opacity-30 z-10'></div>
					<div className='px-4 text-white z-20 translate-y-20 md:max-w-screen-sm md:px-8 xl:px-16'>
						<h1 className='text-3xl text-center font-bold md:text-2xl md:text-left'>{data.title}</h1>
						<p className='my-4 text-lg text-center text-medium md:my-8 md:text-xl md:text-left'>{data.overview}</p>
						<div className='flex flex-col gap-2 md:flex-row md:gap-4'>
							<Link href='/' className='flex items-center justify-center gap-2 rounded bg-white py-3 px-6 text-neutral-900 text-xl'>
								<FaPlay />
								<span className='font-bold'>Oynat</span>
							</Link>
							<button className='flex items-center justify-center gap-2 py-3 px-6 rounded bg-neutral-600 text-white'>
								<div className='h-min flex items-center justify-center p-1 border-2 border-white rounded-full aspect-square'>
									<FaInfo className='shrink-0 text-white' />
								</div>
								<span className='font-bold'>Daha Fazla Bilgi</span>
							</button>
						</div>
					</div>
					<Image src={data.image} alt='poster' fill className='inset-0 object-cover' />
				</div>
			)}
		</>
	)
}

export default Banner