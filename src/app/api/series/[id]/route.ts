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
	const serieResponse = await tmdbApi.get(`/tv/${params.id}`)
	const peopleResponse = await tmdbApi.get(`/tv/${params.id}/credits`)
	const relatedSeries = await tmdbApi.get(`/tv/${params.id}/similar`)


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
		relatedSeries: relatedSeries.data.results.map((serie: any) => {
			return {
				id: serie.id,
				title: serie.name,
				image: `${process.env.TMDB_IMAGE_PATH}/original${serie.backdrop_path}`,
				releaseDate: serie.first_air_date,
			}
		}),
	}

	return new Response(JSON.stringify({ serie }))
}
