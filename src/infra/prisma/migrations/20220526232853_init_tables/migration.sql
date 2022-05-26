-- CreateTable
CREATE TABLE "Accounts" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "color" CHAR(6),

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" UUID NOT NULL,
    "accountId" UUID NOT NULL,
    "currency" CHAR(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "categoryId" UUID,
    "reference" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Accounts_name_idx" ON "Accounts"("name");

-- CreateIndex
CREATE INDEX "Transactions_accountId_idx" ON "Transactions"("accountId");

-- CreateIndex
CREATE INDEX "Transactions_date_idx" ON "Transactions"("date");

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
