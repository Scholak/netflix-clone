import { tmdbApi } from '@/lib/tmdbApi'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const response = await tmdbApi.get('/tv/popular')

	const series = response.data.results.map((serie: any) => {
    return {
			id: serie.id,
			image: `${process.env.TMDB_IMAGE_PATH}/original${serie.poster_path}`,
		}
  })

	return new Response(JSON.stringify({ series }))
}
