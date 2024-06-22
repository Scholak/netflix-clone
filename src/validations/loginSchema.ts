import { ILogin } from '@/types/forms/loginType'
import { ZodType, z } from 'zod'

export const loginSchema: ZodType<ILogin> = z.object({
	email: z.string().min(1, 'email.required').email('email.invalid').max(50, 'email.max'),
	password: z.string().min(1, 'password.required').min(6, 'password.min').max(60, 'password.max'),
})
