import { tmdbApi } from '@/lib/tmdbApi'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const response = await tmdbApi.get('/tv/top_rated')

	const serie = {
		id: response.data.results[0].id,
		title: response.data.results[0].name,
		image: `${process.env.TMDB_IMAGE_PATH}/original${response.data.results[0].backdrop_path}`,
	}

	return new Response(JSON.stringify({ serie }))
}
