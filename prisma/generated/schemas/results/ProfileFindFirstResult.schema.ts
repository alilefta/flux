import * as z from 'zod';
export const ProfileFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  clerkId: z.string(),
  name: z.string(),
  imageUrl: z.string().optional(),
  email: z.string(),
  bio: z.string().optional(),
  servers: z.array(z.unknown()),
  members: z.array(z.unknown()),
  channels: z.array(z.unknown()),
  conversationsInitiated: z.array(z.unknown()),
  conversationsReceived: z.array(z.unknown()),
  directMessages: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));