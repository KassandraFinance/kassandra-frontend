/*
  Warnings:

  - Added the required column `contract` to the `sharedImageFund` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sharedImageFund" ADD COLUMN     "contract" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "User" (
    "wallet_address" TEXT NOT NULL,
    "nickname" TEXT,
    "twitter" TEXT,
    "website" TEXT,
    "telegram" TEXT,
    "discord" TEXT,
    "description" TEXT,
    "image" TEXT,
    "is_nft" BOOLEAN DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("wallet_address")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");
