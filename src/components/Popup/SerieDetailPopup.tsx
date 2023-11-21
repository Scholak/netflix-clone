'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheck, FaPlay, FaPlus, FaTimes } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getSerieDetail } from '@/services/serieService'
import { PopupRelatedSeries, SerieSeasons } from '..'
import { useRouter } from 'next/navigation'
import { addToList, removeFromList } from '@/services/listService'
import { queryClient } from '@/lib/queryClient'
import PopupLoader from './PopupLoader'
import { ICast, IDirector, IProducer } from '@/types/personType'
import { IGenre } from '@/types/genreType'

interface ISerieDetailPopupProps {
	id: number
	setSelectedSerie: (id: number) => void
}

const SerieDetailPopup = ({ id, setSelectedSerie }: ISerieDetailPopupProps) => {
	const router = useRouter()

	const { data, isLoading } = useQuery({
		queryKey: ['serieDetail'],
		queryFn: () => getSerieDetail(id),
	})

	const addToListMutation = useMutation({
		mutationFn: addToList,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['serieDetail'] })
			router.refresh()
		},
	})

	const removeFromListMutation = useMutation({
		mutationFn: removeFromList,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['serieDetail'] })
			router.refresh()
		},
	})

	data?.title ? (document.title = `${data.title} - Netflix`) : ''

	const handleClosePopup = () => {
		queryClient.removeQueries({ queryKey: ['serieDetail'] })
		document.title = 'Netflix Türkiye'
		setSelectedSerie(-1)
	}

	const handleAddToList = () => {
		addToListMutation.mutate({ mediaId: id, mediaType: 'serie' })
	}

	const handleRemoveFromList = () => {
		removeFromListMutation.mutate({ mediaId: id, mediaType: 'serie' })
	}

	return (
		<>
			{isLoading ? (
				<PopupLoader />
			) : (
				<>
					<div onClick={handleClosePopup} className='fixed inset-0 bg-black bg-opacity-80 z-20'></div>
					<div
						id='serieDetailPopup'
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
								alt='serie image'
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
									<p>{data.overview ? data.overview : 'açıklama yok'}</p>
								</div>
								<div>
									<p className='mb-2 text-sm text-neutral-400'>
										Oyuncu Kadrosu:{' '}
										{data.cast.map((cast: ICast, idx: number) => {
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
										{data.genres.map((genre: IGenre, idx: number) => (
											<span key={idx} className='text-white hover:underline'>
												{idx !== 0 ? ', ' : ''}
												{genre.name}
											</span>
										))}
									</p>
								</div>
							</div>
							<SerieSeasons seasons={data.seasons} />
							<PopupRelatedSeries series={data.relatedSeries} />
							<div className='grid gap-3 px-3 pb-3 lg:pb-12 font-medium text-sm text-white md:px-6 md:pb-6 lg:px-12'>
								<p className='text-2xl font-bold'>{data.title} Hakkında</p>
								<p>
									Yönetmen:{' '}
									<span className='text-white'>
										{data.producers.map((producer: IProducer, idx: number) => (
											<span key={idx} className='text-white hover:underline'>
												{idx !== 0 ? ', ' : ''}
												{producer.name}
											</span>
										))}
									</span>
								</p>
								<p>
									Oyuncu Kadrosu:{' '}
									{data.cast.map((cast: ICast, idx: number) => (
										<span key={idx} className='text-white hover:underline'>
											{idx !== 0 ? ', ' : ''}
											{cast.name}
										</span>
									))}
								</p>
								<p>
									Senarist:{' '}
									{data.directors.map((director: IDirector, idx: number) => (
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

export default SerieDetailPopup
