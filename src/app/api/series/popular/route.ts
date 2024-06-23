// Utility Imports
import { tmdbApi } from '@/lib/tmdbApi'
import { getLanguage } from '@/utils/getLanguage'

export async function GET() {
	try {
		const language = getLanguage()

		const response = await tmdbApi.get('/tv/popular', { params: { language } })

		const series = response.data.results
			.map((serie: any) => {
				return {
					id: serie.id,
					image: `${process.env.TMDB_IMAGE_PATH}/original${serie.poster_path}`,
				}
			})
			.filter((serie: any) => !serie.image.includes('null'))

		return new Response(JSON.stringify({ series }))
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
