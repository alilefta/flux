import * as z from 'zod';
export const ProfileGroupByResultSchema = z.array(z.object({
  id: z.string(),
  clerkId: z.string(),
  name: z.string(),
  imageUrl: z.string(),
  email: z.string(),
  bio: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    clerkId: z.number(),
    name: z.number(),
    imageUrl: z.number(),
    email: z.number(),
    bio: z.number(),
    servers: z.number(),
    members: z.number(),
    channels: z.number(),
    conversationsInitiated: z.number(),
    conversationsReceived: z.number(),
    directMessages: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    clerkId: z.string().nullable(),
    name: z.string().nullable(),
    imageUrl: z.string().nullable(),
    email: z.string().nullable(),
    bio: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    clerkId: z.string().nullable(),
    name: z.string().nullable(),
    imageUrl: z.string().nullable(),
    email: z.string().nullable(),
    bio: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));