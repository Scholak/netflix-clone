import { api } from '@/lib/api'

export const getFeaturedMovie = async () => {
  const response = await api.get('/movies/featured')
	return response.data.movie
}

export const getMovieBannerDetail = async (id: number) => {
  const response = await api.get(`/movies/${id}`)
  return response.data.movie
}