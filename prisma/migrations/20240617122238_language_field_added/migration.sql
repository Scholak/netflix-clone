/*
  Warnings:

  - Added the required column `avatar` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Language" AS ENUM ('TURKISH', 'ENGLISH');

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "avatar" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "language" "Language" NOT NULL DEFAULT 'TURKISH';
