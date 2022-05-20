import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.answer.deleteMany({});
  await prisma.question.deleteMany({});
  await prisma.worksheet.deleteMany({});

  await prisma.worksheet.create({
    data: {
      title: 'Lord of the Rings test',
      questions: {
        create: [
          {
            body: 'How was Frodo related to Bilbo Baggins?',
            answers: {
              create: [
                {
                  body: 'He was his son',
                  correct: false,
                },
                {
                  body: 'He was his cousin',
                  correct: true,
                },
                {
                  body: 'He was his brother',
                  correct: false,
                },
                {
                  body: 'He was his grandson',
                  correct: false,
                },
              ],
            },
          },
          {
            body: 'What is Gandalf known as to the Elves?',
            answers: {
              create: [
                {
                  body: 'Mithrandir',
                  correct: true,
                },
                {
                  body: 'Celeborn',
                  correct: false,
                },
                {
                  body: 'Thorin',
                  correct: false,
                },
                {
                  body: 'Glorfindel',
                  correct: false,
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.worksheet.create({
    data: {
      title: 'Harry Potter test',
      questions: {
        create: [
          {
            body: "What was the name of Albus Dumbledore's brother?",
            answers: {
              create: [
                {
                  body: 'Grindelwald',
                  correct: false,
                },
                {
                  body: 'Aparius',
                  correct: false,
                },
                {
                  body: 'Aberforth',
                  correct: true,
                },
                {
                  body: 'Gregoreth',
                  correct: false,
                },
              ],
            },
          },
          {
            body: "The 'Felifors' spell turns a cat into a what?",
            answers: {
              create: [
                {
                  body: 'Hat',
                  correct: false,
                },
                {
                  body: 'Bat',
                  correct: false,
                },
                {
                  body: 'Matchbox',
                  correct: false,
                },
                {
                  body: 'Cauldron',
                  correct: true,
                },
              ],
            },
          },
        ],
      },
    },
  });

  // tslint:disable-next-line:no-console
  console.log('Database seeded with sample worksheets');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
