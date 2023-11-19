import { tmdbApi } from '@/lib/tmdbApi'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const response = await tmdbApi.get('/tv/airing_today')

	const series = response.data.results.map((serie: any) => {
		return {
			id: serie.id,
			image: `${process.env.TMDB_IMAGE_PATH}/original${serie.backdrop_path}`,
		}
	}).filter((serie: any) => !serie.image.includes('null'))

	return new Response(JSON.stringify({ series }))
}
