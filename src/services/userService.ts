import { api } from '@/lib/api'
import { IGetStarted } from '@/types/forms/getStrartedType'

export const isExistingUser = async (data: IGetStarted) => {
  const response = await api.post('/existing-user', data)
  return response.data.userExists
}

export const signup = async ({ email, password, planId, cardNumber}: { email: string, password: string, planId: number, cardNumber: string }) => {
	const response = await api.post('/signup', { email, password, planId, cardNumber })
	return response.data
}