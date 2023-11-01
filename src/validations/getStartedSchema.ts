import { IGetStarted } from '@/types/forms/getStrartedType'
import { ZodType, z } from 'zod'

export const getStartedSchema: ZodType<IGetStarted> = z.object({
	email: z.string().min(1, 'Lütfen e-posta adresini girin.').email('Lütfen geçerli bir e-posta adresini girin.').max(50, 'E-posta adresi maksimum 50 karakter olabilir.'),
})