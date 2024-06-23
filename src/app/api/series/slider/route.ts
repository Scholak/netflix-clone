// Library Imports
import { getTranslations } from 'next-intl/server'

// Utility Imports
import { tmdbApi } from '@/lib/tmdbApi'
import { IGenre } from '@/types/genreType'
import { getLanguage } from '@/utils/getLanguage'
import { getRandomGenres } from '@/utils/getRandomGenre'

export async function GET() {
	try {
		const t = await getTranslations('Api.Genres')
		const language = getLanguage()

		const sliders = await Promise.all(
			getRandomGenres().map(async (genre: IGenre) => {
				const response = await tmdbApi.get(`/discover/tv`, { params: { language, with_genres: genre.id } })

				if (response.data.results) {
					const items = response.data.results
						.map((serie: any) => {
							return {
								id: serie.id,
								image: `${process.env.TMDB_IMAGE_PATH}/original${serie.poster_path}`,
							}
						})
						.filter((serie: any) => !serie.image.includes('null'))

					return {
						id: genre.id,
						title: t(genre.name),
						link: `/genre/${genre.id}`,
						items,
					}
				}
			}),
		)

		return new Response(JSON.stringify({ sliders }))
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
