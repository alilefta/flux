/*
  Warnings:

  - You are about to drop the column `memberId` on the `MessageReaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[directMessageId,profileId,emoji]` on the table `MessageReaction` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "DirectMessage" ADD COLUMN     "pinned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "replyToId" TEXT;

-- AlterTable
ALTER TABLE "FileAttachment" ADD COLUMN     "directMessageId" TEXT,
ALTER COLUMN "messageId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MessageReaction" DROP COLUMN "memberId",
ADD COLUMN     "directMessageId" TEXT,
ALTER COLUMN "messageId" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "DirectMessage_replyToId_idx" ON "DirectMessage"("replyToId");

-- CreateIndex
CREATE INDEX "FileAttachment_directMessageId_idx" ON "FileAttachment"("directMessageId");

-- CreateIndex
CREATE INDEX "MessageReaction_directMessageId_idx" ON "MessageReaction"("directMessageId");

-- CreateIndex
CREATE UNIQUE INDEX "MessageReaction_directMessageId_profileId_emoji_key" ON "MessageReaction"("directMessageId", "profileId", "emoji");

-- AddForeignKey
ALTER TABLE "FileAttachment" ADD CONSTRAINT "FileAttachment_directMessageId_fkey" FOREIGN KEY ("directMessageId") REFERENCES "DirectMessage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageReaction" ADD CONSTRAINT "MessageReaction_directMessageId_fkey" FOREIGN KEY ("directMessageId") REFERENCES "DirectMessage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageReaction" ADD CONSTRAINT "MessageReaction_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DirectMessage" ADD CONSTRAINT "DirectMessage_replyToId_fkey" FOREIGN KEY ("replyToId") REFERENCES "DirectMessage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
