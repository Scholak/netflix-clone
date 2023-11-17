import { tmdbApi } from '@/lib/tmdbApi'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const response = await tmdbApi.get('/tv/on_the_air')

	const series = response.data.results.map((serie: any) => {
		return {
			id: serie.id,
			image: `${process.env.TMDB_IMAGE_PATH}/original${serie.backdrop_path}`,
		}
	})

	return new Response(JSON.stringify({ series }))
}
