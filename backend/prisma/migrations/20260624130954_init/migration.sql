-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
