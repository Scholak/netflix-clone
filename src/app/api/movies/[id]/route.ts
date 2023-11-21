import { authOptions } from '@/lib/authOptions'
import { prisma } from '@/lib/prisma'
import { tmdbApi } from '@/lib/tmdbApi'
import { calculateRating } from '@/utils/calculateRating'
import { generateTeaser } from '@/utils/generateTeaser'
import { getServerSession } from 'next-auth'
import { NextRequest } from 'next/server'

interface Params {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: Params) {
	const movieResponsePromise = tmdbApi.get(`/movie/${params.id}`)
	const peopleResponsePromise = tmdbApi.get(`/movie/${params.id}/credits`)
	const relatedMoviesPromise = tmdbApi.get(`/movie/${params.id}/similar`)
	
	const session = await getServerSession(authOptions)
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
		relatedMovies: relatedMovies.data.results.map((movie: any) => {
			return {
				id: movie.id,
				overview: generateTeaser(movie.overview),
				image: `${process.env.TMDB_IMAGE_PATH}/original${movie.backdrop_path}`,
				releaseDate: movie.release_date,
			}
		}).filter((movie: any) => !movie.image.includes('null')),
	}

	return new Response(JSON.stringify({ movie }))
}
