import { tmdbApi } from '@/lib/tmdbApi'
import { NextRequest } from 'next/server'


export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

	const response = await tmdbApi.get(`/search/movie?query=${query}`)

	const movies = response.data.results.map((movie: any) => {
		return {
			id: movie.id,
			image: `${process.env.TMDB_IMAGE_PATH}/original${movie.backdrop_path}`,
		}
	}).filter((movie: any) => !movie.image.includes('null'))

	return new Response(JSON.stringify({ movies }))
}
