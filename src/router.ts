import { Router } from 'express';
const router = Router();

import { getWorksheet, getWorksheets } from './controllers/worksheet.controller';
import { getWorksheetQuestions } from './controllers/question.controller';

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/worksheet/:worksheetId', getWorksheet);
router.get('/worksheets', getWorksheets);

router.get('/questions', getWorksheetQuestions);

export default router;
