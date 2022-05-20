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
exports.getWorksheetQuestions = void 0;
const prisma_client_1 = __importDefault(require("../../prisma/prisma-client"));
const getWorksheetQuestions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // tslint:disable-next-line:no-console
    console.log('Received a GET Question request for all Questions');
    try {
        const questions = yield prisma_client_1.default.question.findMany({
            where: {
                worksheetId: req.body.worksheetId,
            },
            include: {
                answers: true,
            },
        });
        res.status(200).json(questions);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.getWorksheetQuestions = getWorksheetQuestions;
//# sourceMappingURL=question.controller.js.map