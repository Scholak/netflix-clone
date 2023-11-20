'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheck, FaPlay, FaPlus, FaTimes } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getMovieDetail } from '@/services/movieService'
import { PopupRelatedMovies } from '..'
import { useRouter } from 'next/navigation'
import { addToList, removeFromList } from '@/services/listService'
import { queryClient } from '@/lib/queryClient'
import PopupLoader from './PopupLoader'

interface IMovieDetailPopupProps {
	id: number
	setSelectedMovie: any
}

const MovieDetailPopup = ({ id, setSelectedMovie }: IMovieDetailPopupProps) => {
	const router = useRouter()

	const { data, isLoading } = useQuery({
		queryKey: ['movieDetail'],
		queryFn: () => getMovieDetail(id),
	})

	const addToListMutation = useMutation({
		mutationFn: addToList,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['movieDetail'] })
			router.refresh()
		}
	})

	const removeFromListMutation = useMutation({
		mutationFn: removeFromList,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['movieDetail'] })
			router.refresh()
		},
	})

	data?.title ? (document.title = `${data.title} - Netflix`) : ''

	const handleClosePopup = () => {
		queryClient.removeQueries({ queryKey: ['movieDetail'] })
		document.title = 'Netflix Türkiye'
		setSelectedMovie(-1)
	}

	const handleAddToList = () => {
		addToListMutation.mutate({ mediaId: id, mediaType: 'movie' })
	}

	const handleRemoveFromList = () => {
		removeFromListMutation.mutate({ mediaId: id, mediaType: 'movie' })
	}

	return (
		<>
			{isLoading ? (
				<PopupLoader />
			) : (
				<>
					<div onClick={handleClosePopup} className='fixed inset-0 bg-black bg-opacity-80 z-20'></div>
					<div
						id='movieDetailPopup'
						className='fixed left-1/2 top-6 bottom-0 overflow-y-auto -translate-x-1/2 w-11/12 rounded-md bg-neutral-900 text-white z-30 md:w-3/4 lg:w-2/3'
					>
						<div className='relative bg-gradient-to-b from-transparent to-black h-[216px] md:h-[512px]'>
							<div
								onClick={handleClosePopup}
								className='absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-neutral-900 text-white rounded-full cursor-pointer'
							>
								<FaTimes />
							</div>
							<Image
								unoptimized
								src={data.image}
								alt='movie image'
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
								{data.existsInList ? (
									<div
										onClick={handleRemoveFromList}
										className='flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-neutral-700 text-white border border-white cursor-pointer'
									>
										<FaCheck />
									</div>
								) : (
									<div
										onClick={handleAddToList}
										className='flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-neutral-700 text-white border border-white cursor-pointer'
									>
										<FaPlus />
									</div>
								)}
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
													<span key={idx} className='text-white hover:underline'>
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
											<span key={idx} className='text-white hover:underline'>
												{idx !== 0 ? ', ' : ''}
												{genre.name}
											</span>
										))}
									</p>
								</div>
							</div>
							<PopupRelatedMovies movieId={data.id} movies={data.relatedMovies} />
							<div className='grid gap-3 px-3 pb-3 lg:pb-12 font-medium text-sm text-white md:px-6 md:pb-6 lg:px-12'>
								<p className='text-2xl font-bold'>{data.title} Hakkında</p>
								<p>
									Yönetmen:{' '}
									<span className='text-white'>
										{data.producers.map((producer: any, idx: number) => (
											<span key={idx} className='text-white hover:underline'>
												{idx !== 0 ? ', ' : ''}
												{producer.name}
											</span>
										))}
									</span>
								</p>
								<p>
									Oyuncu Kadrosu:{' '}
									{data.cast.map((cast: any, idx: number) => (
										<span key={idx} className='text-white hover:underline'>
											{idx !== 0 ? ', ' : ''}
											{cast.name}
										</span>
									))}
								</p>
								<p>
									Senarist:{' '}
									{data.directors.map((director: any, idx: number) => (
										<span key={idx} className='text-white hover:underline'>
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

export default MovieDetailPopup
