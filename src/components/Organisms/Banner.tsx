'use client'

// Library Imports
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { FaInfo, FaPlay } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

// Component Imports
import Text from '@/components/Atoms/Text'
import BannerLoader from '@/components/Organisms/BannerLoader'
import MovieDetailPopup from '@/components/Organisms/MovieDetailPopup'
import SerieDetailPopup from '@/components/Organisms/SerieDetailPopup'

// Service Imports
import { getFeaturedMovie } from '@/services/movieService'
import { getFeaturedSerie } from '@/services/serieService'

interface IBannerProps {
	mediaType: 'movie' | 'serie'
}

const Banner = ({ mediaType }: IBannerProps) => {
	const t = useTranslations('Organisms.Banner')

	const { data, isLoading } = useQuery({
		queryKey: mediaType === 'movie' ? ['featuredMovie'] : ['featuredSerie'],
		queryFn: mediaType === 'movie' ? getFeaturedMovie : getFeaturedSerie,
	})

	const [selectedMovie, setSelectedMovie] = useState<number>(-1)
	const [selectedSerie, setSelectedSerie] = useState<number>(-1)

	const handleToggleDetail = () => {
		if (mediaType === 'movie') {
			setSelectedMovie(data.id)
		} else {
			setSelectedSerie(data.id)
		}
	}

	return (
		<>
			{isLoading ? (
				<BannerLoader />
			) : (
				<div className='relative w-full h-[90vh] flex items-end'>
					<div className='absolute inset-0 bg-black bg-opacity-30 z-[9]'></div>
					<div className='px-4 w-full text-white z-[9] -translate-y-2 md:px-8 lg:w-1/2 xl:px-16'>
						<Text
							element='h1'
							size='5xl'
							align='center'
							weight='bold'
							className=' md:text-left'
						>
							{data.title}
						</Text>
						<Text
							size='lg'
							align='center'
							weight='medium'
							className='my-4 md:my-8 md:text-xl md:text-left'
						>
							{data?.overview}
						</Text>
						<div className='flex flex-col gap-2 md:flex-row md:gap-4'>
							<Link
								href='/'
								className='flex items-center justify-center gap-2 rounded bg-white py-3 px-6 text-neutral-900 text-xl'
							>
								<FaPlay />
								<Text
									element='span'
									weight='bold'
								>
									{t('play')}
								</Text>
							</Link>
							<button
								onClick={handleToggleDetail}
								className='flex items-center justify-center gap-2 py-3 px-6 rounded bg-neutral-600 text-white'
							>
								<div className='h-min flex items-center justify-center p-1 border-2 border-white rounded-full aspect-square'>
									<FaInfo className='shrink-0 text-white' />
								</div>
								<Text
									element='span'
									weight='bold'
								>
									{t('more')}
								</Text>
							</button>
						</div>
					</div>
					<Image
						unoptimized
						src={data.image}
						alt='poster'
						fill
						className='inset-0 object-cover'
					/>
					{selectedMovie !== -1 && (
						<MovieDetailPopup
							id={data.id}
							setSelectedMovie={setSelectedMovie}
						/>
					)}
					{selectedSerie !== -1 && (
						<SerieDetailPopup
							id={data.id}
							setSelectedSerie={setSelectedSerie}
						/>
					)}
				</div>
			)}
		</>
	)
}

export default Banner
