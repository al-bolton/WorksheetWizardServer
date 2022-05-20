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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorksheets = exports.getWorksheet = void 0;
const prisma_client_1 = __importDefault(require("../../prisma/prisma-client"));
const getWorksheet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // tslint:disable-next-line:no-console
    console.log('Received a GET Question request for single Worksheet');
    try {
        const worksheet = yield prisma_client_1.default.worksheet.findUnique({
            where: {
                id: parseInt(req.params.worksheetId, 10),
            },
            include: {
                questions: {
                    include: {
                        answers: true,
                    },
                },
            },
        });
        res.status(200).json(worksheet);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.getWorksheet = getWorksheet;
const getWorksheets = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // tslint:disable-next-line:no-console
    console.log('Received a GET Question request for all Worksheets');
    try {
        const worksheets = yield prisma_client_1.default.worksheet.findMany();
        res.status(200).json(worksheets);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.getWorksheets = getWorksheets;
//# sourceMappingURL=worksheet.controller.js.map