import { z } from 'zod'

export const getStartedFormSchema = z.object({
  name: z.string().nonempty(),
  companyName: z.string().nonempty(),
  website: z.string().url().nonempty(),
})

export type getStartedFormSchemaType = z.infer<typeof getStartedFormSchema>

export const schedulaDemoFormSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  phone: z.string().nonempty(),
  date: z.date()
})

export type schedulaDemoFormSchemaType = z.infer<typeof schedulaDemoFormSchema>