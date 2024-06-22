import { IPayWithCard } from '@/types/forms/payWithCardType'
import { ZodType, z } from 'zod'

export const payWithCardSchema: ZodType<IPayWithCard> = z.object({
	cardNumber: z.string().length(16, 'creditCard.invalid'),
	expiryDate: z.string().min(1, 'expiryDate.invalid'),
	cvv: z.string().length(3, 'cvv.invalid'),
	cardHolder: z.string().min(1, 'cardHolder.invalid'),
	confirm: z.boolean(),
})
