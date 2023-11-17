import { tmdbApi } from '@/lib/tmdbApi'
import { generateTeaser } from '@/utils/generateTeaser'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const response = await tmdbApi.get('/movie/top_rated')
	const movie = {
		id: response.data.results[0].id,
		title: response.data.results[0].title,
		overview: generateTeaser(response.data.results[0].overview, 300),
		image: `${process.env.TMDB_IMAGE_PATH}/original${response.data.results[0].backdrop_path}`,
	}

  return new Response(JSON.stringify({ movie }))
}