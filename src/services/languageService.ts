import { api } from '@/lib/api'

export const changeLanguage = async (language: 'tr' | 'en') => {
	return await api.post('/locale', { language })
}
