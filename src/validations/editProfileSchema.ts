import { IEditProfile } from '@/types/forms/editProfileType'
import { ZodType, z } from 'zod'

export const editProfileSchema: ZodType<IEditProfile> = z.object({
	name: z.string().min(1, 'name.required').max(15, 'name.max'),
	language: z.string(),
})
