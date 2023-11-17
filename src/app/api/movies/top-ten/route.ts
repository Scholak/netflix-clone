import { tmdbApi } from '@/lib/tmdbApi'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const today = new Date()
	const lastWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
	const lastWeekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)

	const response = await tmdbApi.get(`/discover/movie?primary_release_date.gte=${lastWeekStart.toISOString()}&primary_release_date.lte=${lastWeekEnd.toISOString()}`)

	const movies = response.data.results
		.map((movie: any) => {
			return {
				id: movie.id,
				image: `${process.env.TMDB_IMAGE_PATH}/original${movie.poster_path}`,
			}
		})
		.slice(0, 10)

	return new Response(JSON.stringify({ movies }))
}
