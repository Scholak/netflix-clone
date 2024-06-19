// Library Imports
import { redirect } from 'next/navigation'

// Type Imports
import { IMovieMedia } from '@/types/movieType'
import { ISerieMedia } from '@/types/serieType'

// Component Imports
import Text from '@/components/Atoms/Text'
import MediaCard from '@/components/Organisms/MediaCard'

// Utility Imports
import { api } from '@/lib/api'

interface ISearchParams {
	searchParams: {
		q?: string
	}
}

const SearchPage = async ({ searchParams }: ISearchParams) => {
	if (!searchParams.q || searchParams.q === '') {
		redirect('/user')
	}

	const moviePromise = api.get(`/movies/search?q=${searchParams.q}`)
	const seriePromise = api.get(`/series/search?q=${searchParams.q}`)

	const promises = [moviePromise, seriePromise]

	const [movieResponse, serieResponse] = await Promise.all(promises)

	return (
		<div className='px-4 py-20 md:px-8 xl:px-16 bg-neutral-900'>
			<Text
				element='h5'
				size='3xl'
				weight='bold'
				className='flex flex-wrap items-end gap-2 mb-4 md:mb-8'
				dark
			>
				{movieResponse.data.movies.length === 0 && serieResponse.data.series.length === 0 ? (
					<>
						<Text element='span'>{searchParams.q}</Text>
						<Text
							element='span'
							size='lg'
							weight='medium'
							className='whitespace-nowrap text-neutral-300 '
						>
							için sonuç bulunamadı
						</Text>
					</>
				) : (
					<>
						<Text>{searchParams.q}</Text>
						<Text
							size='lg'
							weight='medium'
							className='whitespace-nowrap text-neutral-300'
						>
							için arama sonuçları
						</Text>
					</>
				)}
			</Text>
			<div className='grid gap-4 md:gap-y-16 lg:gap-y-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
				{movieResponse.data.movies.map((movie: IMovieMedia) => (
					<MediaCard
						media={movie}
						type='movie'
						key={movie.id}
					/>
				))}
				{serieResponse.data.series.map((serie: ISerieMedia) => (
					<MediaCard
						media={serie}
						type='serie'
						key={serie.id}
					/>
				))}
			</div>
		</div>
	)
}

export default SearchPage
