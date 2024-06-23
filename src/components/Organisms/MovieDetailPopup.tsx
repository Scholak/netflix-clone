'use client'

// Library Imports
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { AiOutlineLike } from 'react-icons/ai'
import { useMutation, useQuery } from '@tanstack/react-query'
import { FaCheck, FaPlay, FaPlus, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

// Type Imports
import { IGenre } from '@/types/genreType'
import { ICast, IDirector, IProducer } from '@/types/personType'

// Component Imports
import Text from '@/components/Atoms/Text'
import PopupLoader from '@/components/Organisms/PopupLoader'
import PopupRelatedMovies from '@/components/Organisms/PopupRelatedMovies'

// Utility Imports
import { queryClient } from '@/lib/queryClient'

// Service Imports
import { getMovieDetail } from '@/services/movieService'
import { addToList, removeFromList } from '@/services/listService'

interface IMovieDetailPopupProps {
	id: number
	setSelectedMovie: (id: number) => void
}

const MovieDetailPopup = ({ id, setSelectedMovie }: IMovieDetailPopupProps) => {
	const t = useTranslations('Organisms.MovieDetailPopup')
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
		},
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
					<div
						onClick={handleClosePopup}
						className='fixed inset-0 bg-black bg-opacity-80 z-20'
					></div>
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
									<Text
										element='span'
										weight='bold'
									>
										{t('play')}
									</Text>
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
									<Text
										size='sm'
										weight='medium'
										className='mb-8'
									>
										{data.rating}
									</Text>
									<Text
										element='h3'
										size='2xl'
										weight='bold'
										className='mb-4'
									>
										{data.title}
									</Text>
									<Text>{data.overview}</Text>
								</div>
								<div>
									<Text
										size='sm'
										className='mb-2 text-neutral-400'
									>
										{t('cast')}:{' '}
										{data.cast.map((cast: ICast, idx: number) => {
											if (idx < 5) {
												return (
													<Text
														key={idx}
														element='span'
														className=' hover:underline'
														dark
													>
														{idx !== 0 ? ', ' : ''}
														{cast.name}
													</Text>
												)
											}
										})}
									</Text>
									<Text
										size='sm'
										className='text-neutral-400'
									>
										{t('genres')}:{' '}
										{data.genres.map((genre: IGenre, idx: number) => (
											<Text
												key={idx}
												element='span'
												className='hover:underline'
												dark
											>
												{idx !== 0 ? ', ' : ''}
												{genre.name}
											</Text>
										))}
									</Text>
								</div>
							</div>
							<PopupRelatedMovies
								movieId={data.id}
								movies={data.relatedMovies}
							/>
							<div className='grid gap-3 px-3 pb-3 lg:pb-12 font-medium text-sm text-white md:px-6 md:pb-6 lg:px-12'>
								<Text
									size='2xl'
									weight='bold'
								>
									{t.rich('about', {
										about: chunks => data.title,
									})}
								</Text>
								<Text>
									{t('director')}:{' '}
									<Text
										element='span'
										dark
									>
										{data.producers.map((producer: IProducer, idx: number) => (
											<Text
												key={idx}
												element='span'
												className='hover:underline'
												dark
											>
												{idx !== 0 ? ', ' : ''}
												{producer.name}
											</Text>
										))}
									</Text>
								</Text>
								<Text>
									{t('cast')}:{' '}
									{data.cast.map((cast: ICast, idx: number) => (
										<Text
											key={idx}
											element='span'
											className='hover:underline'
											dark
										>
											{idx !== 0 ? ', ' : ''}
											{cast.name}
										</Text>
									))}
								</Text>
								<Text>
									{t('scriptWriter')}:{' '}
									{data.directors.map((director: IDirector, idx: number) => (
										<Text
											key={idx}
											element='span'
											className='hover:underline'
											dark
										>
											{idx !== 0 ? ', ' : ''}
											{director.name}
										</Text>
									))}
								</Text>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default MovieDetailPopup
