import { tmdbApi } from '@/lib/tmdbApi'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const year = new Date().getFullYear()
	const response = await tmdbApi.get(`/discover/tv?&primary_release_date.gte=${year - 1}`)
	const randomNumber = Math.floor(Math.random() * 19)
	const serie = {
		id: response.data.results[randomNumber].id,
		title: response.data.results[randomNumber].name,
		image: `${process.env.TMDB_IMAGE_PATH}/original${response.data.results[randomNumber].backdrop_path}`,
	}

	return new Response(JSON.stringify({ serie }))
}
