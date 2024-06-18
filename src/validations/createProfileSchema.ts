import { ICreateProfile } from '@/types/forms/createProfileType'
import { ZodType, z } from 'zod'

export const createProfileSchema: ZodType<ICreateProfile> = z.object({
	name: z.string().min(1, 'Lütfen profil adı girin.').max(15, 'Profil adı maksimum 15 karakter olabilir.'),
	language: z.string(),
})
