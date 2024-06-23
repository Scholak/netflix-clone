// Utility Imports
import { tmdbApi } from '@/lib/tmdbApi'
import { getLanguage } from '@/utils/getLanguage'

export async function GET() {
	try {
		const language = getLanguage()

		const today = new Date()
		const lastWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
		const lastWeekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)

		const response = await tmdbApi.get('/discover/movie', {
			params: {
				language,
				'primary_release_date.gte': lastWeekStart.toISOString(),
				'primary_release_date.lte': lastWeekEnd.toISOString(),
			},
		})

		const movies = response.data.results
			.map((movie: any) => {
				return {
					id: movie.id,
					image: `${process.env.TMDB_IMAGE_PATH}/original${movie.poster_path}`,
				}
			})
			.filter((movie: any) => !movie.image.includes('null'))
			.slice(0, 10)

		return new Response(JSON.stringify({ movies }))
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
