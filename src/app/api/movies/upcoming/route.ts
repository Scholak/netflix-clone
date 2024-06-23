// Utility Imports
import { tmdbApi } from '@/lib/tmdbApi'
import { getLanguage } from '@/utils/getLanguage'

export async function GET() {
	try {
		const language = getLanguage()

		const response = await tmdbApi.get('/movie/upcoming', { params: { language } })

		const movies = response.data.results
			.map((movie: any) => {
				return {
					id: movie.id,
					image: `${process.env.TMDB_IMAGE_PATH}/original${movie.backdrop_path}`,
				}
			})
			.filter((movie: any) => !movie.image.includes('null'))

		return new Response(JSON.stringify({ movies }))
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
