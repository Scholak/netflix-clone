import { ISearch } from '@/types/forms/searchType'
import { z, ZodType } from 'zod'

export const searchSchema: ZodType<ISearch> = z.object({
  query: z.string().min(1)
})