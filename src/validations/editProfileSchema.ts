import { IEditProfile } from '@/types/forms/editProfileType'
import { ZodType, z } from 'zod'

export const editProfileSchema: ZodType<IEditProfile> = z.object({
	name: z.string().min(1, 'Lütfen profil adı girin.').max(15, 'Profil adı maksimum 15 karakter olabilir.'),
	language: z.string(),
})
