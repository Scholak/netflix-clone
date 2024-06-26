// Utility Imports
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { tmdbApi } from '@/lib/tmdbApi'
import { getLanguage } from '@/utils/getLanguage'
import { calculateRating } from '@/utils/calculateRating'

type Params = {
	params: {
		id: string
	}
}

export async function GET(_: never, { params }: Params) {
	try {
		const language = getLanguage()

		const serieResponsePromise = tmdbApi.get(`/tv/${params.id}`, {
			params: { language, append_to_response: 'episode_groups' },
		})
		const peopleResponsePromise = tmdbApi.get(`/tv/${params.id}/credits`, { params: { language } })
		const relatedSeriesPromise = tmdbApi.get(`/tv/${params.id}/similar`, { params: { language } })
		const session = await auth()
		const existsInList = await prisma.list.findFirst({
			where: {
				profileId: Number(session?.user.profileId),
				mediaId: Number(params.id),
				mediaType: 'serie',
			},
		})

		const promises = [serieResponsePromise, peopleResponsePromise, relatedSeriesPromise]

		const [serieResponse, peopleResponse, relatedSeries] = await Promise.all(promises)

		let producerFound: boolean = false
		let directorFound: boolean = false

		const serie = {
			id: serieResponse.data.id,
			title: serieResponse.data.name,
			overview: serieResponse.data.overview,
			image: `${process.env.TMDB_IMAGE_PATH}/original${serieResponse.data.backdrop_path}`,
			genres: serieResponse.data.genres,
			rating: calculateRating(serieResponse.data.vote_average),
			runtime: serieResponse.data.runtime,
			existsInList: !!existsInList,
			seasons: serieResponse.data.seasons.map((season: any) => {
				return {
					id: season.id,
					date: season.air_date,
					name: season.name,
					overview: season.overview,
					episodeCOunt: season.episode_count,
					poster: `${process.env.TMDB_IMAGE_PATH}/original${season.poster_path}`,
				}
			}),
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
			relatedSeries: relatedSeries.data.results
				.map((serie: any) => {
					return {
						id: serie.id,
						title: serie.name,
						image: `${process.env.TMDB_IMAGE_PATH}/original${serie.poster_path}`,
						releaseDate: serie.first_air_date,
					}
				})
				.filter((serie: any) => !serie.image.includes('null')),
		}

		return new Response(JSON.stringify({ serie }))
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
