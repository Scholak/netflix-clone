-- CreateTable
CREATE TABLE "List" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "mediaId" INTEGER NOT NULL,
    "mediaType" TEXT NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
