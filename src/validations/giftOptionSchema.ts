import { IGiftOption } from '@/types/forms/giftOptionType'
import { ZodType, z } from 'zod'

export const giftOptionSchema: ZodType<IGiftOption> = z.object({
  code: z.string().length(11, 'Lütfen geçerli bir hediye kodu girin.')
})
