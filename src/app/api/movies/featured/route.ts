import { tmdbApi } from '@/lib/tmdbApi'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const response = await tmdbApi.get('/movie/now_playing')
	const movie = {
		id: response.data.results[0].id,
		title: response.data.results[0].title,
		overview: response.data.results[0].overview,
		image: `${process.env.TMDB_IMAGE_PATH}/original${response.data.results[0].backdrop_path}`,
	}

  return new Response(JSON.stringify({ movie }))
}