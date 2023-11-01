import { IRegister } from '@/types/forms/registerType'
import { ZodType, z } from 'zod'

export const registerSchema: ZodType<IRegister> = z.object({
	email: z.string().min(1, 'Lütfen e-posta adresini girin.').email('Lütfen geçerli bir e-posta adresini girin.'),
	password: z
		.string()
		.min(1, 'Parola 6 ile 60 karakter arasında olmalıdır.')
		.max(60, 'Parola 6 ile 60 karakter arasında olmalıdır.'),
})
