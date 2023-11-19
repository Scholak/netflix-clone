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
			const response = await tmdbApi.get(`/discover/tv?with_genres=${genre.id}`)
			
			if (response.data.results) {
				const items = response.data.results.map((serie: any) => {
					return {
						id: serie.id,
						image: `${process.env.TMDB_IMAGE_PATH}/original${serie.poster_path}`,
					}
				}).filter((serie: any) => !serie.image.includes('null'))

				return {
					id: genre.id,
					title: genre.name,
					link: `/genre/${genre.id}`,
					items,
				}
			}
		})
	)

	return new Response(JSON.stringify({ sliders }))
}
