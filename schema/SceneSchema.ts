import { z } from 'zod'

export const SceneSchema = z.object({
  id: z.string(),
  title: z.string(),
  device: z.union([
    z.literal('iPhone'),
    z.literal('iPad'),
    z.literal('MacBook'),
  ]),
  imageLink: z.string().nullable().optional(),
  backgroundColor: z.string(),
  position: z.string(),
  rotation: z.string(),
  userId: z.string(),
})

export type SceneType = z.infer<typeof SceneSchema>
