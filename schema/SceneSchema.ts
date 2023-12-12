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
  positionX: z.number(),
  positionY: z.number(),
  positionZ: z.number(),
  rotationX: z.number(),
  rotationY: z.number(),
  rotationZ: z.number(),
  userId: z.string(),
})

export type SceneType = z.infer<typeof SceneSchema>
