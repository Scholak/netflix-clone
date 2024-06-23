// Utility Imports
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { tmdbApi } from '@/lib/tmdbApi'
import { getLanguage } from '@/utils/getLanguage'
import { generateTeaser } from '@/utils/generateTeaser'
import { calculateRating } from '@/utils/calculateRating'

interface Params {
	params: {
		id: string
	}
}

export async function GET(_: never, { params }: Params) {
	try {
		const language = getLanguage()

		const movieResponsePromise = tmdbApi.get(`/movie/${params.id}`, { params: { language } })
		const peopleResponsePromise = tmdbApi.get(`/movie/${params.id}/credits`, { params: { language } })
		const relatedMoviesPromise = tmdbApi.get(`/movie/${params.id}/similar`, { params: { language } })

		const session = await auth()
		const existsInList = await prisma.list.findFirst({
			where: {
				profileId: Number(session?.user.profileId),
				mediaId: Number(params.id),
				mediaType: 'movie',
			},
		})

		const promises = [movieResponsePromise, peopleResponsePromise, relatedMoviesPromise]

		const [movieResponse, peopleResponse, relatedMovies] = await Promise.all(promises)

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
			existsInList: !!existsInList,
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
						return {
							id: crew.id,
							name: crew.name,
						}
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
						return {
							id: crew.id,
							name: crew.name,
						}
					}
				})
				.filter((crew: any) => crew),
			relatedMovies: relatedMovies.data.results
				.map((movie: any) => {
					return {
						id: movie.id,
						overview: generateTeaser(movie.overview),
						image: `${process.env.TMDB_IMAGE_PATH}/original${movie.backdrop_path}`,
						releaseDate: movie.release_date,
					}
				})
				.filter((movie: any) => !movie.image.includes('null')),
		}

		return new Response(JSON.stringify({ movie }))
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
