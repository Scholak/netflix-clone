import { api } from '@/lib/api'
import { ICreateProfile } from '@/types/forms/createProfileType'
import { IEditProfile } from '@/types/forms/editProfileType'

export const getProfiles = async () => {
  const response = await api.get('/profile')
  return response.data.profiles
}

export const createNewProfile = async (data: ICreateProfile) => {
	const response = await api.post('/profile', data)
  return response.data
}

export const editProfile = async ({id, data}: { id: number, data: IEditProfile }) => {
	const response = await api.put(`/profile/${id}`, data)
	return response.data
}