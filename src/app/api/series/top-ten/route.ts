import { tmdbApi } from '@/lib/tmdbApi'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const today = new Date()
	const lastWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
	const lastWeekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)

	const response = await tmdbApi.get(`/discover/tv?first_air_date.gte=${lastWeekStart.toISOString()}&first_air_date.lte=${lastWeekEnd.toISOString()}`)

	const series = response.data.results.map((serie: any) => {
		return {
			id: serie.id,
			image: `${process.env.TMDB_IMAGE_PATH}/original${serie.poster_path}`,
		}
	}).slice(0, 10)

	return new Response(JSON.stringify({ series }))
}
