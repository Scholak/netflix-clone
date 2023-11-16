import { tmdbApi } from '@/lib/tmdbApi'
import { IGenre } from '@/types/genreType'
import { getRandomGenres } from '@/utils/getRandomGenre'
import { NextRequest } from 'next/server'

interface Params {
	params: {
		id: string
	}
}

export async function GET(request: NextRequest, { params }: Params) {
	const sliders = await Promise.all(
		getRandomGenres().map(async (genre: IGenre) => {
			const response = await tmdbApi.get(`/discover/movie?with_genres=${genre.id}`)
			const items = response.data.results.map((movie: any) => {
				return {
					id: movie.id,
					image: `${process.env.TMDB_IMAGE_PATH}/original${movie.backdrop_path}`,
				}
			})

			return {
				id: genre.id,
				title: genre.name,
				link: `/genre/${genre.id}`,
				items,
			}
		})
	)

	return new Response(JSON.stringify({ sliders }))
}
