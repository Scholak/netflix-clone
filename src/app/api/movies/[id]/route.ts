import { tmdbApi } from '@/lib/tmdbApi'
import { calculateRating } from '@/utils/calculateRating'
import { generateTeaser } from '@/utils/generateTeaser'
import { NextRequest } from 'next/server'

interface Params {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: Params) {
	const movieResponse = await tmdbApi.get(`/movie/${params.id}`)
	const peopleResponse = await tmdbApi.get(`/movie/${params.id}/credits`)

	const genreIds = movieResponse.data.genres.map((genre: any) => genre.id).join(',')

	const relatedMovies = await tmdbApi.get(`/discover/movie?with_genres=${genreIds}`)

  let producerFound: boolean = false
  let directorFound: boolean = false

	const movie = {
		id: movieResponse.data.id,
		title: movieResponse.data.title,
		overview: movieResponse.data.overview,
		image: `${process.env.TMDB_IMAGE_PATH}/original${movieResponse.data.backdrop_path}`,
		genres: movieResponse.data.genres,
		rating: calculateRating(movieResponse.data.vote_average),
		runtime: movieResponse.data.runtime,
		cast: peopleResponse.data.cast
			.map((cast: any, idx: number) => {
				if (idx > 9) {
					return null
				}

				return {
					id: cast.id,
					name: cast.name,
				}
			})
			.filter((cast: any) => cast),
		producers: peopleResponse.data.crew
			.map((crew: any) => {
				if (producerFound) {
					return null
				}

				if (crew.job === 'Producer') {
					producerFound = true
					return crew
				}
			})
			.filter((crew: any) => crew),
		directors: peopleResponse.data.crew
			.map((crew: any) => {
				if (directorFound) {
					return null
				}

				if (crew.job === 'Director') {
					directorFound = true
					return crew
				}
			})
			.filter((crew: any) => crew),
			relatedMovies: relatedMovies.data.results.map((movie: any) => {
				return {
					id: movie.id,
					overview: generateTeaser(movie.overview),
					image: `${process.env.TMDB_IMAGE_PATH}/original${movie.backdrop_path}`,
					releaseDate: movie.release_date,
				}
			})
	}

	return new Response(JSON.stringify({ movie }))
}
