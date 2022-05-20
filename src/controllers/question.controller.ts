import { NextFunction, Request, Response } from 'express';
import prisma from '../../prisma/prisma-client';

export const getWorksheetQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // tslint:disable-next-line:no-console
  console.log('Received a GET Question request for one Worksheet');

  try {
    const questions = await prisma.question.findMany({
      where: {
        worksheetId: req.body.worksheetId,
      },
      include: {
        answers: true,
      },
    });
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
