'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlay, FaPlus, FaTimes } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query'
import { getMovieBannerDetail } from '@/services/movieService'
import { BannerRelatedMovies } from '.'

interface IBannerDetailProps {
	id: number
	mediaType: 'movie' | 'serie'
	setToggleDetail: any
}

const BannerDetail = ({ id, mediaType, setToggleDetail }: IBannerDetailProps) => {
	const { data, isLoading } = useQuery({
		queryKey: mediaType === 'movie' ? ['movieBannerDetail'] : ['serieBannerDetail'],
		queryFn: mediaType === 'movie' ? () => getMovieBannerDetail(id) : () => getMovieBannerDetail(id),
	})

	return (
		<>
			{!isLoading && (
				<>
					<div onClick={() => setToggleDetail(false)} className='fixed inset-0 bg-black bg-opacity-80 z-20'></div>
					<div className='absolute left-1/2 top-6 -translate-x-1/2 w-11/12 rounded-md bg-neutral-900 text-white z-30 md:w-2/3 lg:w-1/2'>
						<div className='relative h-[512px] bg-gradient-to-b from-transparent to-black'>
							<div
								onClick={() => setToggleDetail(false)}
								className='absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-neutral-900 text-white rounded-full cursor-pointer'
							>
								<FaTimes />
							</div>
							<Image
								src={data.image}
								alt={mediaType === 'movie' ? 'movie image' : 'serie image'}
								width={800}
								height={500}
								className='absolute w-full h-full object-cover -z-10'
							/>
							<div className='h-full flex items-end gap-3 p-3 md:p-6 lg:p-12'>
								<Link
									href='/'
									className='flex items-center justify-center gap-2 rounded bg-white py-1 px-4 text-neutral-900 text-xl'
								>
									<FaPlay />
									<span className='font-bold'>Oynat</span>
								</Link>
								<div className='flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-neutral-700 text-white border border-white cursor-pointer'>
									<FaPlus />
								</div>
								<div className='flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-neutral-700 text-white border border-white cursor-pointer'>
									<AiOutlineLike />
								</div>
							</div>
						</div>
						<div>
							<div className='grid gap-6 p-3 md:grid-cols-3 md:p-6 lg:p-12'>
								<div className='md:col-span-2'>
									<p className='mb-8 text-sm font-medium'>{data.rating}</p>
									<h3 className='text-2xl font-bold mb-4'>{data.title}</h3>
									<p>{data.overview}</p>
								</div>
								<div>
									<p className='mb-2 text-sm text-neutral-400'>
										Oyuncu Kadrosu:{' '}
										{data.cast.map((cast: any, idx: number) => {
											if (idx < 5) {
												return (
													<span className='text-white hover:underline'>
														{idx !== 0 ? ', ' : ''}
														{cast.name}
													</span>
												)
											}
										})}
									</p>
									<p className='text-sm text-neutral-400'>
										Türler:{' '}
										{data.genres.map((genre: any, idx: number) => (
											<span className='text-white hover:underline'>
												{idx !== 0 ? ', ' : ''}
												{genre.name}
											</span>
										))}
									</p>
								</div>
							</div>
							<BannerRelatedMovies movieId={data.id} movies={data.relatedMovies} />
							<div className='grid gap-3 px-3 pb-3 lg:pb-12 font-medium text-sm text-white md:px-6 md:pb-6 lg:px-12'>
								<p className='text-2xl font-bold'>{data.title} Hakkında</p>
								<p>
									Yönetmen:{' '}
									<span className='text-white'>
										{data.producers.map((producer: any, idx: number) => (
											<span className='text-white hover:underline'>
												{idx !== 0 ? ', ' : ''}
												{producer.name}
											</span>
										))}
									</span>
								</p>
								<p>
									Oyuncu Kadrosu:{' '}
									{data.cast.map((cast: any, idx: number) => (
										<span className='text-white hover:underline'>
											{idx !== 0 ? ', ' : ''}
											{cast.name}
										</span>
									))}
								</p>
								<p>
									Senarist:{' '}
									{data.directors.map((director: any, idx: number) => (
										<span className='text-white hover:underline'>
											{idx !== 0 ? ', ' : ''}
											{director.name}
										</span>
									))}
								</p>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default BannerDetail