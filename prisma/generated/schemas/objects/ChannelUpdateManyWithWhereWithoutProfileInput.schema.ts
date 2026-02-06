import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelScalarWhereInputObjectSchema as ChannelScalarWhereInputObjectSchema } from './ChannelScalarWhereInput.schema';
import { ChannelUpdateManyMutationInputObjectSchema as ChannelUpdateManyMutationInputObjectSchema } from './ChannelUpdateManyMutationInput.schema';
import { ChannelUncheckedUpdateManyWithoutProfileInputObjectSchema as ChannelUncheckedUpdateManyWithoutProfileInputObjectSchema } from './ChannelUncheckedUpdateManyWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChannelScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ChannelUpdateManyMutationInputObjectSchema), z.lazy(() => ChannelUncheckedUpdateManyWithoutProfileInputObjectSchema)])
}).strict();
export const ChannelUpdateManyWithWhereWithoutProfileInputObjectSchema: z.ZodType<Prisma.ChannelUpdateManyWithWhereWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateManyWithWhereWithoutProfileInput>;
export const ChannelUpdateManyWithWhereWithoutProfileInputObjectZodSchema = makeSchema();
