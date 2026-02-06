import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const serverscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ServerScalarWhereInputObjectSchema), z.lazy(() => ServerScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServerScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServerScalarWhereInputObjectSchema), z.lazy(() => ServerScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  imageUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  inviteCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  profileId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  memberCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ServerScalarWhereInputObjectSchema: z.ZodType<Prisma.ServerScalarWhereInput> = serverscalarwhereinputSchema as unknown as z.ZodType<Prisma.ServerScalarWhereInput>;
export const ServerScalarWhereInputObjectZodSchema = serverscalarwhereinputSchema;
