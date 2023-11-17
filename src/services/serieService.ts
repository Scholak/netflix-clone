import { api } from '@/lib/api'

export const getFeaturedSerie = async () => {
	const response = await api.get('/series/featured')
	return response.data.serie
}
