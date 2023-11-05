import axios from 'axios'

export const tmdbApi = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
})

tmdbApi.defaults.params = {
	api_key: process.env.TMDB_API_KEY!,
	language: 'tr',
}