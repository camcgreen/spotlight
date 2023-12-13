import { z } from 'zod'

export const CreatedSceneSchema = z.object({
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

export const SceneSchema = CreatedSceneSchema.extend({
  id: z.string(),
})

export type CreatedSceneType = z.infer<typeof CreatedSceneSchema>
export type SceneType = z.infer<typeof SceneSchema>
