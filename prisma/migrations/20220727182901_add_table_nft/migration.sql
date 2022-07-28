-- AlterTable
ALTER TABLE "users" ADD COLUMN     "nftContractType" TEXT;

-- CreateTable
CREATE TABLE "Nft" (
    "contract_type" TEXT NOT NULL,
    "collectionName" TEXT,
    "symbol" TEXT,
    "token_address" TEXT,
    "token_id" TEXT,
    "chain" TEXT NOT NULL,
    "name" TEXT,
    "desciption" TEXT,
    "userWalletAddress" TEXT NOT NULL,

    CONSTRAINT "Nft_pkey" PRIMARY KEY ("contract_type")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nft_userWalletAddress_key" ON "Nft"("userWalletAddress");

-- AddForeignKey
ALTER TABLE "Nft" ADD CONSTRAINT "Nft_userWalletAddress_fkey" FOREIGN KEY ("userWalletAddress") REFERENCES "users"("wallet_address") ON DELETE RESTRICT ON UPDATE CASCADE;
