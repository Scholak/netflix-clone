// Utility Imports
import { tmdbApi } from '@/lib/tmdbApi'
import { getLanguage } from '@/utils/getLanguage'
import { generateTeaser } from '@/utils/generateTeaser'

export async function GET() {
	try {
		const language = getLanguage()

		const year = new Date().getFullYear()
		const response = await tmdbApi.get('/discover/movie', {
			params: { language, 'primary_release_date.gte': year - 1 },
		})
		const randomNumber = Math.floor(Math.random() * 19)
		const movie = {
			id: response.data.results[randomNumber].id,
			title: response.data.results[randomNumber].title,
			overview: generateTeaser(response.data.results[randomNumber].overview, 300),
			image: `${process.env.TMDB_IMAGE_PATH}/original${response.data.results[randomNumber].backdrop_path}`,
		}

		return new Response(JSON.stringify({ movie }))
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
