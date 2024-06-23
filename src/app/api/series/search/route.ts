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

		const response = await tmdbApi.get('/search/tv', { params: { language, query } })

		const series = response.data.results
			.map((serie: any) => {
				return {
					id: serie.id,
					image: `${process.env.TMDB_IMAGE_PATH}/original${serie.backdrop_path}`,
				}
			})
			.filter((serie: any) => !serie.image.includes('null'))

		return new Response(JSON.stringify({ series }))
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
