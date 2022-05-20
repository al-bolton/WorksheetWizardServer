"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const worksheet_controller_1 = require("./controllers/worksheet.controller");
const question_controller_1 = require("./controllers/question.controller");
router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.get('/worksheet/:worksheetId', worksheet_controller_1.getWorksheet);
router.get('/worksheets', worksheet_controller_1.getWorksheets);
router.get('/questions', question_controller_1.getWorksheetQuestions);
exports.default = router;
//# sourceMappingURL=router.js.map