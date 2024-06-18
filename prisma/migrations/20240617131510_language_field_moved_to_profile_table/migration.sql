/*
  Warnings:

  - You are about to drop the column `language` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "language" "Language" NOT NULL DEFAULT 'TURKISH';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "language";
