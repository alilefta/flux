import * as z from 'zod';

export const ChannelTypeSchema = z.enum(['TEXT', 'AUDIO', 'VIDEO'])

export type ChannelType = z.infer<typeof ChannelTypeSchema>;