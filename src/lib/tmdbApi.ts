import axios from 'axios'

export const tmdbApi = axios.create({
	baseURL: process.env.TMDB_API_URL!,
})

tmdbApi.defaults.params = {
	api_key: process.env.TMDB_API_KEY!,
}
