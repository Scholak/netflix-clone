import { IPayWithCard } from '@/types/forms/payWithCardType'
import { ZodType, z } from 'zod'

export const payWithCardSchema: ZodType<IPayWithCard> = z.object({
	cardNumber: z.string().length(16, 'Lütfen geçerli bir kredi kartı numarası girin.'),
	expiryDate: z.string().min(1, 'Lütfen Geçerli bir tarih girin.'),
	cvv: z.string().length(3, 'Lütfen geçerli bir CVV girin.'),
	cardHolder: z.string().min(1, 'Lütfen geçerli bir isim girin.'),
	confirm: z.boolean(),
})
