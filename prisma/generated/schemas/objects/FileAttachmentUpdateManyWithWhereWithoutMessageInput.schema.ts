import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentScalarWhereInputObjectSchema as FileAttachmentScalarWhereInputObjectSchema } from './FileAttachmentScalarWhereInput.schema';
import { FileAttachmentUpdateManyMutationInputObjectSchema as FileAttachmentUpdateManyMutationInputObjectSchema } from './FileAttachmentUpdateManyMutationInput.schema';
import { FileAttachmentUncheckedUpdateManyWithoutMessageInputObjectSchema as FileAttachmentUncheckedUpdateManyWithoutMessageInputObjectSchema } from './FileAttachmentUncheckedUpdateManyWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileAttachmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileAttachmentUpdateManyMutationInputObjectSchema), z.lazy(() => FileAttachmentUncheckedUpdateManyWithoutMessageInputObjectSchema)])
}).strict();
export const FileAttachmentUpdateManyWithWhereWithoutMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentUpdateManyWithWhereWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentUpdateManyWithWhereWithoutMessageInput>;
export const FileAttachmentUpdateManyWithWhereWithoutMessageInputObjectZodSchema = makeSchema();
