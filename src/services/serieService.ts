import { api } from '@/lib/api'

export const getFeaturedSerie = async () => {
	const response = await api.get('/series/featured')
	return response.data.serie
}

export const getSerieDetail = async (id: number) => {
	const response = await api.get(`/series/${id}`)
	return response.data.serie
}