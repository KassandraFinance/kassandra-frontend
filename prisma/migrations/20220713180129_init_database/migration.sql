-- CreateTable
CREATE TABLE "shared_img_funds" (
    "id" TEXT NOT NULL,
    "contract" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shared_img_funds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "wallet_address" TEXT NOT NULL,
    "nickname" TEXT,
    "twitter" TEXT,
    "website" TEXT,
    "telegram" TEXT,
    "discord" TEXT,
    "description" TEXT,
    "image" TEXT,
    "is_nft" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("wallet_address")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");
