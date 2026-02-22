import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentScalarWhereInputObjectSchema as FileAttachmentScalarWhereInputObjectSchema } from './FileAttachmentScalarWhereInput.schema';
import { FileAttachmentUpdateManyMutationInputObjectSchema as FileAttachmentUpdateManyMutationInputObjectSchema } from './FileAttachmentUpdateManyMutationInput.schema';
import { FileAttachmentUncheckedUpdateManyWithoutDirectMessageInputObjectSchema as FileAttachmentUncheckedUpdateManyWithoutDirectMessageInputObjectSchema } from './FileAttachmentUncheckedUpdateManyWithoutDirectMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileAttachmentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FileAttachmentUpdateManyMutationInputObjectSchema), z.lazy(() => FileAttachmentUncheckedUpdateManyWithoutDirectMessageInputObjectSchema)])
}).strict();
export const FileAttachmentUpdateManyWithWhereWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentUpdateManyWithWhereWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentUpdateManyWithWhereWithoutDirectMessageInput>;
export const FileAttachmentUpdateManyWithWhereWithoutDirectMessageInputObjectZodSchema = makeSchema();
