import { IGetStarted } from '@/types/forms/getStrartedType'
import { ZodType, z } from 'zod'

export const getStartedSchema: ZodType<IGetStarted> = z.object({
	email: z.string().min(1, 'email.required').email('email.invalid').max(50, 'email.max'),
})
