"use strict";
// import { PrismaClient } from '@prisma/client';
Object.defineProperty(exports, "__esModule", { value: true });
// // Prevent multiple instances of Prisma Client in development
// const prisma = global.prisma || new PrismaClient();
// if (process.env.NODE_ENV === 'development') {
//   global.prisma = prisma;
// }
// export default prisma;
const client_1 = require("@prisma/client");
const prisma = global.prisma || new client_1.PrismaClient();
if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma;
}
exports.default = prisma;
//# sourceMappingURL=prisma-client.js.map