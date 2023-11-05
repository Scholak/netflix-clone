import { api } from '@/lib/api'

export const getFeaturedMovie = async () => {
  const response = await api.get('/movies/featured')
	return response.data.movie
}