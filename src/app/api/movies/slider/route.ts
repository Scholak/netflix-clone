// Library Imports
import { getTranslations } from 'next-intl/server'

// Type Imports
import { IGenre } from '@/types/genreType'

// Utility Imports
import { tmdbApi } from '@/lib/tmdbApi'
import { getLanguage } from '@/utils/getLanguage'
import { getRandomGenres } from '@/utils/getRandomGenre'

export async function GET() {
	try {
		const t = await getTranslations('Api.Genres')
		const language = getLanguage()

		const sliders = await Promise.all(
			getRandomGenres().map(async (genre: IGenre) => {
				const response = await tmdbApi.get('/discover/movie', { params: { language, with_genres: genre.id } })
				const items = response.data.results
					.map((movie: any) => {
						return {
							id: movie.id,
							image: `${process.env.TMDB_IMAGE_PATH}/original${movie.backdrop_path}`,
						}
					})
					.filter((movie: any) => !movie.image.includes('null'))

				return {
					id: genre.id,
					title: t(genre.name),
					link: `/genre/${genre.id}`,
					items,
				}
			}),
		)

		return new Response(JSON.stringify({ sliders }))
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
