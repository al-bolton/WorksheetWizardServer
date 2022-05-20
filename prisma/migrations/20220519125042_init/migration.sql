-- CreateTable
CREATE TABLE "Worksheet" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "questionIds" INTEGER[],

    CONSTRAINT "Worksheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "body" VARCHAR(255) NOT NULL,
    "answerIds" INTEGER[],
    "worksheetId" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "body" VARCHAR(255) NOT NULL,
    "correct" BOOLEAN NOT NULL,
    "questionIds" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_worksheetId_fkey" FOREIGN KEY ("worksheetId") REFERENCES "Worksheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionIds_fkey" FOREIGN KEY ("questionIds") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
