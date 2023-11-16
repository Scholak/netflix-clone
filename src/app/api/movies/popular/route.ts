import { tmdbApi } from '@/lib/tmdbApi'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const response = await tmdbApi.get('/movie/popular')

	const movies = response.data.results.map((movie: any) => {
    return {
			id: movie.id,
			image: `${process.env.TMDB_IMAGE_PATH}/original${movie.backdrop_path}`,
		}
  })

	return new Response(JSON.stringify({ movies }))
}
