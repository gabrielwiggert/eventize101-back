-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "nanoid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "dateTime" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);
