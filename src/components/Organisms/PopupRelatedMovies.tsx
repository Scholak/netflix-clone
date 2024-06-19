// library Imports
import Image from 'next/image'

// Type Imports
import { IMovieOverview } from '@/types/movieType'

// Component Imports
import Text from '@/components/Atoms/Text'

interface IBannerRelatedMoviesProps {
	movieId: number
	movies: IMovieOverview[]
}

const PopupRelatedMovies = ({ movieId, movies }: IBannerRelatedMoviesProps) => {
	return (
		<div className='px-3 pb-3 md:px-6 md:pb-6 lg:px-12 lg:pb-12'>
			<Text
				element='h3'
				size='2xl'
				weight='bold'
				className='mb-6'
				dark
			>
				Benzerleri
			</Text>
			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{movies.map((movie: IMovieOverview) => {
					if (movie.overview && movie.id !== movieId) {
						return (
							<div
								key={movie.id}
								className='shadow rounded overflow-hidden bg-neutral-800 text-neutral-300 cursor-pointer'
							>
								<Image
									unoptimized
									src={movie.image}
									alt='related movie image'
									width={300}
									height={200}
									className='w-full'
								/>
								<Text
									size='sm'
									className='p-3'
								>
									{movie.overview}
								</Text>
							</div>
						)
					}
				})}
			</div>
		</div>
	)
}

export default PopupRelatedMovies
