// Library Imports
import { NextRequest } from 'next/server'

// Utility Imports
import { tmdbApi } from '@/lib/tmdbApi'
import { getLanguage } from '@/utils/getLanguage'

export async function GET(request: NextRequest) {
	try {
		const language = getLanguage()
		const searchParams = request.nextUrl.searchParams
		const query = searchParams.get('q')

		const response = await tmdbApi.get('/search/movie', { params: { language, query } })

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
