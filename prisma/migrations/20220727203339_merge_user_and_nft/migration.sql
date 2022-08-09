/*
  Warnings:

  - You are about to drop the `Nft` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Nft" DROP CONSTRAINT "Nft_userWalletAddress_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "chain" TEXT,
ADD COLUMN     "collection_name" TEXT,
ADD COLUMN     "contract_type" TEXT,
ADD COLUMN     "nft_description" TEXT,
ADD COLUMN     "nft_name" TEXT,
ADD COLUMN     "symbol" TEXT,
ADD COLUMN     "token_address" TEXT,
ADD COLUMN     "token_id" TEXT;

-- DropTable
DROP TABLE "Nft";
