import { ICreateProfile } from '@/types/forms/createProfileType'
import { ZodType, z } from 'zod'

export const createProfileSchema: ZodType<ICreateProfile> = z.object({
	name: z.string().min(1, 'name.required').max(15, 'name.max'),
	language: z.string(),
})
