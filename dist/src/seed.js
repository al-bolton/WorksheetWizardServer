"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.answer.deleteMany({});
        yield prisma.question.deleteMany({});
        yield prisma.worksheet.deleteMany({});
        yield prisma.worksheet.create({
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
        yield prisma.worksheet.create({
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
    });
}
main()
    .catch((e) => {
    throw e;
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
//# sourceMappingURL=seed.js.map